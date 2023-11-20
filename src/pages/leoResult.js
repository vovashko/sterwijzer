import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { leoData } from '../components/Values/Data';
import BBB from '../images/parties/bbb.png'
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsSign, ResultsProcent } from '../components/Results/ResultElements';


const LeoResult = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return(
        <>

            <Navbar toggle={toggle} />
            <ResultContainer>
            <ResultWrapper>
            <ResultsH1>Uw resultaat</ResultsH1>
            <ResultCard>
                <ResultsIcon src={BBB}/>
                <ResultsProcent>100%</ResultsProcent>
            </ResultCard>
                <ResultsH2>{leoData.subtitle}</ResultsH2>
                <ResultsP>{leoData.content}</ResultsP>
            </ResultWrapper>
            </ResultContainer>
            <Footer />
        </>
    )
}

export default LeoResult