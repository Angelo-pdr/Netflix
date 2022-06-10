import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Flex = styled.div`
    max-width: 450px;
`

export const Before = styled.div`
    display: block;
    height: 91px;  

    @media(width: 412px){
        &{
            display: none;
        }
    }
`
export const LoginArea = styled.div`
   
    padding: 60px 68px 40px;
    min-width: 380px;
    min-height: 560px;
    background-color: rgba(0,0,0,.75);
    margin-bottom: 90px;

    z-index: 1;
    position: relative;
    h1{
        margin-bottom: 28px;
    }

    @media(width: 412px){
        &{
            padding: 30px 20px;
            margin-bottom: 0px;

        }
    }

`

export const label = styled.label`
    width: 100%;
    display:block;
    display:flex;
    justify-content: left;
    align-item: center;
    margin-bottom: 20px;
    background-color: #333;
    border-radius: 4px;
    border-bottom: 2px solid #e87c03;
    position: relative;

    input{
        flex: 1;
        font-size: 16px;
        background: #333;
        border: none;
        outline: none;
        height: 50px;
        width: 314px;
        padding: 16px 20px 0;
        border-radius: 4px;
    }

    .inputPassword{
        max-width:70%;
        right:50px;
    }

    button{    
        background-color: transparent;
        color: #8c8c8c;
        height: 50px;
        border: none;
        cursor: pointer;
        position: absolute;
        left: 77%
    }
`

export const Button = styled.button`
    width: 100%;
    border-radius: 4px;
    background: #e50914;
    padding: 16px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 24px 0 12px;
    border: none;
`

export const Options = styled.div`
    width: 100%;
    padding-bottom: 100px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: #b3b3b3;


    div{
        display:flex;
        align-items: center;
    }

    .span{
        margin-left: 5px;
        color: #b3b3b3;
        cursor: initial;
    }


    .checkbox{
        color: #b3b3b3;
        font-size: 18px;
    }

    a{
        text-decoration: none;
        color: #b3b3b3;
    }

    a:hover{
        text-decoration: underline;
    }
`

export const Signit = styled.div`
    width: 100%;
    color: #737373;
    height: 133px;
    
    div{
        display: flex;
        align-item: center;
    }
    
    p{
        color: #737373;
    }

    a{
        margin-left: 5px;
        text-decoration: none;
    }

    a:hover{
        text-decoration: underline;
    }

    max-width: 314px;
    
    .knowMore{
        margin-top: 10px;
        font-size: 13px;
        color: #737373; 
    }

    .know{
        color: #0071eb;
        margin: 0;
    }
`
export const Footer = styled.footer`
    width: 100%;
    height: 250px;
    margin-top: 0;
    background: rgba(0,0,0,0.9);
    padding-bottom: 20px;
    font-size: 1em;
    z-index: 1;
    
    .information{
        margin 0 auto;
        padding: 30px 0;
        margin: 0 175px;
        
    }
    p{
        margin-bottom: 30px;
        color: #757575;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 20px;
        list-style: none;
        
    }

    li{
        font-size: 13px;
        
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: #757575;
    }

    a:hover{
        text-decoration: underline;
    }

    .buttonLanguage{
        margin-top: 30px;
        padding: 15px 40px;
        text-align: left;
        font-size: 13px;
        background-color: transparent;
        color: #757575;
        border: 1px solid #333;
        cursor: pointer;
    }
    
    @media(width: 412px){
        
        &{
            display: flex;
            border-top: 1px solid #e5e5e5;
            height: 100%;
            width: 100%;
        }

        .information{
            margin 0 auto;
            padding: 30px 0;
            margin: 0 30px;       
        }
        
        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        li{
            font-size: 13px;
            margin-left: 20px
        }
    }
`