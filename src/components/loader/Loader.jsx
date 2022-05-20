import React from "react";
import { LoaderContainer, LoaderImg } from "./Loader.styles";
import Haunter from "../../assets/haunter.jpg";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImg src={Haunter} />
    </LoaderContainer>
  );
};
