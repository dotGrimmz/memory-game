import { useEffect, useState } from "react";

import "./App.css";
import { GameBoard } from "./components/gamboard/GameBoard";

import { PokeService } from "./service/PokeService";

const App = () => {
  const { getData, getMockData, useMockData } = PokeService();

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (useMockData) {
      const data = getMockData();
      setPokemonData(data);
    } else {
      getData().then((data) => setPokemonData(data));
    }
  }, []);

  return (
    <>
      <GameBoard pokemon={pokemonData} />
    </>
  );
};

export default App;
