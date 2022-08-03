import styled from "styled-components";
type BannerType = {
    banner: string
}
export const Container = styled.div`
    background-color: black;
    padding-bottom: 50px;

    .loandig{
        width: 100%;
        position: fixed;
        left:0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Header = styled.div<{black: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    position: fixed;
    z-index: 2;
    padding: 10px  60px;
    background: ${props => props.black ? 'black' : ' linear-gradient(to bottom, #111, transparent);'};
    transition: all ease 0.5s;

    .logo{
        height: 20px;
        margin: 0 auto;
    }

    .users{
        display: flex;
        align-items: center;
    }
    .users p{
        margin-left: 5px;
    }

    .usersImage{
        height: 30px;
        margin: 0 auto;
        border-radius: 4px;
    }

    div{
        display: flex;
    }
    .icons{
        display: flex;
        align-items: center;
        margin-left: 10px;
    }

   .liIcons{
    padding: 0 5px;
   }
   .arrow{
    padding: 0;
   }

    ul{
        display: flex;
        list-style: none;
        margin-left: 20px;
    }

    li{
        padding: 0 10px;
        font-size: 14px;
        cursor: pointer;
        transition: all ease 0.5s;
    }

    li:hover{
        color:  #AEAEB2;
    }
`

export const Destaques = styled.div<BannerType>`
    height: 650px;
    background-size: cover;
    background-position: 'center';
    background-image: url(${props => props.banner});
    position: relative;
    display:flex;
    align-items: center;
    margin-bottom: -120px;
    

    .infoMovie{
        max-with: 30vh;
        margin-left:80px;
        z-index: 1;
    }

    h1{
        font-size: 35px;
        width:100%;
        margin: 0;
        margin-bottom: 16px;
    }

    p{
        max-width:40%;
        
        font-size: 1.2w;
        font-weight: 400;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
        margin-bottom:10px;
    }
    .buttonAssitir{
        background-color: white;
        color: black;
    }
`

export const Gradient = styled.div`
    background-image: linear-gradient(to top, #111, transparent);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media(max-width: 415px) {
        width: 100%;
        height: 100%;
    }
`
export const Button = styled.button`
    background-color: rgba(109, 109, 110, 0.7);
    font-size: 16px;
    line-height: 2.4rem;
    font-weight: bold;
    margin:0px 1rem 0px 0px;
    padding: 0px 25px 0px 20px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    align-items: center;

    
`