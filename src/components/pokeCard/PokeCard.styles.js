import styled from "styled-components";

export const CardContainer = styled.div`
  width: min-content;
  background-color: grey;
  border-radius: 15%;
  outline: 4px solid purple;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  transition: 0.6s;

  ${(props) =>
    props.type &&
    `&:hover {
      background-color: ${typeColors[props.type]}
    }`}
`;

const typeColors = {
  poison: "indigo",
  fire: "orangered",
  normal: "silver",
  bug: "darkgreen",
  water: "aqua",
  ground: "sienna",
  electric: "gold",
  ghost: "darkslategrey",
  psychic: "orchid",
  grass: "green",
  rock: "chocolate",
  fighting: "peachpuff",
};

export const Divider = styled.hr`
  width: 100%;
  margin: 0px;
`;

export const CardImg = styled.img`
  height: 175px;
  width: 175px;
  display: ${(props) => (props.hide ? "none" : null)};
  transition: 0.6s;

  ${(props) =>
    props.front &&
    `&:hover {
    background-color: ${typeColors[props.type]}
  }`}
`;

export const PokeName = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-transform: capitalize;
`;
