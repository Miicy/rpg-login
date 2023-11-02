import React from "react";
import "../../pages/pages.css";
function Header() {
	function scrollToPosition(yPosition) {
		window.scrollTo({
		  top: yPosition,
		  behavior: "smooth",
		});
	  }
	
	  function handleAboutMeClick() {
		const aboutMeSectionY = 800; 
	
		scrollToPosition(aboutMeSectionY);
	  }

	  function handlePortfolioClick() {
		const aboutMeSectionY = 1800; 
	
		scrollToPosition(aboutMeSectionY);
	  }

	return (
		<div class="header">
			<div class="heading-left-container">
				<p className="heading">Milica Pantelic</p>
				<p className="heading2">Web developer</p>
			</div>
			<div class="heading-right-container">
				<p className="links" onClick={handleAboutMeClick}>
					About me
				</p>
				<p className="links"  onClick={handlePortfolioClick}>Portfolio</p>
			</div>
		</div>
	);
}

export default Header;
