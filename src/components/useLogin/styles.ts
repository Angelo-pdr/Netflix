import styled from "styled-components";

type corButton ={
    borderCor: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .closed{
        color: #e87c03;
        margin-bottom: 6px;
        font-size: 13px;
        padding: 6px 3px;
        display: none;
    }

    .open{
        color: #e87c03;
        margin-bottom: 6px;
        font-size: 13px;
        padding: 6px 3px;
        display: block;
    }
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

export const label = styled.label<corButton>`
    width: 100%;
    display:block;
    display:flex;
    justify-content: left;
    align-item: center;
    margin-top: 15px;
    background-color: #333;
    border-radius: 4px;
    border-bottom: ${props => props.borderCor ? "2px solid #e87c03" : "none"};
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