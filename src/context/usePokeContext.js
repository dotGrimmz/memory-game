import { useContext } from "react";

import { PokeContext } from "./PokeContext";

export const usePokeContext = () => {
  const context = useContext(PokeContext);

  if (context === undefined) {
    throw new Error("Must be used within an Poke Context Provider");
  }

  return context;
};
