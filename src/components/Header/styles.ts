import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--purple);
    box-shadow: 5px 5px 38px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
`

export const Title = styled.h1`
    color: var(--yellow);
    font-size: var(--font-size-xlarge);
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 1rem;

    .link {
        text-decoration: none;
        color: var(--purple-dark);
        background-color: var(--yellow);
        padding: 0.5rem 2rem;
        border-radius: 50px;
    }
`



