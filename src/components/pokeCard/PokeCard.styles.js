import styled from "styled-components";

export const CardContainer = styled.div`
  width: min-content;
  background-color: grey;
  border-radius: 15%;
  outline: 4px solid green;
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
  poison: "pink",
  fire: "salmon",
  normal: "lightgreen",
  bug: "darkgreen",
  water: "cerulean",
  ground: "brown",
  electric: "yellow",
  ghost: "darkpurple",
  psychic: "lightpurple",
  grass: "green",
  rock: "grey",
  fighting: "brown",
};

export const Divider = styled.hr`
  width: 100%;
  margin: 0px;
`;

export const CardImg = styled.img`
  height: 175px;
  width: 175px;
  display: ${(props) => (props.hide ? "none" : null)};
`;

export const PokeName = styled.h3`
  text-align: center;
  margin-bottom: 50px;
  font-family: "Lucida Console", "Courier New", monospace;
  text-transform: capitalize;
`;
