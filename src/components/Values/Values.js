import React from 'react'
import {ValuesCard, ValuesContainer, ValuesH1, ValuesH2, ValuesIcon, ValuesP, ValuesWrapper, CardLink} from "./ValuesElements"
import Aries from '../../images/signs/aries.svg'
import Taurus from '../../images/signs/taurus.svg'
import Gemini from '../../images/signs/gemini.svg'
import Cancer from '../../images/signs/cancer.svg'
import Leo from '../../images/signs/leo.svg'
import Virgo from '../../images/signs/virgo.svg'
import Libra from '../../images/signs/libra.svg'
import Scorpio from '../../images/signs/scorpio.svg'
import Sag from '../../images/signs/sagittarius.svg'
import Capricorn from '../../images/signs/capricorn.svg'
import Aquarius from '../../images/signs/aquarius.svg'
import Pisces from '../../images/signs/pisces.svg'

const Values = () => {
    return (
        <ValuesContainer id="values">
            <ValuesH1>Kies je sterrenbeeld</ValuesH1>
             <ValuesWrapper>
                <CardLink to="/zodiac/aries">
                <ValuesCard>
                    <ValuesIcon src={Aries} />
                    <ValuesH2>Ram</ValuesH2>
                    <ValuesP>21 mrt t/m 20 apr</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/taurus">
                <ValuesCard >
                    <ValuesIcon src={Taurus} />
                    <ValuesH2>Stier</ValuesH2>
                    <ValuesP>21 apr t/m 21 mei</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/gemini">
                <ValuesCard >
                    <ValuesIcon src={Gemini} />
                    <ValuesH2>Tweelingen</ValuesH2>
                    <ValuesP>22 mei t/m 21 jun</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/cancer">
                <ValuesCard >
                    <ValuesIcon src={Cancer} />
                    <ValuesH2>Kreeft</ValuesH2>
                    <ValuesP>22 jun t/m 23 jul</ValuesP>
                </ValuesCard>
                </CardLink>
            </ValuesWrapper>
            <ValuesWrapper>
            <CardLink to="/zodiac/leo">
                <ValuesCard >
                    <ValuesIcon src={Leo} />
                    <ValuesH2>Leeuw</ValuesH2>
                    <ValuesP>24 jul t/m 23 aug</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/virgo">
                <ValuesCard >
                    <ValuesIcon src={Virgo} />
                    <ValuesH2>Maagd</ValuesH2>
                    <ValuesP>24 aug t/m 23 sep</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/libra">
                <ValuesCard >
                    <ValuesIcon src={Libra} />
                    <ValuesH2>Weegschaal</ValuesH2>
                    <ValuesP>24 sep t/m 23 okt</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/scorpio">
                <ValuesCard >
                    <ValuesIcon src={Scorpio} />
                    <ValuesH2>Schorpioen</ValuesH2>
                    <ValuesP>24 okt t/m 22 nov</ValuesP>
                </ValuesCard>
                </CardLink>
            </ValuesWrapper>
            <ValuesWrapper>
            <CardLink to="/zodiac/sagittarius">
                <ValuesCard >
                    <ValuesIcon src={Sag} />
                    <ValuesH2>Boogschutter</ValuesH2>
                    <ValuesP>23 nov t/m 22 dec</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/capricorn">
                <ValuesCard >
                    <ValuesIcon src={Capricorn} />
                    <ValuesH2>Steenbok</ValuesH2>
                    <ValuesP>22 dec t/m 20 jan</ValuesP> 
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/aquarius">
                <ValuesCard >
                    <ValuesIcon src={Aquarius} />
                    <ValuesH2>Waterman</ValuesH2>
                    <ValuesP>21 jan t/m 18 feb</ValuesP>
                </ValuesCard>
                </CardLink>
                <CardLink to="/zodiac/pisces">
                <ValuesCard >
                    <ValuesIcon src={Pisces} />
                    <ValuesH2>Vissen</ValuesH2>
                    <ValuesP>19 feb t/m 20 mrt</ValuesP>
                </ValuesCard>
                </CardLink>
            </ValuesWrapper>
        </ValuesContainer>
    )
}


export default Values