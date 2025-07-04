import styled from "@emotion/styled";

export const Header = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background-color: var(--black);
  z-index: 1;
`;

export const InnerFrame = styled.div`
  width: 81.25%;
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
