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
    margin-bottom: 0.5rem;
`

export const AreaQuestion = styled.div`
    margin: 55px 222px;
`

export const Questions = styled.ul`

li{
    list-style: none;
    background: #303030;
    
    margin-bottom:8px ;
    
}

li button{
    padding: 0.8em 2.2em 0.8em 1.2em;
    background: #303030;
    border: none;
    text-align: left;
    cursor: pointer;
    margin-bottom: 1px;
    font-size: 1.6rem;
    font-weight: 400;
}

div{
    display: none;
}
`

