import React, {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavContainer, NavLogo, NavLinks, NavItem, NavMenu, NavBtn, NavBtnLink, MobileIcon} from "./NavbarElements";
import Logo from '../../images/SterWijzer.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({toggle}) => {
	const [scrollNav, setScrollNav] = useState(false)

	const changeNav = () => {
		if(window.scrollY >= 80) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	},[])

	const toggleHome = () => {
		scroll.scrollToTop()
	}
	
	return (
	<>
		<Nav>
			<NavContainer>
				<NavLink to="/">
				<NavLogo src={Logo}></NavLogo>
				</NavLink> 
			</NavContainer>
		</Nav>
		</>
	);
}







// function Navbar(){
// 	const [state, setState] = useState(false)
	
// 	function handleClick(event){
// 		setState({clicked: !state.clicked})
// 	}


// 	return (
// 	<nav className="NavbarItems">
// 		<h1 className="navbar-logo">DAVAO</h1>
// 		<div className="menu-icon" onClick={handleClick}>
// 		<i className={state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
// 		</div>
// 		<ul className={state.clicked ? 'nav-menu active' : 'nav-menu'}>
// 			{MenuItems.map((item, index) =>{
// 				return(
// 					<li key={index}>
// 						<a className={item.cName} href={item.url}>
// 						{item.title}
// 						</a>	
// 					</li>
// 				)
// 			})}
// 		</ul>
// 		<Button>WAT?</Button>
// 	</nav>
// );
// };

export default Navbar;
