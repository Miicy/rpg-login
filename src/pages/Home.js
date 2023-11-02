import React from "react";
import VideoMicy from "../components/common/VideoMicy.js";
import Header from "../components/layout/Header.js";
import AboutMe from "../components/layout/AboutMe.js";
import Portfolio from "../components/layout/Portfolio.js";
import Footer from "../components/layout/Footer.js";

function Home() {
	return (
		<div>
			<div className="overlay">
				<div className="content">
					<Header />
					<VideoMicy />
				</div>
				<div className="floor"></div>
			</div>
			<div className="overlay-page">
				<AboutMe />
				<Portfolio />
			</div>
			<Footer />
		</div>
	);
}

export default Home;
