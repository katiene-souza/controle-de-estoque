import styled from "styled-components";


export const Card = styled.div`
    background-color: var(--background-secondary);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 38px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 1rem;
    width: 36rem;
    height: 20rem;
`

export const Title = styled.h1`
     font-size: var(--font-size-xlarge);
`
export const SubTitle = styled.p`
    font-size: var( --font-size-xmedium);
`
export const Stock = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 1rem;

    p {
        background-color: var(--background-tertiary);
        color: var(--text-color-secondary);
        padding: 0.3rem 1rem;
        border-radius: 15px;
    }
`
export const Description = styled.div`
    margin: 1rem 0;
    font-size: var(--font-size-normal);
    overflow-wrap: break-word;
    flex-grow: 1;
`
export const Price = styled.p`
    font-size: var( --font-size-medium);
    font-weight: bold;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: right;
    flex-direction: row;
    gap: 0.5rem;
    
    button {
        width: 3rem;
        height: 3rem;
        border-radius: 15px;
        cursor: pointer;
        background-color: var(--background-tertiary);
        font-size: var(--font-size-medium);
    }
`
