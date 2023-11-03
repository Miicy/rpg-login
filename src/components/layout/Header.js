import React from "react";
import "../../pages/pages.css";
import { Divider } from "@mui/material";
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
		const aboutMeSectionY = 1600; 
	
		scrollToPosition(aboutMeSectionY);
	  }

	  function handlePortfolioContact() {
		const aboutMeSectionY = 2000; 
	
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
				<Divider orientation="vertical" flexItem sx={{border:"0.5px solid black",}}/>
				<p className="links"  onClick={handlePortfolioClick}>Portfolio</p>
				<Divider orientation="vertical" flexItem sx={{border:"0.5px solid black",}}/>
				<p className="links"  onClick={handlePortfolioContact}>Contact</p>
			</div>
		</div>
	);
}

export default Header;
