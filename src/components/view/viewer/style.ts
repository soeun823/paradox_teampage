import styled from "@emotion/styled";

export const infoSet = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  background-color: var(--non);
`;
export const infoImg = styled.img`
  width: 120%;
  height: 120%;
  position: absolute;
  right: -32%;
  bottom: -35%;
  background-color: var(--non);
`;
export const info = styled.div`
  position: absolute;
  right: 15%;
  bottom: 0;
  width: 70%;
  height: 60%;
  background-color: var(--non);
`;
export const text = styled.div`
  background-color: rgba(128, 128, 128, 0.5);
  border: solid 0.5rem var(--light-primary);
  height: 50%;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  position: relative;
`;
export const comment = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(46, 46, 46, 0.5);
  font-size: 1.5rem;
  color: var(--white);
  font-family: var(--font);
  outline: none;
  border: none;
  resize: none;
`;

export const list = styled.div`
  display: inline-block;
  background-color: rgba(128, 128, 128, 0.5);
  border: solid 0.5rem var(--light-primary);
  box-sizing: border-box;
  padding: 0.5rem;
  margin-bottom: 1rem;
  & > div {
    padding: 1rem;
    box-sizing: border-box;
    background-color: rgba(46, 46, 46, 0.5);
    color: var(--white);
    font-family: var(--font);
    display: flex;
    flex-direction: column;
  }
`;
export const move = styled.div`
  font-size: 1rem;
  background-color: var(--non);
  color: var(--white);
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border: #ffffff solid 2px;
  }
`;
export const userName = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  font-size: 1.5rem;
  color: var(--white);
  font-family: var(--font);
  position: absolute;
  right: 0;
  top: -2.75rem;
`;
