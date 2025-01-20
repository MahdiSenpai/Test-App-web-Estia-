import { useContext } from "preact/hooks";
import { HomeContext } from "../context/HomeContext.ts";
import { msalConfig, loginRequest } from "../components/authConfig.ts";

export default function AccueilConnexion() {
  const { statee, setStatee } = useContext(HomeContext);

  // Fonction pour gérer la connexion avec Microsoft
  const handleMicrosoftLogin = async () => {
    try {
      // Utilisez l'objet global msal.PublicClientApplication
      const msalInstance = new msal.PublicClientApplication(msalConfig);

      const loginResponse = await msalInstance.loginPopup(loginRequest);
      console.log("Connexion réussie :", loginResponse);

      // Mettre à jour l'état ou effectuer une redirection
      setStatee("connectToEstia");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  // Fonction pour gérer la connexion avec GitHub
  const handleGitHubLogin = () => {
    // Redirige directement vers GitHub pour la connexion OAuth
    window.location.href = "/server.html"; // Chemin vers la page gérant la connexion GitHub
  };

  return (
    <div class="centered-div">
      <link rel="stylesheet" href="/style/AccueilConnexion.css" />
      <h2>Bienvenue accueil </h2>
      <img id="img_accueil_estia" src="image/logo_classroom_clerk.png" alt="image pas ok" />

      {/* Connexion avec un compte Microsoft */}
      <button type="button" class="butt_img blue-button" onClick={handleMicrosoftLogin}>
        <img class="img_in_butt" src="image/logo_microsoft.png" alt="image microsoft" />
        connexion estia
      </button>

      <br />

      {/* Connexion avec un compte GitHub */}
      <button type="button" class="butt_img blue-button" onClick={handleGitHubLogin}>
        <img class="img_in_butt" src="image/logo_github.png" alt="image github" />
        Se connecter avec GitHub
      </button>

      {/* Les cohortes qu'il faudra dégager */}
      {/* <button type="button" onclick={() => setStatee("voireCohort")}>
        voir les cohortes
      </button> */}
    </div>
  );
}
