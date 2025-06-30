import styled from "@emotion/styled";

export const main = styled.div`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 200px;

    @media (max-width: 1024px) {
        margin: 0;
    }
`;


export const list = styled.div`
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
`;