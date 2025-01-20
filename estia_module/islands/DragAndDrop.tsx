


import { useEffect, useRef } from "preact/hooks";
import { useState } from "preact/hooks";

let uniqueIdCounter = 0;

export default function DragAndDrop({ gensDuGroupe,NomEquipe }) {
  const UnGroupe = gensDuGroupe;
  const [nomEquipe, setNomEquipe] = useState(NomEquipe);
  console.log(gensDuGroupe);

  // Générer un ID unique pour chaque instance
  const instanceId = uniqueIdCounter++;
  const dropzoneId = `dropzone-${instanceId}`;

  const dragStartHandler = (event: DragEvent) => {
    const draggableElement = event.target as HTMLElement;
    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", draggableElement.id);
      event.dataTransfer.effectAllowed = "move";
    }
  };

  const dropHandler = (event: DragEvent) => {
    event.preventDefault();
    const droppedElementId = event.dataTransfer!.getData("text/plain");
    const droppedElement = document.getElementById(droppedElementId);

    if (droppedElement) {
      console.log(`Dropped ${droppedElementId} into ${event.currentTarget?.id}`);

      // Ajuste les styles pour se conformer à la grille
      droppedElement.style.position = "static";
      droppedElement.style.margin = "5px";

      // Ajouter l'élément dans la dropzone si ce n'est pas déjà fait
      if (!(event.currentTarget as HTMLElement).contains(droppedElement)) {
        (event.currentTarget as HTMLElement).appendChild(droppedElement);
      }
    }
  };

  useEffect(() => {
    const dropzone = document.getElementById(dropzoneId);
    const draggableElements = document.querySelectorAll(".draggable");

    if (!dropzone) {
      console.error("Dropzone not found!");
      return;
    }

    // Autoriser le Drag-over
    dropzone.addEventListener("dragover", (event: DragEvent) => {
      event.preventDefault();
      event.dataTransfer!.dropEffect = "move";
    });

    // Ajouter le listener pour le drop
    dropzone.addEventListener("drop", dropHandler);

    // Ajouter les événements de dragstart sur les éléments draggables
    draggableElements.forEach((element) => {
      element.addEventListener("dragstart", dragStartHandler);
    });

    // Cleanup : Retirer les écouteurs lors du démontage
    return () => {
      dropzone.removeEventListener("dragover", (event: DragEvent) => {});
      dropzone.removeEventListener("drop", dropHandler);
      draggableElements.forEach((element) => {
        element.removeEventListener("dragstart", dragStartHandler);
      });
    };
  }, [dropzoneId]);

  const handleChange = (e) => {
    setNomEquipe(e.target.value);
  };

  return (
    <div>
      <link rel="stylesheet" href="/style/CreateGroupes.css" />
      
      <div className="drag-and-drop-container">
        <input type="text" className="nom-equipe" value={nomEquipe}  onChange={handleChange} />
        <div
          id={dropzoneId}
          className="dropzone" >
          {UnGroupe.map((element, index) => {
            const draggableId = `draggable-${instanceId}-${index}`;
            return (
              <div
                key={draggableId}
                id={draggableId}
                draggable="true"
                className={`draggable ${element.includes("Monsieur") ? "font_boys" : "font_girl"}`}>
                {element}
              </div>
            );
          })}
        </div>
       </div>
      </div>
  );
}






/* import { useEffect } from "preact/hooks";

let uniqueIdCounter = 0;

export default function DragAndDrop({gensDuGroupe}) {

  let UnGroupe = gensDuGroupe;
  console.log(gensDuGroupe);

  // Génère un ID unique pour cette instance
  const instanceId = uniqueIdCounter++;
  const draggableId = `draggable-${instanceId}`;
  const dropzoneId = `dropzone-${instanceId}`;

  useEffect(() => {
    const draggable = document.getElementById(draggableId) as HTMLElement;
    const dropzones = document.querySelectorAll(".dropzone") as NodeListOf<HTMLElement>;

    if (!draggable) {
      console.error("Draggable element not found!");
      return;
    }

    // Drag Start
    draggable.addEventListener("dragstart", (event: DragEvent) => {
      console.log("Drag started!");
      if (event.dataTransfer) {
        event.dataTransfer.setData("text/plain", draggableId); // Envoie l'ID de l'élément
        event.dataTransfer.effectAllowed = "move";
      }
    });

    // Dropzone Events
    dropzones.forEach((dropzone) => {
      // Autoriser le Drag-over
      dropzone.addEventListener("dragover", (event: DragEvent) => {
        event.preventDefault();
        event.dataTransfer!.dropEffect = "move";
      });

      // Déposer l'élément
      dropzone.addEventListener("drop", (event: DragEvent) => {
        event.preventDefault();
        const droppedElementId = event.dataTransfer!.getData("text/plain");
        const droppedElement = document.getElementById(droppedElementId);

        if (droppedElement) {
          console.log(`Dropped ${droppedElementId} into ${dropzone.id}`);

          // Ajuste le style pour se conformer à la grille
          droppedElement.style.position = "static";
          droppedElement.style.margin = "5px";

          // Ajouter l'élément dans la dropzone
          if (!dropzone.contains(droppedElement)) {
            dropzone.appendChild(droppedElement);
          }
        }
      });
    });

    // Cleanup : Retirer les écouteurs lors du démontage
    return () => {
      draggable.removeEventListener("dragstart", () => {});
      dropzones.forEach((dropzone) => {
        dropzone.removeEventListener("dragover", () => {});
        dropzone.removeEventListener("drop", () => {});
      });
    };
  }, [draggableId, dropzoneId]);

  return (
    <div>
      <h2>Drag and Drop Zone {instanceId}</h2>
      <h1>c'est un probleme de ID</h1>
      <div
        id={dropzoneId}
        className="dropzone"
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "lightgray",
          marginTop: "20px",
          position: "relative",
          display: "grid", // Utilisation d'une grille
          gridTemplateColumns: "repeat(auto-fill, 100px)", // Chaque élément prend 100px
          gridGap: "10px", // Espace entre les éléments
          padding: "10px",
          overflow: "auto", // Empêche les débordements
        }}
      >
       
      {

      UnGroupe.map((element, index) => {
          return  <div
          id={draggableId}
          draggable="true"
          className="draggable"
          style={{
            backgroundColor: "red",
          }}
        >{element}</div> ;
      }) 
      }

     
      </div>
     
    </div>
  );
}
 */