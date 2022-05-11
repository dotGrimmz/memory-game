import { useEffect, useState } from "react";

import "./App.css";
import { GameBoard } from "./components/gameboard/GameBoard";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GameBoard pokemon={pokemonData} />
    </>
  );
};

export default App;
