import styled from 'styled-components'

export const HeroContainer = styled.div`   
    width: 100%;
    background-color: none;
    position: relative;
    height: 300px;
    overflow: hidden;

`;

export const HeroBg = styled.div`
justify-items: center;
display: grid;
margin-left: auto;
margin-right: auto;
`;

export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
`
export const HeroContent = styled.div`
padding-right: 25px;
    padding-left: 25px;
    margin-right: auto;
    margin-left: auto;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
top: -25px;
height: 100%;
`


export const HeroH2 = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 1.414rem;
line-height: 80px;
text-align: center;
color: #FFFFFF;
`
export const HeroP = styled.p`
    z-index: 10;
    font-size: 52px;
    color: #fff;
    font-weight: 700;
    text-shadow: 1px 1px 2px black;
    display: flex;
justify-self: flex-start;
`


// * @media screen and (max-width: 1350px) {
    
//     font-size: 50px;
// };


// @media screen and (max-width: 1050px) {
//     margin-top: 150px;
//     font-size: 40px;
// };

// @media screen and (max-width: 750px) {
//     margin-top: 50px;
//     font-size: 30px;
// } 