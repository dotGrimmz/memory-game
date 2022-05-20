import "./App.css";
import { GameBoard } from "./components/gameboard/GameBoard";

import { usePokeMemory } from "./hooks/usePokeMemory";
import { Loader } from "./components/loader/Loader";

const App = () => {
  const {
    pokemonData,
    handleClick,
    bestScore,
    currentScore,
    loading,
  } = usePokeMemory();

  if (loading) {
    return <Loader />;
  }

  return (
    <GameBoard
      pokemon={pokemonData}
      handleClick={handleClick}
      currentScore={currentScore}
      bestScore={bestScore}
    />
  );
};

export default App;
