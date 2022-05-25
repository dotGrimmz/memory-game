import { useNavigate } from "react-router-dom";

export const StartGameComponent = (props) => {
  const navigateTo = useNavigate();
  const { setDifficulty } = props;
  const handleNavigation = (amt) => {
    setDifficulty(amt);
    navigateTo("memory-game");
  };
  return (
    <>
      <h2 style={{ color: "white" }}>What Difficulty do you choose?</h2>
      <button onClick={() => handleNavigation(5)}>
        I lost to Brock .. vs his Geodude
      </button>
      <button onClick={() => handleNavigation(10)}>Moltres got away..</button>
      <button onClick={() => handleNavigation(15)}>
        Mewtwo captured with a Great ball
      </button>
    </>
  );
};
