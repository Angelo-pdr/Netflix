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