import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--yellow-light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 38px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    width: 40rem;
    height: 60rem;
    gap: 2rem;
    margin: 1rem auto;
`
export const Title = styled.h1`
    color: var(--purple);
    font-size: var(--font-size-large);
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div, label {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    label {
        color: var(--purple-dark);
        font-size: var( --font-size-medium);
    }

    input, textarea, select {
        background: none;
        color: var(--purple-dark);
        border: 1px solid var(--purple-dark);
        padding: 1.5rem 7rem 1.5rem 2rem;
        border-radius: 20px;  
    }
    
    input::placeholder, textarea::placeholder {
        color: var(--purple-dark); 
        width: 100%
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`
export const Button = styled.button`
    padding: 1.5rem 0;
    border-radius: 15px;
    background-color: var(--purple-dark);
    color: var(--yellow-light);
    font-size: var(--font-size-medium);
`

