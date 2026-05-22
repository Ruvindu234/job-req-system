"use client";

import Link from "next/link";

const FooterLogo = () => {
	return (
		<Link
			href="/"
			style={{
				display: "inline-flex",
				alignItems: "baseline",
				gap: "2px",
				textDecoration: "none",
				transition: "filter 0.3s ease",
			}}
			aria-label="Home"
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
					fontSize: "28px",
					fontWeight: "800",
					letterSpacing: "-0.5px",
					color: "var(--tj-color-common-white)",
					fontFamily: "var(--tj-ff-heading)",
				}}
			>
				SKILLS
			</span>
			<span
				style={{
					fontSize: "20px",
					fontWeight: "600",
					color: "var(--tj-color-theme-primary)",
					fontFamily: "var(--tj-ff-heading)",
				}}
			>
				in
			</span>
			<span
				style={{
					fontSize: "28px",
					fontWeight: "800",
					letterSpacing: "-0.5px",
					color: "var(--tj-color-theme-primary)",
					fontFamily: "var(--tj-ff-heading)",
				}}
			>
				MOTION
			</span>
		</Link>
	);
};

export default FooterLogo;
