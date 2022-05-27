import styled from "styled-components";

export const container = styled.div`
   
    padding: 60px 68px 40px;
    min-width: 380px;
    height: 560px;
    background-color: rgba(0,0,0,.75);
    margin: 90px 0;
    z-index: 1;
    position: relative;

    h1{
        margin-bottom: 28px;
    }

`

export const label = styled.label`
    min-width: 100%;
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
    display: flex;
    align-item: center;
    
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
`
export const OptionOther = styled.div`
    max-width: 314px;
    height: 133px;
    .knowMore{
        margin-top: 10px;
        font-size: 13px;
        color: #737373;
       
    }
`