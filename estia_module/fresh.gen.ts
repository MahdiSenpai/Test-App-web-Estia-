// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_send_emails from "./routes/api/send-emails.ts";
import * as $api_upload from "./routes/api/upload.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $page1 from "./routes/page1.tsx";
import * as $AccueilConnexion from "./islands/AccueilConnexion.tsx";
import * as $AllTest from "./islands/AllTest.tsx";
import * as $ContenuCohorte from "./islands/ContenuCohorte.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $CreatCohorte from "./islands/CreatCohorte.tsx";
import * as $CreatGroupes from "./islands/CreatGroupes.tsx";
import * as $DragAndDrop from "./islands/DragAndDrop.tsx";
import * as $Header from "./islands/Header.tsx";
import * as $HomeProvider from "./islands/HomeProvider.tsx";
import * as $Routheur from "./islands/Routheur.tsx";
import * as $voireCohorte from "./islands/voireCohorte.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/send-emails.ts": $api_send_emails,
    "./routes/api/upload.ts": $api_upload,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/page1.tsx": $page1,
  },
  islands: {
    "./islands/AccueilConnexion.tsx": $AccueilConnexion,
    "./islands/AllTest.tsx": $AllTest,
    "./islands/ContenuCohorte.tsx": $ContenuCohorte,
    "./islands/Counter.tsx": $Counter,
    "./islands/CreatCohorte.tsx": $CreatCohorte,
    "./islands/CreatGroupes.tsx": $CreatGroupes,
    "./islands/DragAndDrop.tsx": $DragAndDrop,
    "./islands/Header.tsx": $Header,
    "./islands/HomeProvider.tsx": $HomeProvider,
    "./islands/Routheur.tsx": $Routheur,
    "./islands/voireCohorte.tsx": $voireCohorte,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
