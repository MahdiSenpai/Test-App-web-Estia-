import { useContext } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";
import { useState } from "preact/hooks";

export default function CreatCohorte() {
  const { statee, setStatee } = useContext(HomeContext);
  const { lstEtudiant, setLstEtudiant } = useContext(HomeContext);
  const { currentCohorte, setCurrentCohorte } = useContext(HomeContext);
  const { currentJson, setCurrentJson } = useContext(HomeContext);
  const [data, setData] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  //const [FilteredGroupedData, setFilteredGroupedData] = useState("null");

  let FilteredGroupedData = "null";
  if(currentJson != "null")
  {
    setData(currentJson);
    console.log("she bou wo");
  }
  // Fonction pour gérer le fichier uploadé
  const handleFileUpload = async (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        setSelectedFile(file);

        // Envoie du fichier au backend pour traitement
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            const json = await res.json();
            setData(json);
        } else {
            console.error("Échec de l'importation du fichier.");
        }
    }
};

// Fonction pour simuler un clic sur l'input file
const triggerFileInput = (inputId: string) => {
  console.log("file input");
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) fileInput.click();
};

  function goTo(lieu,lstEtudiant)
  {
    sessionStorage.setItem("localisation", lieu);
    if(lstEtudiant!="null")
    {
        setLstEtudiant(lstEtudiant);
    }
    setStatee(lieu);
  }
  
  function goToCohorte(lieu,currentCohorte)
  {
    sessionStorage.setItem("localisation", lieu);
    if(currentCohorte!="null")
      {
        setCurrentCohorte(currentCohorte);
      }
    setCurrentJson(data);
    setStatee(lieu);
  }
  


  let lesInfoEtudiant = [["jean"],["filou"],["sonia"]];

  console.log("data : ");
  console.log(data);
  console.log(data.length);



if(  data.length > 0)// false
{
      // Étape 1: Création du dictionnaire avec tous les champs
    const groupedData = data.reduce((acc, student) => {
      // Extraire le numéro de groupe
      //console.log("student: ",student);
      //console.log("PRODUIT_SELECTIONNE_GROUPE : ",student.PRODUIT_SELECTIONNE_GROUPE);
      const groupMatch = student.PRODUIT_SELECTIONNE_GROUPE.match(/\d+/);
      const groupNumber = groupMatch ? parseInt(groupMatch[0], 10) : null;

      if (groupNumber) {
          // Convertir l'étudiant en liste
          const studentList = Object.values(student).map(String);

          // Ajouter au groupe correspondant
          if (!acc[groupNumber]) {
              acc[groupNumber] = [];
          }
          acc[groupNumber].push(studentList);
      }

      return acc;
    }, {});

    // Étape 2: Création du dictionnaire filtré
    const filteredGroupedData = data.reduce((acc, student) => {
      // Extraire le numéro de groupe
      const groupMatch = student.PRODUIT_SELECTIONNE_GROUPE.match(/\d+/);
      const groupNumber = groupMatch ? parseInt(groupMatch[0], 10) : null;

      if (groupNumber) {
          // Garder uniquement les champs nécessaires
          const filteredStudentList = [
              student.GENRE,
              student.NOM,
              student.PRENOM,
              student.PRODUIT_SELECTIONNE_GROUPE
          ];

          // Ajouter au groupe correspondant
          if (!acc[groupNumber]) {
              acc[groupNumber] = [];
          }
          acc[groupNumber].push(filteredStudentList);
      }

      return acc;
    }, {});

    console.log("Données regroupées :", groupedData);
    console.log("Données regroupées et filtrées :", filteredGroupedData);
    FilteredGroupedData = filteredGroupedData;


}


  return (
    <div>
      <link rel="stylesheet" href="/style/CreateCohorte.css" />
      <button onclick={()=>goTo("voireCohort")} class="blue-button">&lt;&lt;</button>
      <div class="container">
        <div class="containe_create_cohorte">
          <label htmlFor="nomcohorte">   Nom de la cohorte :  </label>
          <input type="text" name="nomcohorte" id="nomcohorte" /><br/>
          <label htmlFor="">  Liste des étudiants :   </label>
          <button type="button" class="blue-button" name="inputcohorte" onClick={() => triggerFileInput("fileInput1")}>Importer la cohorte d'étudiants</button>
          <input
                    id="fileInput1"
                    type="file"
                    accept=".xlsx, .xls"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                />
        </div>
        <br />
        <br />     
        <button type="button" class="blue-button" onclick={()=> goToCohorte("CreatGroupes",FilteredGroupedData)}>créer les groupes pour la cohorte</button>
      </div>
    
{/*     <label htmlFor="">créer un groupe pour cette cohorte maitenant (et valider la cohorte)</label> */}    
    {data.length > 0 && (
      <div>
          <h2>Contenu du fichier Excel</h2>
          <table border="1">
              <thead>
                  <tr>
                      {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                  </tr>
              </thead>
              <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                          {Object.values(row).map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  )}
  </div>

  );
}


{/* <label htmlFor="nomProjet">  Nom du projet :   </label>
      <input type="text" name="nomProjet" id="" /><br/>
      <label htmlFor="">  Relevé de note des étudiants :    </label>
      <button type="button" class="blue-button" name="inputcohorte" onClick={() => triggerFileInput("fileInput2")}>Importer le bulletin de note des étudiants</button>
      <input
                id="fileInput2"
                type="file"
                accept=".xlsx, .xls"
                style={{ display: "none" }}
                onChange={handleFileUpload}
            /> 
            <br />
            <br />
           {/*  <label htmlFor="nomcohorte">   Taille de la cohorte :   </label>
            <input type="text" name="nomcohorte" id="" /><br/>
            <label htmlFor="">   Liste des absences des étudiants :   </label>
            <button type="button" class="blue-button" name="inputcohorte" onClick={() => triggerFileInput("fileInput3")}>Importer la liste des absences</button>
            <input
                      id="fileInput3"
                      type="file"
                      accept=".xlsx, .xls"
                      style={{ display: "none" }}
                      onChange={handleFileUpload}
                  /> */}