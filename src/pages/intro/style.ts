import styled from "@emotion/styled";


export const main = styled.div`
    height: 100vh;
    font-family: var(--font);
    margin: 0 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--black);
`;
export const info = styled.div`
    width: 100%;
    height: 100vh;
    padding-right: 48px;
    font-size: 1.5rem;
    display:flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    color: var(--white);
`;
export const title = styled.div`
    font-family: var(--font);
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    & > :first-of-type {
        font-size: 2.5rem;
    }

    & > :last-of-type {
        font-size: 3rem;
    }
`;

export const descrips = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;
export const window = styled.div`
    width: 100%;
    height: 30vh;
    border: 2px solid var(--primary);
    background-color: var(--white);
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    position: absolute;
`;
export const w_header = styled.div`
    width: 100%;
    border: 2px solid var(--dark-primary);
    background-color: var(--light-primary);
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    color: var(--dark-primary);
    font-family: var(--font2);
    & > div{
        background-color: var(--light-primary);
    }
`;
export const w_bady = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid var(--dark-primary);
    background-color: var(--white);
    padding: 12px;
    box-sizing: border-box;
`;