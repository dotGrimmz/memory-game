import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
    from {opacity: 0}
`;

export const LoaderImg = styled.img`
  border-radius: 35%;
  height: 300px;
  width: auto;
  animation: ${fadeAnimation} 1s infinite alternate;
`;

export const LoaderContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  width: 100vh;
  justify-content: center;
  margin: 0;
  background-color: black;
`;
