import "./App.css";
import { GameBoard } from "./components/gameboard/GameBoard";

import { usePokeMemory } from "./hooks/usePokeMemory";
import { Loader } from "./components/loader/Loader";
import { usePokeContext } from "./context/usePokeContext";
const App = () => {
  const { difficulty } = usePokeContext();

  const {
    pokemonData,
    handleClick,
    bestScore,
    currentScore,
    loading,
    getMovieData,
  } = usePokeMemory(difficulty);
  if (loading) {
    return <Loader />;
  }

  return (
    <div
      data-testid="app-component"
      style={{ paddingTop: "10%", paddingBottom: "2%" }}
    >
      <GameBoard
        pokemon={pokemonData}
        handleClick={handleClick}
        currentScore={currentScore}
        bestScore={bestScore}
        difficulty={difficulty}
      />
    </div>
  );
};

export default App;
