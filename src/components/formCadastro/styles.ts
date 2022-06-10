import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    justify-items: center;
    max-width: 800px;
    text-align: center;
    padding: 10px;
    z-index: 1;

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

    @media(max-width: 700px){

        display:grid;
        justify-items: center;
        max-width: 800px;
        text-align: center;
        padding: 30px 0px;
        margin-top: 30px;

        h1{
            max-width: 100%;
            font-size: 3.1rem;
        }

        h2{
            max-width: 100%;
            margin: 16px 0;
            font-size: 1.6rem;
            font-weight: 400;
        }

        h3{
            max-width: 450px;
            font-size: 23px;
            font-weight: 400;
            padding: 0 20px;
        }
    }

    @media(width: 412px){
        display:grid;
        justify-items: center;
        max-width: 800px;
        text-align: center;
        padding: 30px 0px;

        h1{
            max-width: 100%;
            font-size: 1.7rem;
        }

        h2{
            max-width: 100%;
            margin: 16px 0;
            font-size: 1.2rem;
            font-weight: 400;
        }

        h3{
            max-width: 320px;
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
        border-radius: 3px;
    }

    button:hover{
        background: #f40612;
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
            padding-bottom: 0px;
            outline: none;
            height: 48px;
            min-width: 90%;
            margin: 0px;
            margin-bottom: 10px
        }
    }
`
  
export const Gradient = styled.div`
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0.0) 60%,
        rgba(0, 0, 0, 0.12) 100%,
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`