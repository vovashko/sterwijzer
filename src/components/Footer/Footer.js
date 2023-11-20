import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer, FooterWrap,  SocialMedia, SocialMediaWrap, SocialIcons, SocialIconLink, WebsiteRights, FooterLinksContainer} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
            <FooterLinksContainer>
                <WebsiteRights>SterWijzer © {new Date().getFullYear()}. Alle Rechten voorbehouden </WebsiteRights>
            </FooterLinksContainer>
                    <SocialMediaWrap>  
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="X-Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Tiktok"><FaTiktok /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>



    )

}

export default Footer