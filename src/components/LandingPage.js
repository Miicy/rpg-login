import "./landingPage.css";
import React from "react";
import { ReactComponent as Friends } from "../media/friends.svg";
import FormLogin from "./FormLogin";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "@mui/material";
import { useGetImages } from "./useGetImages";
import pink from "../media/pink2.png";

function LandingPage() {
	const isScreenSmall = useMediaQuery("(max-width:850px)");

	const { currentImage } = useGetImages();

	const backgroundImage = isMobile || isScreenSmall ? pink : currentImage;

	return (
		<div className="container">
			<div
				className="friends-background"
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
