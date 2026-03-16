"use client";

import Link from "next/link";

const FooterLogo = () => {
	return (
		<Link
			href="/"
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: "2px",
				textDecoration: "none",
				transition: "filter 0.3s ease",
			}}
			onMouseEnter={e => {
				e.currentTarget.style.filter =
					"drop-shadow(0 0 8px rgba(0, 117, 255, 0.5))";
			}}
			onMouseLeave={e => {
				e.currentTarget.style.filter = "none";
			}}
		>
			<span
				style={{
					fontSize: "22px",
					fontWeight: "700",
					letterSpacing: "-0.5px",
					color: "var(--tj-color-common-white)",
					fontFamily: "var(--tj-ff-heading)",
				}}
			>
				Talent
			</span>
			<span
				style={{
					fontSize: "22px",
					fontWeight: "700",
					letterSpacing: "-0.5px",
					color: "var(--tj-color-theme-primary)",
					fontFamily: "var(--tj-ff-heading)",
				}}
			>
				Bridge
			</span>
		</Link>
	);
};

export default FooterLogo;
