import React from 'react';
import { ResultCard, ResultContainer, ResultsH1, ResultsIcon, ResultsP, ResultWrapper, ResultsH2, ResultsProcent } from './ResultElements';


const ResultPage = ({ title, subtitle, content, logo, alt, sign }) => {
  return (
    <ResultContainer>
      <ResultWrapper>
        <ResultsH1>Uw resultaat</ResultsH1>
        <ResultCard>
          <ResultsIcon />
          <ResultsProcent>100%</ResultsProcent>
        </ResultCard>
        <ResultsH2>{subtitle}</ResultsH2>
        <ResultsP>{content}</ResultsP>
      </ResultWrapper>
    </ResultContainer>
  )
}

export default ResultPage;
