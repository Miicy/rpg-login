import React from "react";
import VideoMicy from "../components/common/VideoMicy.js";
import Header from "../components/layout/Header.js";

function Home() {
	return (
		<div className="overlay">
			<div className="content">
                <Header />
				<VideoMicy />
			</div>
            <div className="floor"></div>
		</div>
	);
}

export default Home;
