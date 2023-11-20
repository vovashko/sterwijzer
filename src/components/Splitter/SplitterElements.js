import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const SplitterContainer = styled.div`   
    display: flex;
    background: #C931FF;
    text-align: center;
    height: 39px;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1rem;
z-index: 100;
position: sticky;
`;

export const SplitterWrapper = styled.div`
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 24px;
max-width: 1000px;
`

export const SplitterLink = styled(LinkR)`

background: none;
display: flex;
align-items: center;
text-decoration: none;
justify-self: flex-start;
outline: none;
cursor: pointer;
font-family: Inter;
font-weight: 700;
color: #FFFFFF;
text-decoration: none;
font-size: 1rem;

&:hover {
	transition: all 0.2s ease-in-out;
	text-decoration:underline;
}
`