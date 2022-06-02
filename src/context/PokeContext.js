import React, { createContext, useState, useMemo } from "react";

export const PokeContext = createContext(undefined);

export const PokeContextProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState("");

  const context = useMemo(
    () => ({
      difficulty,
      setDifficulty,
    }),
    [difficulty]
  );

  return (
    <PokeContext.Provider value={context}>{children}</PokeContext.Provider>
  );
};
