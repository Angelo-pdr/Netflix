import styled from "styled-components";
type BannerType = {
    banner: string
}
export const Container = styled.div`
    background-color: black;
    padding-bottom: 50px;
`

export const Destaques = styled.div<BannerType>`
    height: 650px;
    background-size: cover;
    background-position: 'center';
    background-image: url(${props => props.banner});
    position: relative;
    display:flex;
    align-items: center;

    .infoMovie{
        max-with: 30vh;
        margin-left:80px;
        z-index: 1;
    }
    h1{
        font-size: 50px;
        margin-bottom: 16px;
    }
    p{
        max-width:40%;
        text-align: justify;
        font-size: 1.2w;
        font-weight: 400;
        text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
        margin-bottom:10px;
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