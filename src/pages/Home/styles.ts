import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4rem;
`

export const Button = styled.button`
display: flex;
  background-color: var(--background-tertiary);
  color: var( --text-color-secondary);
  font-weight: bold;
  border: none;
  padding: 0.8rem;
  margin: 1rem 4rem;
  border-radius: 50px;
  cursor: pointer;
`;