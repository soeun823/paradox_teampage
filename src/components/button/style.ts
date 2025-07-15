import styled from "@emotion/styled";

export const Button = styled.button<{ isActive: boolean }>`
  padding: 10%;
  font-size: 18px;
  background-color: var(--black);
  border: none;
  color: ${({ isActive }) => (!isActive ? "var(--white)" : "var(--primary)")};
  cursor: pointer;
  outline: none;
  font-family: var(--font);
  white-space: nowrap;
  &:hover {
    color: var(--light-primary);
  }
`;
