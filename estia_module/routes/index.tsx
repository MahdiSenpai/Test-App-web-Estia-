import Homme from '../page/Homme.tsx';
import Header from '../islands/Header.tsx';
import HomeProvider from "../islands/HomeProvider.tsx";
import AccueilConnexion from '../islands/AccueilConnexion.tsx';
import Counter from '../islands/Counter.tsx';
import Routheur from '../islands/Routheur.tsx';
import { HomeContext  } from "../context/HomeContext.ts";

export default function Home() {
  return (
    <div>
      <HomeProvider>
      <link rel="stylesheet" href="/style/contextGlobal.css" />
        <Header />
        <Routheur/>
      </HomeProvider>
    </div>
  );
}
