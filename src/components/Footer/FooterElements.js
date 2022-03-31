import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    // background-color: yellow;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    // background-color: cyan;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    // background-color: red;
    margin: 16px;
    justify-content: space-between;
    width: 300px;
    box-sizing: border-box;
    color: #fff;

    @media screen and(max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    color: #fff;
    font-size = 14px;
    margin-bottom: 16px;
`

export const FooterIcon = styled.a`
    color: #fff;
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`