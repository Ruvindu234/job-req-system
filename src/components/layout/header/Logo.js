"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = ({ headerType, isStickyHeader, isLightHeader }) => {
	return (
		<div className="site-logo">
			<Link
				className="logo"
				href="/"
				style={{
					display: "inline-flex",
					alignItems: "center",
					textDecoration: "none",
					transition: "transform 0.3s ease, filter 0.3s ease",
				}}
				onMouseEnter={e => {
					e.currentTarget.style.transform = "scale(1.05)";
					e.currentTarget.style.filter =
						"drop-shadow(0 0 8px rgba(0, 117, 255, 0.5))";
				}}
				onMouseLeave={e => {
					e.currentTarget.style.transform = "scale(1)";
					e.currentTarget.style.filter = "none";
				}}
			>
				<Image
					src="/new_images/logo.jpeg"
					alt="Logo"
					width={160}
					height={50}
					style={{ objectFit: "contain" }}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
