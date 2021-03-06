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
    padding-top: 40px;

    img{
        margin: auto;
        height: 2rem;
    }


    button{
        margin-left: 30px;
        padding: 8px 18px;
        cursor: pointer;
        border: 1px solid #aaa;
        background-color: rgba(0,0,0,.4);
        font-size: .875rem;
        font-weight: 500;
    }

    .logIn{
        font-size: 1rem;
        border: none;
        background-color: #e50914;
        border-radius: 4px;
    }

    @media(width: 412px){

        &{
            margin-top: 20px;
            margin-bottom: 0;
            padding: 8px 20px;
            padding-bottom: 0;
        }

        img{
            margin: auto;
            height: 1.5rem;
        }

        button{
            margin-left: 10px;
            padding: 4px 22px;
            cursor: pointer;
            border: 1px solid #aaa;
            background-color: rgba(0,0,0,.4);
            font-size: .875rem;
            font-weight: 500;
        }

        .logIn{
            font-size: 1rem;
            border: none;
            padding: 4px 8px;
            background-color: #e50914;
            border-radius: 4px;
        }
    }
`