import styled from "@emotion/styled";

export const main = styled.div`
  width: 100vw;
  height: 92vh;
  margin-top: 8vh;
`;

export const section = styled.section`
  height: 100%;
  width: 70%;
  font-family: var(--font);
  margin: 0 auto;
  background-color: var(--black);

  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
