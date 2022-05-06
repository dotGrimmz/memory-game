import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100px;
  height: 150px;
  background-color: lightcyan;
  border-radius: 15%;
  outline: 4px solid green;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* justify-content: center; */
`;

export const Divider = styled.hr`
  width: auto;
  margin: 0px;
`;

export const CardImg = styled.img`
  height: 75px;
  width: 75px;
  display: ${(props) => (props.hide ? "none" : null)};
`;

export const PokeName = styled.h6`
  text-align: center;
  margin-bottom: 50px;
  font-family: "Lucida Console", "Courier New", monospace;
`;
