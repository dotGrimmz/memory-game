import { useState, useEffect } from "react";
import { shuffleArray } from "../utils";
import { PokeService } from "../service/PokeService";

export const usePokeMemory = (difficulty = 5) => {
  const { getData, getMockData, useMockData, getMovieData } = PokeService();
  const [pokemonData, setPokemonData] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (useMockData) {
      const data = getMockData();
      setPokemonData(data);
    } else {
      getData(difficulty)
        .then((data) => setPokemonData(data))
        .finally(() => {
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    pokemonData,
    handleClick,
    bestScore,
    currentScore,
    loading,
    getMovieData,
  };
};
