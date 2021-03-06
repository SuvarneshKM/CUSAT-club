import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Link } from "react-router-dom";
import { COLORS } from "../styles/Constants";
import Logo from "../assets/images/Logo.png";

const Header = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.navBar)}>
				<div className={css(styles.left)}>
					<img src={Logo} alt="Logo" className={css(styles.logoImg)} />
					<span className={css(styles.logoName)}> CUSAT CLUBS </span>
				</div>
				<div className={css(styles.right)}>
					<div className={css(styles.pageNavs)}>
						<Link to="/" className={css(styles.links)}>
							{" "}
							Home
						</Link>
						<Link to="/about" className={css(styles.links)}>
							{" "}
							About
						</Link>
						<Link to="/events" className={css(styles.links)}>
							{" "}
							Events
						</Link>
						<Link to="/team" className={css(styles.links)}>
							{" "}
							Team
						</Link>
						<Link to="/contact" className={css(styles.links)}>
							{" "}
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
const styles = StyleSheet.create({
	root: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 57,
		marginRight: 57,
	},
	navBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginLeft: "auto",
		marginRight: "auto",
		background: COLORS.primary,
		height: 64,
		borderRadius: 20,
		maxWidth: "100%",
	},

	left: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	logoImg: {
		width: 38,
		height: 38,
		marginLeft: 35,
	},
	logoName: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#015546",
		lineHeight: "37px",
		marginLeft: 29,
	},
	right: {
		marginRight: 35,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	links: {
		textDecoration: "none",
		fontSize: 22,
		lineHeight: "30px",
		fontWeight: "bold",
		color: "#1B2F5B",
		marginLeft: 37,
	},
});

export default Header;
