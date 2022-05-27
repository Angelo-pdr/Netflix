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
    justify-content: center;
    align-item: center;
    margin-bottom: 36px;
    background-color: transparent;
    border-radius: 4px;
    border-bottom: 2px solid #e87c03;

    input{
        flex: 1;
        font-size: 16px;
        height: 50px;
        background: #333;
        border: none;
        position: relative;
    }
    button{
        padding: 0 12px;
        background-color: transparent;
        color: #8c8c8c;
        background: #333;
        height: 50px;
        position: absolute;
        left: 10px;
    }
`