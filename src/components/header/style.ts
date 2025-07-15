import styled from "@emotion/styled";

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 8vh;
  background-color: var(--black);
  z-index: 1;
`;
export const InnerFrame = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Location = styled.a`
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Logo = styled.img`
  height: 40%;
`;
export const Nav = styled.nav`
  //box-sizing: border-box;
  width: fit-content;
  display: flex;
  align-items: center;
  //gap: 5%;
`;
export const LocationItem = styled.a`
  width: fit-content;
  height: fit-content;
`;
