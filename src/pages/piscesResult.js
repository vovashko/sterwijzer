import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { piscesData } from '../components/Values/Data';
import question from '../images/parties/question.png';
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsSign, ResultsProcent } from '../components/Results/ResultElements';



const PiscesResult = () => {
    
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
                <ResultsIcon src={question}/>
                <ResultsProcent>0%</ResultsProcent>
            </ResultCard>
                <ResultsH2>{piscesData.subtitle}</ResultsH2>
                <ResultsP>{piscesData.content}</ResultsP>
            </ResultWrapper>
            </ResultContainer>
            <Footer />
        </>
    )
}

export default PiscesResult