import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import d66 from '../images/parties/d66.png';
import { cancerData } from '../components/Values/Data';
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsSign, ResultsProcent } from '../components/Results/ResultElements';


const CancerResult = () => {
    
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
                <ResultsIcon src={d66}/>
                <ResultsProcent>100%</ResultsProcent>
            </ResultCard>
                <ResultsH2>{cancerData.subtitle}</ResultsH2>
                <ResultsP>{cancerData.content}</ResultsP>
            </ResultWrapper>
            </ResultContainer>
            <Footer />
        </>
    )
}

export default CancerResult