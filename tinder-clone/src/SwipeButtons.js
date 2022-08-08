import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { IconButton } from "@mui/material";

function SwipeButtons() {
	return (
		<div className="swipeButtons">
			<IconButton className="swipeButtonsRepeat">
				<ReplayIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtonsLeft">
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtonsStar">
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtonsRight">
				<FavoriteIcon fontSize="large" />
			</IconButton>
			<IconButton className="swipeButtonsLightning">
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	);
}

export default SwipeButtons;
