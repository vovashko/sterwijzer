import React, {useState} from 'react';
import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import Values from '../components/Values/Values';

const DatePicker = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    return(
        <>

            <Navbar toggle={toggle} />
            <Values />
            <Footer />
        </>
    )
}

export default DatePicker