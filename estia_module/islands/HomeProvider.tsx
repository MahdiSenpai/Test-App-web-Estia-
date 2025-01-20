import { useState } from "preact/hooks";
import { HomeContext } from "../context/HomeContext.ts";

export default function HomeProvider({ children }: { children: preact.ComponentChildren }) {
  //tu rajoute en mode copier coller
  const [state, setState] = useState("initial value");
  const [statee, setStatee] = useState("accueilConnexion");
  const [nomCohorte, setNomCohorte] = useState("null");
  const [lstEtudiant, setLstEtudiant] = useState("null");
  const [currentCohorte, setCurrentCohorte] = useState("null");
  const [currentJson, setCurrentJson] = useState("null");
  const [currentUser, setcurrentUser] = useState("Non connecté");

  //puis tu le rajoute dans la liste en bas la
  return (
    <HomeContext.Provider value={{ state, setState,
                                  statee,setStatee,
                                  nomCohorte,setNomCohorte,
                                  lstEtudiant,setLstEtudiant,
                                  currentCohorte, setCurrentCohorte,
                                  currentJson, setCurrentJson,
                                  currentUser, setcurrentUser }}>
      {children}
    </HomeContext.Provider>
  );
}
