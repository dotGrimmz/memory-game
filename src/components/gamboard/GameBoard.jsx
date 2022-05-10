import React from "react";

import { PokeCard } from "../pokeCard/PokeCard";

import { GameBoardContainer, CardRow } from "./GameBoard.styles";

export const GameBoard = (props) => {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <GameBoardContainer>
      <CardRow>
        {pokemon.map((poke, index) => {
          console.log(poke);
          return (
            <div key={index}>
              <PokeCard
                frontImg={poke.frontImg}
                backImg={poke.backImg}
                name={poke.name}
              />
            </div>
          );
        })}
      </CardRow>
    </GameBoardContainer>
  );
};
