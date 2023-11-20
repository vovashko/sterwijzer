import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ValuesContainer = styled.div `
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`

export const ValuesWrapper = styled.div `
max-width: 1000px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
}
`

export const ValuesCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    padding 30px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        color: #C931FF;
    }
`

export const ValuesIcon = styled.img `
    height: 50px;
    width: 50px;
    
    transition: fill 0.3s ease;

  &:hover {
    fill: #C931FF;
  }
    
`

export const ValuesH1 = styled.h1 `
font-family: 'DM Sans';
color: #C931FF;
font-weight: 700;
font-size: 32px;
line-height: 42px;
margin-bottom: 8px;

    @media screen and (max-width: 480px) {
        font-size: 2 rem;
    }
`
export const ValuesH2 = styled.h2 `
font-family: 'DM Sans';
font-weight: 500;
font-size: 28px;
line-height: 40px;
    `

export const ValuesP = styled.p `
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
`

export const ModalContainer = styled.div `
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
padding: 20px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
max-width: 80%;
width: 800px; 
z-index: 1000;
`

export const ModalContent = styled.div `
font-family: 'Avenir';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
`

export const CloseButton = styled.button `
background-color: #C931FF;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #A328D6;
  }
`

export const CardLink = styled(Link)`
    text-decoration: none;
    color: #000;
`