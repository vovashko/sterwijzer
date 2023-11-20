import React, {useState} from 'react';
import HeroSection from '../components/HeroSection/Hero';
import { homeObjOne} from '../components/InfoSection/Data';
import InfoSection from '../components/InfoSection/Info';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import { heroHome } from '../components/HeroSection/HeroData';
import Splitter from '../components/Splitter/Splitter';
import { splitterOne} from '../components/Splitter/Data';
import Description from '../components/Description/Description';
import { descriptionOne} from '../components/Description/Data';

const Start = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return(
        <>
            <Navbar {...splitterOne} />
            <Splitter {...splitterOne}/>
            <HeroSection {...heroHome} />
            <InfoSection {...homeObjOne}/>
            <Description {...descriptionOne}/>
            <Footer />
        </>
    )
}

export default Start