import styled from "styled-components";
type BannerType = {
    banner: string
}
export const Container = styled.div`
    min-width: 100%;
    height: 100vh;
    background-color: black;
    padding-bottom: 50px;
`

export const Destaques = styled.div<BannerType>`
    height: 100vh;
    background-size: 'cover';
    background-position: 'center';
    background-image: url(${props => props.banner});
`