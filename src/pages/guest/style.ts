import styled from "@emotion/styled";
import Skeleton from '@assets/skeleton.svg';

export const main = styled.div`
    width: 100vw;
    height: 100vh;
`;
export const section = styled.div`
    width: 70%;
    height: 100%;
    margin: 0 auto;
    background-image: url(${Skeleton});
    background-position: center;
    @media (max-width: 768px) {
        margin: 0;
    }
`;