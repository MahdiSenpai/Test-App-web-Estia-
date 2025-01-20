import { createContext } from "preact";

type ContextType<T = any> = {
  state: T;
  setState: (value: T) => void;
};

// Créer un contexte générique
export const HomeContext = createContext<ContextType>({
  state: null, // Valeur initiale
  setState: () => {},
});
