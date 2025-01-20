import Counter from './Counter.tsx';
import Moreinfo from '../components/Moreinfo.tsx';
import AccueilConnexion from './AccueilConnexion.tsx';
import { useContext, useEffect } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";

export default function VoireCohorte() {
    const { statee, setStatee } = useContext(HomeContext);
    const { nomCohorte, setNomCohorte } = useContext(HomeContext);
    const dico_cohorte = 
    {
      1 : {"programmation web" : <Moreinfo />,
          "système de gestion de version" : <Moreinfo/>,
          "algorithmie" : <Moreinfo/>,
          "développement d'interface" : <Moreinfo/>,
        } 
    , 2 : {"programmation logiciel" : <Moreinfo />,
        "architecture d'application" : <Moreinfo/>,
        "développement de progiciel" : <Moreinfo/>,
        "programmation avancée" : <Moreinfo/>,
    } 
  };

  function goTo(lieu,nomcCohorteAficher)
  {
    sessionStorage.setItem("localisation", lieu);
    if(nomcCohorteAficher!="null")
    {
      setNomCohorte(nomcCohorteAficher);
    }
    setStatee(lieu);
  }

  function afficherLesCohorte(index) {
    // Construire un tableau d'éléments React
    const cohortes = Object.keys(dico_cohorte[index]).map((subKey, i) => (
      <div key={`${index}-${subKey}-${i}`}>
        <p>{subKey}</p>
        <button type="button" class="blue-button" onClick={() => goTo("contenuCohorte", subKey)}>
          Voir plus
        </button>
      </div>
    ));
  
    // Retourner le tableau d'éléments
    return cohortes;
  }
  

    return (
      <div class="container">
         <link rel="stylesheet" href="/style/voireCohorte.css" />
        <button type="button" class="blue-button" onclick={ ()=> goTo('CreatCohorte','null') }>
          Créer une nouvelle cohorte
        </button>

        <input type="search" class="search-bar" placeholder="Rechercher une cohorte" />

        <h1 class="main-title">Année scolaire 2024-2025</h1>

        <div class="columns">
          <div class="column">
            <h2>Cycle Ingénieur Première Année</h2>
            <div class="row">{afficherLesCohorte(1)}</div>
          </div>

          <div class="column">
            <h2>Cycle Ingénieur Deuxième Année</h2>
            <div class="row">{afficherLesCohorte(2)}</div>
          </div>
        </div>
      </div>

    );
  }
  