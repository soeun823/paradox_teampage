import styled from "@emotion/styled";

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  width: 100vw;
  height: 10vh;
  background-color: var(--black);
  z-index: 1;
`;

export const InnerFrame = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 100%;
  width: 161.33px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;
