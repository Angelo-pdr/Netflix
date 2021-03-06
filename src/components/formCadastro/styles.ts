import styled from "styled-components";

export const Container = styled.div`

    h3{
        max-width: 100%;
        text-align: center;
        font-size: 1.2;
        font-weight: 400;
        margin-bottom: 20px;
    }

    @media(max-width: 700px){

        h3{
            max-width: 450px;
            font-size: 23px;
            font-weight: 400;
            padding: 0 20px;
        }
    }

    @media(width: 412px){
        min-width: 100%;

        h3{
            
            margin: 0 auto;
            margin-bottom: 10px;
            max-width: 350px;
            font-size: 18px;
            font-weight: 400;
            padding: 0 20px;
        }
    }
   
`

export const Form = styled.form`

    display: grid;
    grid-template-columns: 430px 183px;
    justify-content: center;
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
        border-radius: 3px;
    }

    button:hover{
        background: #f40612;
    }

    button:after{
        content: "";
        display:inline-block;
        width: 10px;
        height: 19px;
        margin-left: 10px;
        background: url("../src/img/seta.svg");
    }

    @media(max-width: 700px){
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        
        width: 100%;

        input{
            color:black;
            border-none;
            outline: none;
            height: 60px;
            width: 80%;
            margin: 0 10px;
        }

        button{
            background-color: #e50914;
            border:none;
            font-size: 1rem;
            padding: 11px;
            cursor: pointer;
            margin-top: 10px;
            height:40px;
            width: 113px;
            
        }
    }

    @media(width: 412px){

        &{
            height: 100%;
        }
        
        input{
            color:black;
            border: 1px solid #8c8c8c;
            padding 10px;
            height: 48px;
            min-width: 90%;
            margin: 0px;
            margin-bottom: 10px
        }
    }
`