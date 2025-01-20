export const msalConfig = {
    auth: {
      clientId: "fea25515-c0fb-4a45-8ef8-951d52eeff3b", // Votre Client ID Azure
      authority: "https://login.microsoftonline.com/9bf80234-fabb-4f6c-b646-90604632947a", // Votre Tenant ID Azure
      redirectUri: "http://localhost:8000", // URL de redirection configurée dans Azure
    },
  };
  
  export const loginRequest = {
    scopes: ["User.Read"], // Permissions que vous souhaitez obtenir
  };
  