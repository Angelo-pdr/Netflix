import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    padding: 0 45px;
    padding-top: 20px;

    button{
        margin-left: 10px;
        padding: 8px 18px;
        cursor: pointer;
        border: 1px solid #aaa;
        background-color: rgba(0,0,0,.4);
        font-size: .875rem;
        font-weight: 500;
        .875rem
    }

    .logIn{
        font-size: 1rem;
        border: none;
        background-color: #e50914;
        border-radius: 4px;
        
    }
`