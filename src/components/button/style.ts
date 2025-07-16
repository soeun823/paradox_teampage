import styled from "@emotion/styled";

export const Button = styled.button<{ isActive: boolean }>`
  font-size: clamp(2vmin, 2vmin, 2vmin);
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
