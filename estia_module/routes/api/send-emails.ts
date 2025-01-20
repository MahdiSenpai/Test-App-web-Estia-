import { sendMail } from "https://deno.land/x/sendgrid/mod.ts";

export async function handler(req: Request): Promise<Response> {
    console.log("Requête reçue");
    /* const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY"); */
    const SENDGRID_API_KEY = "your_sendgrid_api_key";

    if (!SENDGRID_API_KEY) {
        console.error("La clé API SendGrid n'est pas définie !");
        throw new Error("Clé API SendGrid manquante");
    }

    try {
        const { students, subject, messageTemplate } = await req.json();
        console.log("Données reçues :", { students, subject, messageTemplate });

        for (const student of students) {
            const personalizedMessage = messageTemplate.replace("{name}", student.name);
            console.log(`Envoi d'email à ${student.email} avec le message :`, personalizedMessage);

            // Logique d'envoi d'email
            console.log("Clé API SendGrid chargée :", SENDGRID_API_KEY ? "OK" : "Manquante");
            await sendMail({
                personalizations: [{ to: [{ email: student.email }] }],
                from: { email: "your-email@example.com" },
                subject,
                content: [{ type: "text/plain", value: personalizedMessage }],
                apiKey: SENDGRID_API_KEY,
            });
        }

        return new Response("E-mails envoyés avec succès !", { status: 200 });
    } catch (error) {
        console.error("Erreur sur le serveur :", error); // Capture et affiche l'erreur exacte
        return new Response("Erreur lors de l'envoi des e-mails.", { status: 500 });
    }
}
