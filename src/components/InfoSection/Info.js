import React from "react"
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Column2, Heading, Subtitle, BtnWrap, BtnLink, ImgWrap, Img} from './InfoElements'

const InfoSection = ({id, imgStart, headline, subtitle, buttonLabel, pageLink, img, alt, background, textColor }) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <Heading>Tweede Kamerverkiezing 22 november 2023</Heading>
                    <Subtitle>Test je politieke voorkeur op basis van je zodiac.</Subtitle>
                    <BtnWrap>
                    <BtnLink to="/zodiac">Start</BtnLink>
                    </BtnWrap>
                </InfoWrapper>
            </InfoContainer>
        </>
    )

}

export default InfoSection