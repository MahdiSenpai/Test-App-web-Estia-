#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

await dev(import.meta.url, "./main.ts", config);


import { start } from "$fresh/server.ts";
await start(import.meta.url, { importMapPath: "./import_map.json" });