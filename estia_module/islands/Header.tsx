import { useContext, useState } from "preact/hooks";
import { HomeContext } from "../context/HomeContext.ts";

export default function AccueilConnexion() {
  const { statee, setStatee } = useContext(HomeContext);
  const { currentUser, setcurrentUser } = useContext(HomeContext);

  console.log("je suis accueil connexion");

  function goTo(lieu: string) {
    sessionStorage.setItem("localisation", lieu);
    setStatee(lieu);
  }

  function toggleHeaderOption() {
    const options = ["Non connecté", "Etudiant", "Professeur"];
    const currentIndex = options.indexOf(currentUser);
    const nextIndex = (currentIndex + 1) % options.length;
    setcurrentUser(options[nextIndex]);
    if(options[nextIndex] != "Professeur"){
      console.log("oui");
      goTo("accueilConnexion");
    }
  }

  return (
    <div>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Connexion Estia</title>
      <script src="https://alcdn.msauth.net/browser/2.34.0/js/msal-browser.min.js"></script>

      <link rel="stylesheet" href="/style/header.css" />
      <div id="main-header" className="main-header">
        {/* Section Home */}
        <div
          id="home-section"
          className="home-section"
          onclick={() => goTo("accueilConnexion")}
        >
          <button id="home-button" className="home-button">
            <img
              id="home-image"
              src="image/tes.png"
              alt="Home Icon"
              className="home-image"
            />
            <span className="button-text">Home</span>
          </button>
        </div>

        {/* Navigation Links (affiché seulement si currentUser est Professeur) */}
        {currentUser === "Professeur" && (
          <nav id="nav-links" className="nav-links">
            <a
              id="link-accueil"
              onclick={() => goTo("accueilConnexion")}
              className="nav-link"
            >
              Accueil
            </a>
            <a
              id="link-groupes"
              onclick={() => goTo("voireCohort")}
              className="nav-link"
            >
              Cohortes
            </a>
            <a id="link-creation" href="#" className="nav-link">
              Groupes
            </a>
            <a
              id="link-creation"
              href="#"
              className="nav-link"
              onclick={() => goTo("allTest")}
            >
              teste en tous genre
            </a>
          </nav>
        )}

        {/* Logo Section */}
        <div id="logo-section" className="logo-section">
          <img
            id="site-logo"
            src="image/logo_estia.png"
            alt="Site Logo"
            className="site-logo"
          />
        </div>

        {/* Bouton à trois valeurs */}
        <div id="header-toggle" className="header-toggle">
          <h1>{currentUser}</h1>
          <button
            onClick={toggleHeaderOption}
            style={{ padding: "10px 20px", fontSize: "16px", marginTop: "10px" }}
          >
            Changer type user
          </button>
        </div>
      </div>
    </div>
  );
}
