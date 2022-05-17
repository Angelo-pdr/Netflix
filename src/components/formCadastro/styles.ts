import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    justify-items: center;
    max-width: 800px;
    text-align: center;
    padding: 10px;

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

    h3{
        max-width: 640px;
        font-size: 1.2;
        font-weight: 400;
        margin-bottom: 20px;
    }
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 430px 183px;
    height: 60px;
    

    input{
        font-size: 16px;
        padding-left: 10px;
        color:black;
        border-none;
        outline: none;
    }

    input::placeholder{
        color: #8c8c8c;
    }
    
    button{
        background-color: #e50914;
        border:none;
        font-size: 1.6rem;
        cursor: pointer;
    }
`