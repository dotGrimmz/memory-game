import React from "react";

import { PokeCard } from "../pokeCard/PokeCard";

import { ScoreBoard } from "../scoreBoard/ScoreBoard";
import { GameBoardContainer, CardRow } from "./GameBoard.styles";

export const GameBoard = (props) => {
  const { pokemon, handleClick, currentScore, bestScore } = props;
  return (
    <GameBoardContainer>
      <CardRow>
        {pokemon.map((poke, index) => {
          return (
            <div key={index}>
              <PokeCard
                type={poke.type}
                frontImg={poke.frontImg}
                backImg={poke.backImg}
                name={poke.name}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </CardRow>
      <ScoreBoard bestScore={bestScore} currentScore={currentScore} />
    </GameBoardContainer>
  );
};
