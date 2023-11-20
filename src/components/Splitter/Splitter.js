import React, {useState, useEffect} from "react"
import {animateScroll as scroll} from 'react-scroll'
import {SplitterContainer, SplitterLink, SplitterWrapper} from "./SplitterElements"



const Splitter = ({toggle, pageLink, title}) => {
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
            <SplitterContainer>
				<SplitterWrapper>
				<SplitterLink to={pageLink}>{title}</SplitterLink>
				</SplitterWrapper>
                
            </SplitterContainer>
    )}

export default Splitter