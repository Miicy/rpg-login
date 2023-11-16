import "./landingPage.css";
import React from "react";
import { ReactComponent as Friends } from "../media/friends.svg";
import FormLogin from "./FormLogin";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "@mui/material";
import { useGetImages } from "../helpers/useGetImages";
import pink from "../media/pink2.png";
import fire from "../media/fire2.png";

function LandingPage() {
	const isScreenSmall = useMediaQuery("(max-width:850px)");

	const { currentImage, currentImage2 } = useGetImages();
	console.log(currentImage);

	const backgroundImage = isMobile || isScreenSmall ? pink : currentImage;
	const backgroundImage2 = isMobile || isScreenSmall ? pink : currentImage2;

	return (
		<div className="container">
			<div
				className="friends-background"
				style={{
					backgroundImage: `url(${backgroundImage2 ? backgroundImage2 : fire})`,
				}}
			></div>
			<div
				className="friends-background-onTop"
				style={{
					backgroundImage: `url(${backgroundImage})`,
				}}
			></div>
			<FormLogin />
			{!isScreenSmall && (
				<div className="friends-container">
					<Friends className="friends-style" />
				</div>
			)}
		</div>
	);
}

export default LandingPage;
