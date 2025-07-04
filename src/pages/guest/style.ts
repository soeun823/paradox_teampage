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
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const charaterSet = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    transition: left 0.5s, top 0.5s;
    background-color: var(--non);
`;

export const charaterImg = styled.img`
    background-color: var(--non);
`;

export const charaterName = styled.div`
    background-color: var(--non);
    text-align: center;
    color: var(--white);
`;