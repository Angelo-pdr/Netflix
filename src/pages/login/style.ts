import styled from "styled-components";

export const Container = styled.div`

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    max-width: 100%;
    min-height: 100vh;
    background: url("../src/img/backLogin.jpg") center center no-repeat;
    position: relative;

    @media( width: 412px){

        .container{
            max-width: 100%;
            min-height: 100vh;
            background: black;
            position: relative;
        }
    }    

`

export const Header = styled.header`
    position: absolute;
    z-index: 1;
    padding: 20px 40px;
    height: 90px;
    display: block;
    
    @media( width: 412px){
        .header{
            position: absolute;
            z-index: 1;
            height: 45px;
            display: block;
        }
    
        .header img{
            margin-top: 10px;
            margin-left: -20px;
            width: auto;
            height: 20px;
            display: block;
        }
    }
`

export const Gradient = styled.div`
    background: rgba(0, 0, 0, 0.5);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0,
        rgba(0, 0, 0, 0.0) 60%,
        rgba(0, 0, 0, 0.12) 100%,
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const Footer = styled.footer`
    width: 100%;
    height: 250px;
    margin-top: 0;
    background: rgba(0,0,0,0.9);
    padding-bottom: 20px;
    font-size: 1em;
    position: relative;
    z-index: 1;
    
    .information{
        margin 0 auto;
        padding: 30px 0;
        margin: 0 175px;
    }

    p{
        margin-bottom: 30px;
        color: #757575;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 20px;
        list-style: none;

    }

    li{
        font-size: 13px;
        
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: #757575;
    }

    a:hover{
        text-decoration: underline;
    }

    .buttonLanguage{
        margin-top: 30px;
        padding: 15px 40px;
        text-align: left;
        font-size: 13px;
        background-color: transparent;
        color: #757575;
        border: 1px solid #333;
        cursor: pointer;
    }
    
    @media(width: 412px){
        
        &{
            display: flex;
            border-top: 1px solid #e5e5e5;
            height: 100%;
            width: 100%;
        }

        .information{
            margin 0 auto;
            padding: 30px 0;
            margin: 0 30px;       
        }
        
        .grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        li{
            font-size: 13px;
            margin-left: 20px
        }
    }
`