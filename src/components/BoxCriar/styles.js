import styled from 'styled-components'

export const Container=styled.div`
    width: 30rem;
    height: 20rem;
    background-color: RGB(86 156 112);
    margin: 5% 35%;
    display: block;
    text-align:center;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.75);

    & div{
        margin-top: 2rem;
        display: flex;
        justify-content: center;

        & input{
            background: transparent;
            border-radius: 8px;
            border: 1px solid black;
            padding:.2rem ;
            outline: none;
        }

        & *{
            margin: 1rem;
        }
        
    }

    & button{
        background: rgba( 255, 255, 255, 0.35 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        font-size: 20px;
        width: 10rem;
        margin-top: 3rem;
        transition:.5s ease-in;
        cursor: pointer;

        &:hover{
            background-color: white;
        }
    }
`