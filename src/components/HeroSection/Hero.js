import React, { PureComponent } from "react"
import {HeroBg, HeroContainer, HeroContent, HeroH1, HeroH2, HeroP, ImageBg } from "./HeroElements"



const HeroSection = ({id, topline, headline, subtitle, HeroImage, alt}) => {
    return (
            <HeroContainer id={id}>
                <HeroBg>
                    <ImageBg src={HeroImage} alt={alt}/>
                </HeroBg>
                <HeroContent>
                    <HeroP>
                        Doe de
                        <br></br>
                         SterWijzer
                    </HeroP>
                </HeroContent>
            </HeroContainer>
    )}

export default HeroSection