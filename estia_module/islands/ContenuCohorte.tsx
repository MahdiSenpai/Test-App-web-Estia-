import { useContext } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";

export default function ContenuCohorte() {
  const { nomCohorte, setNomCohorte } = useContext(HomeContext);
  const { statee, setStatee } = useContext(HomeContext);
  function goTo(lieu)
    {
        sessionStorage.setItem("localisation", lieu);
        setStatee(lieu);
    }
  //appelle la connection entre la cohorte et les groupes (cle etrangere) qui la composent afin d'afficher les groupes présents dans la cohorte
  // const dico_cohorte = 
  //   {
  //     1 : {"programation web" : <Moreinfo />,
  //         "systeme de gestion de version" : <Moreinfo/>,
  //         "Algorithmie" : <Moreinfo/>,
  //         "development d interface" : <Moreinfo/>,
  //       } 
  //   , 2 : {"programation logicielle" : <Moreinfo />,
  //       "architecture d'applciation" : <Moreinfo/>,
  //       "developppemnt de progiciel" : <Moreinfo/>,
  //       "programation avancée" : <Moreinfo/>,
  //   } 
  // };

  // const dico_groupe = 
  // {
  //   //1:[nom_groupe, [id_eleve], id_cohorte],
  //   1:["baleineSaBosse", [1,2,3,4], "programation web"],
  //   2:["panthereJaune", [5,6,7,8], "systeme de gestion de version"],
  //   3:["pandaNinja", [9,10,11,12], "programation web"],
  //   4:["panthereJaune", [13,14,15,16], "programation avancée"]
  // };
  // function afficherLesGroupes()
  // {
  //   const cohortes = Object.keys(dico_groupe).map((key) => {
  //     return Object.keys(dico_groupe[key]).map((subKey, index) => (
  //       <div><p key={`${key}-${subKey}-${index}`}>{subKey}</p> <button type="button" onclick={()=> goTo("modifierGroupe",subKey)}>voire plus</button> </div> 
  //     ));
  //   });

  //   // Aplatir les sous-tableaux dans un seul tableau
  //   return cohortes.flat();
  // } 

  return (
    <div>
      
      <button onclick={()=>goTo("CreatCohorte")} class="blue-button">&lt;&lt;</button>
      <h2>nom cohorte → {nomCohorte}</h2>
    </div>
  );
}
