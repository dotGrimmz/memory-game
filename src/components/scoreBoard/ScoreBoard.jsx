import React from "react";
import { ScoreBoardContainer } from "./ScoreBoard.styles";

export const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <ScoreBoardContainer>
      <div>
        <h2 style={{ color: "black" }}>Poke-Memory Game</h2>
        <p>Try to not click the same pokemon twice!</p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "100px",
          width: "auto",
        }}
      >
        <h1 style={{ color: "green" }}>Best Score:{bestScore} </h1>
      </div>
      <div style={{ backgroundColor: "white", height: "100px", width: "auto" }}>
        <h1 style={{ color: "blue" }}>Current Score: {currentScore} </h1>
      </div>
    </ScoreBoardContainer>
  );
};
