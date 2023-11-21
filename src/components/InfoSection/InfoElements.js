import styled from 'styled-components'
import { Link} from 'react-router-dom'

export const InfoContainer = styled.div `
    width: 50%;
    margin-left: auto;
    margin-bottom: -10%;
    margin-top: -20%;
    margin-right: 20px;
    background-color: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 50px 0 rgba(0,0,0,.25);
    display: flex;
    position: relative;
    flex-direction: column;
`

export const InfoWrapper = styled.div `

display: block;
box-sizing: border-box;
padding-left: 20px;
padding-right: 20px;
text-align: center;
    
`

export const Heading = styled.h1 `
font-size: 38px;
margin-top: 50px;
margin-bottom: 20px;
font-weight: 800;
line-height: 1.1;
padding-left: 10px;
font-family: Arial;

@media-screen and (max-width: 720px){
    font-size: 24px;
}
`

export const Subtitle = styled.p `
margin-bottom: 10px;
font-size: 16px;
color: #000;
line-height: 1.42;
padding-left: 10px;
`

export const BtnWrap = styled.div `
display: flex;
justify-content: flex-start;
padding: 10px 12px 20px 10px;

`
export const BtnLink = styled(Link)`
    border-radius: 18px;
    color: #FFF;
    font-weight: 700;
    display: block;
    text-decoration: none;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    cursor: pointer;
    background-color: #C931FF;
    font-size: 24px;
    padding: 15px 25px;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    position: relative;
    

&:hover {
	transition: opacity .15s;
	background-color: #AC27DA;
}
`