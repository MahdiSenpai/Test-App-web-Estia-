import Counter from './Counter.tsx';
import AccueilConnexion from './AccueilConnexion.tsx';
import VoireCohorte from './VoireCohorte.tsx';
import ContenuCohorte from './ContenuCohorte.tsx';
import CreatCohorte from './CreatCohorte.tsx';
import AllTest from './AllTest.tsx';
import CreatGroupes from './CreatGroupes.tsx';
import { useContext, useEffect } from "preact/hooks";
import { HomeContext  } from "../context/HomeContext.ts";

export default function Routheur() {
    /* 
    liste des route :
    accueil connexion (estia/git hub) => accueilConnexion
    connexion git hub => connectToGitHub
    connexion estia => connectToEstia
    accueil proffesseur => accueilProffesseur
    voire les cohort => voireCohort
    créer une cohort => creeCohorte
    voire groupe => voireGroupe
    créer groupe => creeGroupe
    
    */
   const { statee, setStatee } = useContext(HomeContext);
    var local = sessionStorage.getItem('localisation');
    if(local=="null" || local==null)
    {
        sessionStorage.setItem("localisation", statee);
        local = statee;
    }
    else if(statee=="accueilConnexion" && local!=statee)
    {
        console.log("je suis local :",local);
        setStatee(local);
    }
    else
    {
        sessionStorage.setItem("localisation", statee);
    }
    
    function afficherkua()
    {
        switch (statee) {
            case "accueilConnexion":
                return (<AccueilConnexion />);
                
                case "connectToGitHub":
                    return (<h1>connectToGitHub</h1>);
                case "connectToEstia":
                    return (<h1>connectToEstia</h1>);
                    
                case "accueilProffesseur":
                    return (<h1>accueilProffesseur</h1>);
                    
                case "voireCohort":
                    return (<VoireCohorte/>);
                    
                case "contenuCohorte":
                    return (<ContenuCohorte />);
                    
                case "voireGroupe":
                    return (<h1>voireGroupe</h1>);
                    
                case "CreatGroupes":
                    return (<CreatGroupes />);

                case "CreatCohorte":
                    return (<CreatCohorte/>);

                case "allTest":
                    return (<AllTest/>);

                    
            
                
                default:
                    return (<h1>chemin pas connu la localisation {statee}</h1>);
                }
            }
            return (
      <div>
        {afficherkua()}

      </div>
    );
  }
  