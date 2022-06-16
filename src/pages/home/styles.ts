import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    width:100%;
    height: 100vh;

    img{
        display: block;
        width: 100%;
        max-height: 100%;
    }

    @media(max-width: 950px){
        img{
            margin-top: -10px;
            display: block;
            max-width: 600px;
            z-index: 0;
        }
    }

    @media(max-width: 415px){
        img{
            margin-top: -10px;
            display: block;
            max-width: 600px;
            max-height: 450px;
        }
    }
`

export const Main = styled.div`
    width: 100%;
    height: 100vh;
    background: url("../src/img/background.jpg") center center no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 20px;

    @media(max-width: 950px) {
        width: 100%;
        height: 100vh;
        background-color: black;
    }

    @media(max-width: 415px){
        width: 100%;
        max-height: 532px;
        background-color: black;
    }
`

export const Gradient = styled.div`

    background: rgba(0, 0, 0, 0.6);
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.0) 60%,
        rgba(0, 0, 0, 0.12) 100%,
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`


export const FormRegistration = styled.div`
    display:grid;
    justify-items: center;
    max-width: 800px;
    text-align: center;
    padding: 10px;
    z-index: 1;
    margin: 0;


    h1{
        max-width: 640px;
        font-size: 3rem;
    }
    
    h2{
        max-width: 640px;
        margin: 16px 0;
        font-size: 1.6;
        font-weight: 400;
    }


    @media(max-width: 950px) {
  
        display:grid;
        justify-items: center;
        max-width: 800px;
        text-align: center;
        padding: 30px 0px;
        
        h1{
            max-width: 100%;
            font-size: 3.1rem;
        }
    
        h2{
            max-width: 100%;
            margin: 16px 0;
            font-size: 1.6rem;
            font-weight: 400;
        }
    }

    @media(max-width: 415px){
        
        display:grid;
        justify-items: center;
        max-width: 800px;
        text-align: center;
        padding: 30px 0px;

        h1{
            max-width: 100%;
            font-size: 1.7rem;
        }
    
        h2{
            max-width: 100%;
            margin: 16px 0;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`

export const Section = styled.section`
    background-color: black;
    border-top: 8px solid #222;
    padding: 70px 45px;
    z-index: 1;
    width: 100%;


    @media(max-width: 950px){
        background-color: black;
        border-top: 8px solid #222;
        padding: 70px 45px;
        z-index: 1;
    }

    @media(max-width: 415px){
        background-color: black;
        border-top: 8px solid #222;
        padding: 50px 20px;
        z-index: 1;


    }
`
export const ContainerSection = styled.div`
    max-width: 1100px;
    max-height: 850px;
    margin: 0px auto;

`

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 1.1fr 1fr;

    h1{
        font-size: 3.1rem;
        line-height: 1.1;
        margin-bottom: 1rem;
    }
    
    h2{
        font-size: 1.6rem;
        font-weight: 400;
    }

    .img-tv{
        position: relative;
    }
    
    .img-tv img{
        position: relative;
        z-index: 1;
        
    }
    
    .img-tv2{
        position: relative;
    }
    
    .video-tv{
        position: absolute;
        top: 80px;
        left: 70px;
        height: auto;
        width: 80%;
    }
    
    .video-tv2{
        position: absolute;
        height: auto;
        top: 50px;
        left: 100px;
        max-width: 63%;
    }
    
    .left{
        order: 2;
    }
    
    .right{
        order: 1;
    }


    @media(max-width: 950px){
      
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    
        h1{
            font-size: 2.5rem;
            text-align: center;
            line-height: 1.1;
            margin-bottom: 8px;
        }
    
       h2{
            font-size: 1.25rem;
            font-weight: 400;
            text-align: center;
            margin: 15px 0 5px 0;
        }
    
        .img-tv img{
            position: relative;
        }
    
        .video-tv{
            position: absolute;
            top: 70px;
            left: 79px;
            height: auto;
            max-width: 80%;
        }
        
        .video-tv2{
            position: absolute;
            max-height: auto;
            top: 30px;
            left: 110px;
            max-width: 63%;
        }
    
        .text{
            z-index: 100;
        }

        .left{
            order: 1;
            z-index: 1;
        }
        
        .right{
            order: 2;
            z-index: 0;
        }
    }

    @media(max-width: 415px){
        margin: 0 auto;
        display: flex;
        flex-direction: column

        h1{
            font-size: 1.6rem;
            text-align: center;
            line-height: 1.1;
            margin-bottom: 1rem;
        }
    
        h2{
            font-size: 1.1rem;
            font-weight: 400;
            text-align: center;
        }
    
        .video-tv{
            position: absolute;
            top: 40px;
            left: 50px;
            height: auto;
            max-width: 80%;
        }
        
        .video-tv2{
            position: absolute;
            max-height: auto;
            top: 20px;
            left: 60px;
            max-width: 63%;
        }
    
        .left{
            order: 1;
            z-index: 1;
        }
        
        .right{
            order: 2;
        }

        .right img{
            margin-top: 0;
        }

        .text{
            z-index: 1;
        }
    

    
    }
`