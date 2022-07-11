import styled from "styled-components";
type BannerType = {
    banner: string
}
export const Container = styled.div`
    max-width: 100vw;
    height: 100vh;
    background-color: black;
    padding-bottom: 50px;
`

export const Destaques = styled.div<BannerType>`
    height: 100%;
    background-size: 'cover';
    background-position: 'center';
    background-image: url(${props => props.banner});
`