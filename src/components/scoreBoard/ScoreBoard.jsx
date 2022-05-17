import React from "react";
import {
  ScoreBoardContainer,
  PokeSubTitle,
  PokeLabel,
  ScoreContainer,
  ScoreText,
} from "./ScoreBoard.styles";

export const ScoreBoard = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <ScoreBoardContainer>
      <div>
        <PokeLabel>Poke-Memory Game</PokeLabel>
        <PokeSubTitle>Try to not click the same pokemon twice!</PokeSubTitle>
      </div>
      <ScoreContainer>
        <ScoreText best>Best Score:{bestScore} </ScoreText>
      </ScoreContainer>
      <ScoreContainer>
        <ScoreText>Current Score: {currentScore} </ScoreText>
      </ScoreContainer>
    </ScoreBoardContainer>
  );
};
