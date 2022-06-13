import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-height: 850px;
    border-top: 8px solid #222;

    .section{
        background-color: black;
        border-top: 8px solid #222;
        padding: 70px 45px;
        z-index: 1;
    }
`
export const HeaderText = styled.h1`
    text-align: center;
    font-size: 3.1rem;
`

export const AreaQuestion = styled.div`
    margin: 55px 222px;
`

export const Questions = styled.ul`

li{
    list-style: none;
    margin-bottom: 8px;
    max-width: 815px;
}

.faq-question{
    padding: 20px 30px;
    background: #303030;
    border: none;
    text-align: left;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 1.6rem;
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



.faq-answer-closed{
    background: #303030;
    padding: 1.2em;
    text-align: left;
    font-size: 1.6rem;
    display: none
}

.faq-answer-open{
    display:block;
    background: #303030;
    padding: 1.2em;
    text-align: left;
    font-size: 1.6rem;
}
`

