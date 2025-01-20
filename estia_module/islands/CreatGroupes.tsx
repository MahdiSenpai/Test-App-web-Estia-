import { useContext,useState,useEffect } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";
import DragAndDrop from './DragAndDrop.tsx';
import jsPDF from "https://esm.sh/jspdf";

export default function CreatGroupes() {
  const { lstEtudiant, setLstEtudiant } = useContext(HomeContext);
  const { currentCohorte, setCurrentCohorte } = useContext(HomeContext);
  const [start, setStart] = useState(false);
  const [nb, setNb] = useState(4);
  const [nb_fille, setNb_fille] = useState(2);
  //const { unGroupe, SetunGroupe } = useState([]);
  const  [listeDesGroupess, setListeDesGroupess]  = useState();
  const { statee, setStatee } = useContext(HomeContext);

  // Liste des noms d'animaux
const lstNomAnimaux = [
  "tortues",
  "tigres",
  "aigles",
  "dauphins",
  "loups",
  "renards",
  "panthères",
  "serpents",
  "hiboux",
  "requins"
];

// Liste des adjectifs
const lstAdjectif = [
  "courageux",
  "intelligents",
  "rapides",
  "malins",
  "sauvages",
  "mystiques",
  "philantropes",
  "audacieux",
  "redoutables",
  "créatifs"
];

  function goTo(lieu)
    {
        sessionStorage.setItem("localisation", lieu);
        setStatee(lieu);
    }
  let lesInfoEtudiant;
  if(currentCohorte!="null")
  {
    lesInfoEtudiant = currentCohorte;
  }
  else
  {
      lesInfoEtudiant = {
        "1": [
            ["Monsieur","DUPONTTTTTTTTTTTTTT","Gr 1" ],
            ["Madame","MARTIN","Chloé","Gr 1"],
            ["Madame","GUILLON","Julie","Gr 1"]
        ],
        "2": [],
        "3": []
    };
  }

  

  console.log("les info etudiant contexte puis l'autre ");
  console.log(currentCohorte);
  console.log(lesInfoEtudiant);




  type Etudiant = string[];
  type Cohortes = { [key: string]: Etudiant[] };
  
  function diviserParGroupes(
    lesInfoEtudiants: Cohortes,
    nb: number,
    nb_fille: number
  ): Cohortes {
    const resultat: Cohortes = {};
  
    for (const [cohorte, etudiants] of Object.entries(lesInfoEtudiants)) {
      // Séparer les filles et les garçons
      const filles = etudiants.filter((e) => e[0] === "Madame"); 
      const garcons = etudiants.filter((e) => e[0] === "Monsieur");
  
      const groupes: Etudiant[][] = [];
  
      if (nb_fille === -1) {
        // Pas de contrainte sur le nombre de filles, juste diviser par groupe de `nb`
        for (let i = 0; i < etudiants.length; i += nb) {
          groupes.push(etudiants.slice(i, i + nb));
        }
      } else {
        // Respecter la contrainte `nb_fille`
        while (filles.length || garcons.length) {
                console.log("passe dans le else");
                const groupe: Etudiant[] = [];
        
                // Ajouter le minimum de filles requis
                while (filles.length && groupe.filter((e) => e[0] === "Madame").length < nb_fille) {
                  groupe.push(filles.shift()!);
                }
        
                // Compléter le groupe avec des garçons ou des filles si besoin
                while (groupe.length < nb && (filles.length || garcons.length)) {
                  if (garcons.length) {
                    if(filles.length < nb_fille && filles.length >0){
                      groupe.push(filles.shift()!);
                    }
                    else
                    {
                      groupe.push(garcons.shift()!);
                    }
                  } else// if (filles.length) 
                  {
                    groupe.push(filles.shift()!); // Si pas assez de garçons, ajouter les filles restantes
                  }
                }
              

                // Ajouter le groupe une fois l'équilibre fait
                groupes.push(groupe);
                   

        }
      }
  
      resultat[cohorte] = groupes;
    }
    return resultat;
  }
   


  
  function genereGroupeTrier(lesInfoEtudiants)// {1 : [ ["masculin","martin","delamartre",etc...,"Gr 1"]
  {
    const resultatss = diviserParGroupes(lesInfoEtudiants, nb, nb_fille);
    //const resultatss = creerGroupes(lesInfoEtudiants, nb, nb_fille);
    console.log("le resultatss : ");
    console.log(resultatss);
    setListeDesGroupess(resultatss);
    setStart(true);
    }

    
    
    function genereGroupe(lesInfoEtudiants)//prend sa [["jean"],["filou"],["sonia"]]
    {
        
        let listeDesGroupes:string[][][] = []; 
        console.log("function");
        console.log("le info de base : ");
        console.log(lesInfoEtudiants);
        //let nb = 4;
        //const nb = document.getElementById('nbDeGroupeVoulu') as HTMLInputElement | null;
        
        if(nb){
            //const nombreMax = Number(nb.value);
            const nombreMax = nb;
            console.log("nombre max :",typeof nombreMax);
            let unGroupe: string[][] = []; 
            let indexgroupe = 0;
            console.log(lesInfoEtudiants.length);
            for (let index = 0; index < lesInfoEtudiants.length; index++) {
                unGroupe.push(lesInfoEtudiants[index]);
                //console.log("poyo");
                
                //console.log(unGroupe.length,"<=>",nombreMax);
                if(unGroupe.length == nombreMax)
                    {
                        //console.log("KJ");
                        listeDesGroupes.push(unGroupe);
                        unGroupe = [];
                    }
                }
            if(unGroupe.length!=0)
            {
                console.log("KJ");
                listeDesGroupes.push(unGroupe);
                unGroupe = [];
            }
            console.log("duh");
            console.log(listeDesGroupes);
            return listeDesGroupes
            //setListeDesGroupess(listeDesGroupes)
            //setStart(true);
        }
      
    }

  // Génération du PDF
  const generatePDF = () => {
    const dropzones = document.querySelectorAll('.dropzone');
    const doc = new jsPDF();
    let y = 10;

    dropzones.forEach((zone) => {
        //const zoneName = zone.getAttribute('data-name') || zone.id || 'Unnamed Dropzone';
        const nomEquipe = zone.previousSibling.value || "nomEquipe";
        doc.text(`Nom équipe: ${nomEquipe}`, 10, y);
        y += 10;

        const items = Array.from(zone.children).map(item => item.textContent);
        items.forEach((item) => {
            doc.text(`- ${item}`, 20, y);
            y += 10;
        });
    });

    // Générer le PDF
    doc.save('DropZones.pdf');
  };
  // [ ["noom","prenom","age","plein d autre truc"], ["deuxieme ettudiant nom", "etc..."]   ]
  const [students] = useState([
    { name: "Jean Dupont", email: "timeo971@gmail.com" },
    { name: "Marie Curie", email: "aztfazrt@yopmail.com" },
    { name: "Albert Einstein", email: "aztfazrt@yopmail.com" },
]);
  const [subject, setSubject] = useState<string>("");
  const [messageTemplate, setMessageTemplate] = useState<string>("Bonjour {name},\nCeci est un e-mail personnalisé.");

  const sendEmails = async () => {
    const response = await fetch('/api/send-emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            students,
            subject,
            messageTemplate,
        }),
    });

      if (response.ok) {
          alert('E-mails envoyés avec succès !');
      } else {
        console.error('Erreur HTTP :', response.status, response.statusText);
        const errorText = await response.text(); // Si un message d'erreur est renvoyé dans le corps
        console.error('Message d\'erreur :', errorText);
        alert('Erreur lors de l\'envoi des e-mails.');
      }
  };

  if(start)
  {
    if(listeDesGroupess[1])
    {
        console.log("le truc qui va se faire map :");
        console.log(listeDesGroupess[1]);
    }
  }

  // Fonction pour générer un nom d'équipe aléatoire
  function nomEquipe(lstAnimaux, lstAdjectifs) {
    const animal = lstAnimaux[Math.floor(Math.random() * lstAnimaux.length)];
    const adjectif = lstAdjectifs[Math.floor(Math.random() * lstAdjectifs.length)];
    return `Les ${animal} ${adjectif}`;
  }

  const handleChange = (event) => {
    setNb(event.target.value); // Met à jour l'état avec la valeur actuelle de l'input
  };
  const handleChangeFille = (event) => {
    setNb_fille(event.target.value); // Met à jour l'état avec la valeur actuelle de l'input
  };

  return (
    <div>
      <link rel="stylesheet" href="/style/CreateGroupes.css" />
      
      <button onclick={()=>goTo("CreatCohorte")} class="blue-button">&lt;&lt;</button>
      <br />
        <div className="create-group-container">
            <div className="input-section">
                <p>Je veux des groupes de</p>
                <input
                type="number"
                id="nbDeGroupeVoulu"
                placeholder={nb}
                value={nb}
                onChange={handleChange}
                className="number-input"
                />
                <p>personnes</p>
            </div>
            <div className="input-section">
                <p>Je veux qu'il y ait un minimum de</p>
                <input
                type="number"
                id="nbDeFilleEnsembleVoulu"
                placeholder={nb_fille}
                value={nb_fille}
                onChange={handleChangeFille}
                className="number-input"
                />
                <p>filles ensembles</p>
            </div>
            <button
                type="button"
                onClick={() => genereGroupeTrier(lesInfoEtudiant)}
                className="generate-button"
            >
                Générer les équipes
            </button>
            <div class="inline_div">
              <div id="squarre_orange" class="inline_div" ></div><p>garçon</p >
              <div id="squarre_darkbleu" class="inline_div"></div><p>fille</p> 
            </div>
            
                    
        </div>
      {console.log(listeDesGroupess)}
      {start ? 
            Object.keys(listeDesGroupess).map((groupe_number) => (
                //fait un div pour differencier les groupe
                <div  className="groups-section">
                    <h2>etudiant de la cohorte {groupe_number}</h2>
                    <div className="group-list">
                        {
                            listeDesGroupess[groupe_number].map((element, index) => {
                                return <DragAndDrop key={index} gensDuGroupe={element} NomEquipe={nomEquipe(lstNomAnimaux, lstAdjectif)} />;
                            }) 
                        }
                    </div>

                </div>

            ))


            
            : <p></p>
        }
    <button onClick={generatePDF} class="blue-button">Generate PDF</button>
    {/* <button onClick={sendEmails}>Envoyer des e-mails (axe d'amélioration)</button> */}
    </div>
  );
}
