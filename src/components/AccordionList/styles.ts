import styled from "styled-components";

export const ContainerList = styled.section`
    background-color: black;
    border-top: 8px solid #222;
    padding: 70px 45px;
    z-index: 1;
    width: 100%;
    
    @media(max-width: 950px){
        font-size: 2.5rem
    }

    @media(max-width: 415px){
        padding: 50px 0px;
    }
`

export const HeaderText = styled.h1`
    text-align: center;
    font-size: 3.1rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;

    @media(max-width: 950px){
        font-size: 2.5rem
    }

    @media(max-width: 415px){
        font-size: 1.6rem
    }
`

export const ContainerHome = styled.div`
    max-width: 1100px;
    max-height: 850px;
    margin: 0px auto;

`
export const AreaQuestion = styled.div`
    width: 75%;
    margin: 3em auto;

    @media(max-width: 950px){
        font-size: 2.5rem;
        margin: 1em auto;
    }

    @media(max-width: 415px){
        margin: 22px auto;
        width: 100%;
    }
 
`

export const List = styled.ul`
    margin-bottom: 52px;

    @media(max-width: 415px){
        margin-bottom: 22px;
    }
`