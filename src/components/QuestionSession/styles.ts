import styled from "styled-components";

export const Container = styled.div`
    list-style: none;
    margin-bottom: 8px;
    max-width: 815px;

    .faq-answer-open{
        display:block;
        background: #303030;
        padding: 1.2em;
        text-align: left;
        font-size: 1.6rem;
    }

    .faq-answer-closed{
        background: #303030;
        padding: 1.2em;
        text-align: left;
        font-size: 1.6rem;
        display: none
    }
    
    @media(width:412px){
        .faq-answer-open{
            display:block;
            background: #303030;
            padding: 1.2em;
            text-align: left;
            font-size: 1.6rem;
        }    
    }
`
export const ButtonQuestion = styled.h1`
    padding: 20px 30px;
    background: #303030;
    border: none;
    text-align: left;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 1.6rem;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-item: center;
    width:100%;

    &::after{
        content: " ";
        display: block;
        width: 20px;
        height: 20px;
        background: url("../src/img/fechar.svg") no-repeat center center;
        transform: rotate(45deg);
    }
  
`