import styled from 'styled-components'

export const Container=styled.div`
    width: 20rem;
    max-height: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    border-radius: 8px;
    border: 1px solid black;
    
    & div{
        width: 20rem;
        background-color: RGB(138, 154, 91);
        border-radius: 8px;
        text-transform:capitalize;
    }

    & *{
        margin:.5rem;
    }
    & button{
        color: white;
        background-color: rgb(80,123,96);
        border: none;
        width: 5rem;
        height: 2rem;
        border-radius: 5px;
        cursor: pointer;
        transition:.5s;

        &:hover{
        margin-left: 1rem;
    }
    }

    
`