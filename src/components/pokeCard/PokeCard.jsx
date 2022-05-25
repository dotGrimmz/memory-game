import React, { useState } from "react";

import { CardContainer, Divider, CardImg, PokeName } from "./PokeCard.styles";

export const PokeCard = (props) => {
  const [showFront, setShowFront] = useState(false);
  const { frontImg, backImg, name, type, handleClick } = props;

  return (
    <CardContainer
      data-testid="poke-card"
      onClick={() => handleClick(name)}
      type={type}
      onMouseEnter={() => setShowFront(!showFront)}
      onMouseLeave={() => setShowFront(!showFront)}
    >
      <CardImg data-testid="front-image" hide={!showFront} src={frontImg} />
      <CardImg data-testid="back-image" hide={showFront} src={backImg} />
      <Divider />
      <PokeName>{name}</PokeName>
    </CardContainer>
  );
};
