import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    width:100%;
    height: 100vh;

    img{
        display: block;
        width: 100%;
        max-height: 100%;
    }
`

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: url("../src/img/background.jpg") center center no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

`

export const Gradient = styled.div`

    background: rgba(0, 0, 0, 0.6);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.0) 60%,
        rgba(0, 0, 0, 0.12) 100%,
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`


export const FormRegistration = styled.div`
    display:grid;
    justify-items: center;
    max-width: 800px;
    text-align: center;
    padding: 10px;
    z-index: 1;
    margin: 0;


    h1{
        max-width: 640px;
        font-size: 3rem;
    }
    
    h2{
        max-width: 640px;
        margin: 16px 0;
        font-size: 1.6;
        font-weight: 400;
    }
`

export const Section = styled.section`
    background-color: black;
    border-top: 8px solid #222;
    padding: 70px 45px;
    z-index: 1;
    width: 100%;

`

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1.1fr 1fr;

    

`