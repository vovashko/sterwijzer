import React, { useState } from 'react';
import Modal from 'react-modal';
import { Heading } from '../Description/DescriptionElements';
import { AboutContainer, AboutWrapper, Content } from './AboutElements';

const AboutPage = () => {
  return (
        <AboutContainer>
          <AboutWrapper>
            <Heading>Disclaimer</Heading>
            <Content>SterWizer is jouw luchtige metgezel in de duistere politieke afgrond, die een kosmische kijk biedt op partijvoorkeuren op basis van je sterrenbeeld. Echter, net zoals navigeren aan de hand van sterren, is dit meer kunst dan wetenschap. Beschouw het als een speelse parodie, geen serieuze politieke kompas. We moedigen je aan om je stem de ernst te geven die het verdient. De sterren kunnen fonkelen, maar jouw onderzoek naar partijprogramma's, ideologieën en kandidaatconcepten zou nog helderder moeten schijnen. Stem wijs en moge jouw politieke reis even amusant zijn als navigeren aan de hand van de sterren in de donkerste nachten. En onthoud, "Geen duisternis duurt eeuwig. En zelfs daar zijn er sterren."
— Ursula K. Le Guin</Content>
          </AboutWrapper>
          <AboutWrapper>
            <Heading>Over Ons</Heading>
            <Content>Ga op een kosmische reis met SterWizer, de grillige gids om jouw politieke pad te ontdekken op basis van je sterrenbeeld. Wanneer het politieke landschap gehuld lijkt in duisternis, laat dan je sterrenbeeld het leidende licht zijn dat je naar de partij leidt die aansluit bij je hemelse vibes. Ontdek de humor in de sterrenbeelden en vind je politieke kompas te midden van de kosmische chaos van de verkiezingen op 22 november in Nederland.</Content>
          </AboutWrapper>
        </AboutContainer>
  )
}

export default AboutPage;
