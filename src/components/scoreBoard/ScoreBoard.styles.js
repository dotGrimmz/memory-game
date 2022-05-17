import styled from "styled-components";

export const ScoreBoardContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 24px;
  outline: 2px purple solid;
  background-color: grey;
  opacity: 0.4;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const PokeLabel = styled.h2`
  color: black;
`;

export const PokeSubTitle = styled.p`
  font-weight: 400;
`;

export const ScoreContainer = styled.div`
  background-color: white;
  height: 100px;
  width: auto;
`;

export const ScoreText = styled.h1`
  ${({ best }) => (best ? { color: "green" } : { color: "blue" })}
`;
