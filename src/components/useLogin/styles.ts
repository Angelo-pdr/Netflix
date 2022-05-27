import styled from "styled-components";

export const container = styled.div`
   
    padding: 60px 68px 40px;
    min-width: 380px;
    height: 560px;
    background-color: rgba(0,0,0,.75);
    margin: 90px 0;
    z-index: 1;
    
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
    margin-bottom: 36px;
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