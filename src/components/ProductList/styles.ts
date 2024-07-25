import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem; 
  max-width: 45rem;
`
export const Title = styled.h1`
    color: var(--text-color);
    font-size: var(--font-size-xlarge);
`

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Input = styled.input`
    background: none;
    color: var(--text-color);
    text-align: left;
    font-size: var(--font-size-medium);
    border: 2px solid var(--text-color);
    border-radius: 50px;
    width: 21%;
    padding: 0.5rem 5rem 0.5rem 1rem;

    &::placeholder {
        color: var(--text-color);
    }
`