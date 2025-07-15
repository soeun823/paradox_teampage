import styled from "@emotion/styled";

export const Button = styled.button<{isActive:boolean}>`
  padding: 8px 16px;
  font-size: 18px;
  background-color: var(--black);
  border: none;
  color: ${({isActive}) => !isActive ? 'var(--white)' : 'var(--primary)'};
  border-radius: 7.5px;
  cursor: pointer;
  outline: none;
  font-family: var(--font); 
  &:hover {
    color: var(--light-primary);  
  }
`;