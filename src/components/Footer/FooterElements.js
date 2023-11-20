import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer `
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
`

export const FooterWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 35px 0 25px 0;
    border-top: 1px solid #000;
`

export const FooterLinksContainer = styled.div `
    justify-content: center;
    align-items: center;
    display: flex;
    padding-left: 20px;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div `
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
` 

export const FooterLinkTitle = styled.h1 `
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled.div `
    color: #000000;
    text-decoration: none;
    margin-bottom: 16px;
    font-size: 60px;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 820px) {
        font-size: 50px;
    }
`

export const SocialMediaWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

`

export const SocialLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small `
    color: #000;
    margin-bottom: 16px;
`

export const SocialIcons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a `
    color: #C931FF;
    font-size: 24px;
    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`