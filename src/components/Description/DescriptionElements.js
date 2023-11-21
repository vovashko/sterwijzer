import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const DescriptionContainer = styled.div`   
    margin-top: 12px;
    padding: 0;
    display: block;
    box-sizing: border-box;
`;

export const DescriptionWrapper = styled.div `

padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
width: 970px;
margin-top: 150px;
@media-screen and (max-width: 1100px) {
    margin-top: 50px;
}

`

export const Heading = styled.h1 `
font-size: 24px;
margin-top: 50px;
margin-bottom: 20px;
font-weight: 1000;
line-height: 1.1;

`

export const Subtitle = styled.p `
    margin-top: 10px;
    max-width: 340px;
    color: #000;
    font-size: 16px;
    line-height: 1.42;
    box-sizing: border-box;

`