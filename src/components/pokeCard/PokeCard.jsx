import React, { useState } from "react";

import { CardContainer, Divider, CardImg, PokeName } from "./PokeCard.styles";

export const PokeCard = (props) => {
  const [showFront, setShowFront] = useState(false);
  const { frontImg, backImg, name } = props;

  return (
    <CardContainer
      onMouseEnter={() => setShowFront(!showFront)}
      onMouseLeave={() => setShowFront(!showFront)}
    >
      <CardImg hide={!showFront} src={frontImg} />
      <CardImg hide={showFront} src={backImg} />
      <Divider />
      <PokeName>{name}</PokeName>
    </CardContainer>
  );
};
