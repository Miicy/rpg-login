import React from "react";
import "./landingPage.css";
import { ReactComponent as Logo } from "../media/logo.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useMediaQuery } from "@mui/material";

function FormLogin() {
	const isScreenSmall = useMediaQuery("(max-width:800px)");
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<div className="friends-form">
			<div className="logo-container">
				<Logo className="logo" />
				<p className="logo-p">"Where Imagination Becomes Adventure"</p>
				<div className="form-container">
					<form className="form" onSubmit={handleSubmit}>
						<h1 className="form-p">Sign in</h1>
						<TextField
							size={isScreenSmall ? "small" : "normal"}
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
							disabled={false}
							InputProps={{
								className: "custom-input", 
							  }}
						/>

						<TextField
							size={isScreenSmall ? "small" : "normal"}
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							disabled={false}
							InputProps={{
								className: "custom-input", 
							  }}
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							className="form-button"
							style={{
								height: isScreenSmall ? "35px" : "50px",
								margin: "20px 0",
								backgroundColor: "black",
							}}
						>
							Sign In
						</Button>
					</form>
					<div className="links">
						<div className="link">
						<p >Forgot password?</p>
						</div>
						<div className="link">
						<p >Don't have an account? Sign Up</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FormLogin;
