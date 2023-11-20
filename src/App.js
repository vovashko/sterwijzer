import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from './pages/start'
import About from './pages/about';
import DatePicker from './pages/datepicker';
import AriesResult from './pages/ariesResult';
import TaurusResult from './pages/taurusResult';
import GeminiResult from './pages/geminiResult';
import CancerResult from './pages/cancerResult';
import LeoResult from './pages/leoResult';
import VirgoResult from './pages/virgoResult';
import LibraResult from './pages/libraResult';
import ScorpioResult from './pages/scorpioResult';
import SagResult from './pages/sagResult';
import CapricornResult from './pages/capricornResult';
import AquaResult from './pages/aquaResult';
import PiscesResult from './pages/piscesResult';


function App() {
return (
	<Router>
    <Routes>
        <Route path='/' element={<Start />} exact />
        <Route path='/zodiac' element={<DatePicker />} exact />
        <Route path='/about' element={<About />} exact />
        <Route path='/zodiac/aries' element={<AriesResult />} exact />
        <Route path='/zodiac/taurus' element={<TaurusResult />} exact />
        <Route path='/zodiac/gemini' element={<GeminiResult />} exact />
        <Route path='/zodiac/cancer' element={<CancerResult />} exact />
        <Route path='/zodiac/leo' element={<LeoResult />} exact />
        <Route path='/zodiac/virgo' element={<VirgoResult />} exact />
        <Route path='/zodiac/libra' element={<LibraResult />} exact />
        <Route path='/zodiac/scorpio' element={<ScorpioResult />} exact />
        <Route path='/zodiac/sagittarius' element={<SagResult />} exact />
        <Route path='/zodiac/capricorn' element={<CapricornResult />} exact />
        <Route path='/zodiac/aquarius' element={<AquaResult />} exact />
        <Route path='/zodiac/pisces' element={<PiscesResult />} exact />
    </Routes>
  </Router>
);
}

export default App;
