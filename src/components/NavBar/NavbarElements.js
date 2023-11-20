import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll'
import styled from 'styled-components';

export const Nav = styled.nav`
background: none;
background-color: none;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
z-index: 100;
top: 0;
position: sticky;
`;

export const NavLink = styled(Link)`
`;

export const NavLogo = styled.img`
display: flex;
justify-self: flex-start;
cursor: pointer;
`


export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 24px;
max-width: 1000px;
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

`;



export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	
	@media screen and (max-width: 768px) {
		display: none;

	}
`;

export const NavItem = styled.li`

`


export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
	color: #fff;
}

`
