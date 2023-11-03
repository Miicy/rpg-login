import { Divider } from "@mui/material";
import React from "react";

function Footer() {
	return (
		<div className="footer">
			<div className="inner-footer">
				<p className="links">Git</p>
				<Divider  orientation="vertical" flexItem sx={{border:"0.5px solid black",}}/>
				<p className="links">Discord</p>
				<Divider orientation="vertical" flexItem sx={{border:"0.5px solid black",}}/>
				<p className="links">Phone</p>
				<Divider orientation="vertical" flexItem sx={{border:"0.5px solid black",}}/>
				<p className="links">Gmail</p>
			</div>
		</div>
	);
}

export default Footer;
