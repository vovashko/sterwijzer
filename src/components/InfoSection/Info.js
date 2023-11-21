import React from "react"
import {InfoContainer, InfoWrapper, Heading, Subtitle, BtnWrap, BtnLink} from './InfoElements'

const InfoSection = ({id }) => {
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