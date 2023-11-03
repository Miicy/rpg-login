import React, { useEffect, useState } from "react";
import itemData from "../../media/portfolio.json";
import templateData from "../../media/templates.json";
import ItemContainer from "../common/ItemContainer";

function Portfolio() {
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
		const scrollToShowAboutMe = 1200;
		const aboutMeContainer = document.getElementById("portfolio-container");
		if (aboutMeContainer) {
			if (scrollPosition >= scrollToShowAboutMe) {
				aboutMeContainer.style.display = "flex";
			} else {
				aboutMeContainer.style.display = "none";
			}
		}
	}, [scrollPosition]);
	// console.log(itemData, templateData);
	return (
		<div className="portfolio" id="portfolio-container">
			<div className="heading-smaller"> - RECENT WORK -</div>
			<div className="inner-portfolio">
				{itemData.items.map((item, index) => (
					<ItemContainer key={index} item={item} />
				))}
			</div>
			<div className="heading-smaller"> - PAGE TEMPLATES -</div>
			<div className="inner-portfolio">
				{templateData.templates.map((template, index) => (
					<ItemContainer key={index} template={template} />
				))}
			</div>
		</div>
	);
}

export default Portfolio;
