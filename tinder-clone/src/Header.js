import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon fontSize="large" className="headerIcon" />
			</IconButton>
			<img
				src={require("./img/Tinder_logo_PNG6.png")}
				alt="logo"
				className="headerLogo"
			/>
			<IconButton>
				<ForumIcon fontSize="large" className="headerIcon" />
			</IconButton>
		</div>
	);
}

export default Header;
