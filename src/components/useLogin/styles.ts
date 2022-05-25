import styled from "styled-components";

export const container = styled.div`
    margin: 100px auto;
    padding: 60px 68px 40px;
    min-width: 380px;
    height: 560px;
    background-color: rgba(0,0,0,.75);
    z-index: 1;
    
    h1{
        margin-bottom: 28px;
    }
`

export const label = styled.label`
    width: 100%;
    display:block;
    display:flex;
    justify-content: center;
    align-item: center;
    margin-bottom: 20px;

    input{
        padding: 16px 20px 0;
        flex: 1;
        border: none;
        height: 50px;
    }
`