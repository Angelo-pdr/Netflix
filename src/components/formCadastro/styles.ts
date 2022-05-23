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

    @media(max-width:412px){

        display:grid;
        justify-items: center;
        max-width: 370px;
        text-align: center;
        padding: 30px 0px;

        h1{
            max-width: 100%;
            font-size: 1.7rem;
        }

        h2{
            max-width: 100%;
            margin: 16px 0;
            font-size: 1.1rem;
            font-weight: 400;
        }

        h3{
            max-width: 450px;
            font-size: 18px;
            font-weight: 400;
            padding: 0 20px;
        }
    }
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 430px 183px;
    height: 60px;
    max-width: 100%;
    
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

    button:hover{
        background: #f40612;
    }

    @media(max-width: 412px){
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        
        width: 100%;

        input{
            color:black;
            border-none;
            outline: none;
            height: 48px;
            width: 100%;
        }

        button{
            background-color: #e50914;
            border:none;
            font-size: 1rem;
            padding: 11px;
            cursor: pointer;
            margin-top: 10px;
            width: 113px;
        }
    }
`
  
