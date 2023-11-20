import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { capricornData } from '../components/Values/Data';
import vvd from '../images/parties/vvd.png'
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsSign, ResultsProcent } from '../components/Results/ResultElements';


const CapricornResult = () => {
    
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
                <ResultsIcon src={vvd}/>
                <ResultsProcent>100%</ResultsProcent>
            </ResultCard>
                <ResultsH2>{capricornData.subtitle}</ResultsH2>
                <ResultsP>{capricornData.content}</ResultsP>
            </ResultWrapper>
            </ResultContainer>
            <Footer />
        </>
    )
}

export default CapricornResult