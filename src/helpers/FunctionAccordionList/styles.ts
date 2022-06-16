import styled from "styled-components";

export const Container = styled.div`
    list-style: none;
    margin-bottom: 8px;
    max-width: 815px;

    .faq-answer-closed{
        max-height: 0;
        overflow:hidden;
        transition: max-height: 0.25s cubic-bezier(0.5, 0, 0.1, 1)
    }

    .faq-answer-open{
        background: #303030;
        padding: 1.2em;
        text-align: left;
        font-size: 1.6rem;
    }
    
    @media(width:412px){
        .faq-answer-open{
            display:block;
            background: #303030;
            padding: 1.2em;
            text-align: left;
            font-size: 1.1rem;
        }    
    }
`
export const ButtonQuestion = styled.div`


    .faq-question{
        padding: 20px 30px;
        background: #303030;
        border: none;
        text-align: left;
        cursor: pointer;
        margin-top: 8px; 
        margin-bottom: 1px;
        font-size: 1.6rem;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-item: center;
        width:100%;
    }


    .faq-question::after{
        content: " ";
        display: block;
        width: 20px;
        height: 20px;
        background: url("../src/img/fechar.svg") no-repeat center center;
        transform: rotate(45deg);
    }

    .faq-question.open::after{
        transform: rotate(0deg);
    }

    @media(width: 412px){
       
        .faq-question{
            font-size: 1.1rem;
            padding: 14px 21px;
        }
       
        faq-question::after{
            content: " ";
            display: block;
            width: 15px;
            height: 15px;
            background: url("../src/img/fechar.svg") no-repeat center center;
            transform: rotate(45deg);
        }
    }
  
`