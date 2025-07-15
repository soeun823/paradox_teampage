import styled from "@emotion/styled";

export const main = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const section = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;
export const list = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;
export const item = styled.div`
  width: 30%;
`;
