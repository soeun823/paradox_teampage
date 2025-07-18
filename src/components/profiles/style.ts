import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const main = styled.div`
  width: 30%;
  height: fit-content;
  box-sizing: border-box;
  font-family: var(--font);
  position: relative;
`;

export const img = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
export const info = styled.div`
  padding: 1rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  animation: ${slideUp} 0.3s ease forwards;
`;
export const text = styled.div`
  width: 100%;
  font-size: 1rem;
  color: white;
  background-color: rgba(0, 0, 0, 0);
`;
