import styled from "@emotion/styled";

export const Button = styled.button`
  padding: 8px 16px;
  margin-right: 14px;
  font-weight: 600;
  font-size: 18px;
  background-color: #fff;
  border: none;
  color: ${(props) => props.color };
  border-radius: 7.5px;
  cursor: pointer;
  outline: none;
  &:hover {
    background: var(--primary);
  }
`;