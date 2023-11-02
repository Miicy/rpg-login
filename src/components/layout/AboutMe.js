import React, { useEffect } from "react";
import { ReactComponent as Divider } from "../../media/divider.svg";
import text from "../../media/text.json";
import wordFile from "../../media/CV.pdf";
import { useState } from "react";

function AboutMe() {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const scrollToShowAboutMe = 200;
		const aboutMeContainer = document.getElementById("about-me-container");
		if (aboutMeContainer) {
			if (scrollPosition >= scrollToShowAboutMe) {
				aboutMeContainer.style.display = "flex";
			} else {
				aboutMeContainer.style.display = "none";
			}
		}
	}, [scrollPosition]);

	return (
		<div id="about-me-container" className="about-me-container">
			<div className="about-me">
				<Divider className="divider" />
				<div className="about-me-content-container">
					<p className="heading-smaller">ABOUT ME</p>
					<p>{text.text}</p>
					<a href={wordFile} download="Resume.pdf" className="links resume">
						Download Resume
					</a>
				</div>
				<Divider className="divider divider-bottom" />
			</div>
		</div>
	);
}

export default AboutMe;
