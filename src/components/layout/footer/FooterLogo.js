"use client";

import Link from "next/link";
import Image from "next/image";

const FooterLogo = () => {
	return (
		<Link
			href="/"
			style={{
				display: "block",
				width: "100%",
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
			<Image
				src="/logo_footer.jpeg"
				alt="Logo"
				width={600}
				height={220}
				sizes="100vw"
				style={{ width: "100%", height: "auto", objectFit: "contain" }}
			/>
		</Link>
	);
};

export default FooterLogo;
