"use client";

import Link from "next/link";

const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site-logo">
			<Link className="logo" href="/">
				<span style={{ fontSize: "24px", fontWeight: "700", letterSpacing: "0.5px" }}>
					TalentBridge
				</span>
			</Link>
		</div>
	);
};

export default Logo;
