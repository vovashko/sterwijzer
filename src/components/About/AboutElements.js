import styled from 'styled-components'

export const AboutContainer = styled.div `
width: 100%;
padding: 0 50px 0 50px;
background-color: none;
position: relative;
overflow: hidden;

`

export const AboutWrapper = styled.div `
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

export const Heading = styled.h1 `
color: #000;
text-align: left;
font-weight: 700;
font-size: 32px;
line-height: 42px;
margin-bottom: 12px;

@media-screen and (max-width: 720px){
    font-size: 24px;
}
`

export const Content = styled.p `
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 30px;
text-align: left;
`