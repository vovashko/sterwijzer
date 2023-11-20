import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ResultContainer = styled.div `
width: 100%;
padding: 0 50px 0 50px;
background-color: none;
position: relative;
overflow: hidden;

`

export const ResultWrapper = styled.div `
    display: block;
    box-sizing: border-box;
    padding-left: 100px;
    padding-right: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (min-width: 1200px) {
        padding-left: 160px;
        padding-right: 160px;
    }

    @media screen and (max-width: 700px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`

export const ResultCard = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: 10px;
    border-color: black;
    width: 430px;
    height: 450px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 18px;
    box-shadow: 0 2px 50px 0 rgba(0,0,0,.25);
    
`

export const ResultsIcon = styled.img `
    height: 400px;
    width: 400px;
    margin-bottom: 10px;
`

export const ResultsH1 = styled.h1 `
font-family: Inter;
color: #000;
font-weight: 700;
font-size: 32px;
line-height: 42px;
margin-bottom: 12px;


    @media screen and (max-width: 480px) {
        font-size: 2 rem;
    }
`
export const ResultsProcent = styled.h3 `
font-family: Inter;
color: #000;
font-weight: 700;
font-size: 40px;
line-height: 42px;
margin-top: -30px;


    @media screen and (max-width: 480px) {
        font-size: 2 rem;
    }
`
export const ResultsH2 = styled.h2 `
font-family: 'DM Sans';
font-weight: 500;
font-size: 28px;
line-height: 40px;
color: #C931FF;
`

export const ResultsP = styled.p `
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
text-align: left;
`

export const CardLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

export const ResultsSign = styled.img `
    height: 50px;
    width: 50px;
`