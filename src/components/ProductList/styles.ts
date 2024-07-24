import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4rem;
    gap: 4rem;
`
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem; 
  max-width: 45rem;
`
export const Title = styled.h1`
    color: var(--purple-dark);
    font-size: var(--font-size-xlarge);
`

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Button = styled.button`
    background: none;
    color: var(--purple-dark);
    text-align: left;
    font-size: var(--font-size-medium);
    border: 2px solid var(--purple-dark);
    border-radius: 50px;
    padding: 0.5rem 5rem 0.5rem 1rem;
`