import styled from 'styled-components'

export const NavBar=styled.nav`
    width: 100%;
    height: 3rem;
    color: white;
    background-color:RGB(80 123 96);
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

    & button{
        background-color: transparent;
        border: none;
        font-weight: 700;
        font-size: 18px;
        color: white;
        cursor: pointer;
        padding:.2rem;
        transition:ease-in .3s;
        border-radius: 5px;

        &:hover{
            border: 1px solid black;
        }
    }
`

export const Content=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`

