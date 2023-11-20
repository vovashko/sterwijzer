import React, {useState, useEffect} from "react"
import {animateScroll as scroll} from 'react-scroll'
import {DescriptionContainer, Heading, DescriptionWrapper, Subtitle} from "./DescriptionElements"



const Description = ({toggle, pageLink, title}) => {
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
            <DescriptionContainer>
                <DescriptionWrapper>
					<Heading>Ga goed voorbereid stemmen</Heading>
					<Subtitle>Maak je geen zorgen want de sterren hebben al voor je beslist.</Subtitle>
				</DescriptionWrapper>
            </DescriptionContainer>
    )}

export default Description