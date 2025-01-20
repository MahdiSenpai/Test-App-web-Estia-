import { HandlerContext } from "$fresh/server.ts";
import * as XLSX from "https://esm.sh/xlsx@0.18.5";

export const handler = async (req: Request, _ctx: HandlerContext) => {
    // Vérifie si la requête contient un fichier
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
        return new Response("Invalid file upload", { status: 400 });
    }

    // Parse le fichier uploadé
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
        return new Response("No file uploaded", { status: 400 });
    }

    // Lis le contenu du fichier Excel
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: "array" });

    // Convertis la première feuille en JSON
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
};
