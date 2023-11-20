import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { taurusData } from '../components/Values/Data';
import sp from '../images/parties/sp.png'
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsSign, ResultsProcent } from '../components/Results/ResultElements';



const TaurusResult = () => {
    
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
                <ResultsIcon src={sp}/>
                <ResultsProcent>100%</ResultsProcent>
            </ResultCard>
                <ResultsH2>{taurusData.subtitle}</ResultsH2>
                <ResultsP>{taurusData.content}</ResultsP>
            </ResultWrapper>
            </ResultContainer>
            <Footer />
        </>
    )
}

export default TaurusResult