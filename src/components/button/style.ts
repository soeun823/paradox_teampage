import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  background-color: var(--black);
  border: none;
  color: ${(props) => props.color };
  border-radius: 7.5px;
  cursor: pointer;
  outline: none;
  font-family: var(--font); 
  &:hover {
    color: var(--primary);  
  }
`;