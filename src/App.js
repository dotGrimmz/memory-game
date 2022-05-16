import { useEffect, useState } from "react";

import "./App.css";
import { GameBoard } from "./components/gameboard/GameBoard";

import { PokeService } from "./service/PokeService";

import { shuffleArray } from "./utils";

const App = () => {
  const { getData, getMockData, useMockData } = PokeService();
  const [pokemonData, setPokemonData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const resetGame = () => {
    setSelectedPokemon([]);
    setCurrentScore(0);
  };

  const handleClick = (pokemonName) => {
    continueRound(pokemonName);
    setPokemonData(shuffleArray(pokemonData));
  };

  const continueRound = (pokemonName) => {
    if (selectedPokemon.includes(pokemonName)) {
      resetGame();
    } else {
      const newScore = currentScore + 1;
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      setCurrentScore(newScore);
      setSelectedPokemon((prev) => [...prev, pokemonName]);
    }
  };

  useEffect(() => {
    if (useMockData) {
      const data = getMockData();
      setPokemonData(data);
    } else {
      getData().then((data) => setPokemonData(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log({ currentScore, bestScore });
  return (
    <>
      <GameBoard
        pokemon={pokemonData}
        handleClick={handleClick}
        currentScore={currentScore}
        bestScore={bestScore}
      />
    </>
  );
};

export default App;
