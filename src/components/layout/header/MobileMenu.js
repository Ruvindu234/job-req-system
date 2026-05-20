"use client";
import Link from "next/link";
import { Fragment } from "react";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, handleMobileToggler }) => {
	return (
		<Fragment>
			<div
				className={`body-overlay${isMobileMenuOpen ? " opened" : ""}`}
				onClick={() => handleMobileToggler(false)}
				data-lenis-prevent
			></div>
			<div
				className={`hamburger-area ${isMobileMenuOpen ? " opened" : ""}`}
				data-lenis-prevent
				onMouseLeave={() => handleMobileToggler(false)}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<MobileNavbar />
					<div className="hamburger-socials">
						<ul>
							<li>
								<Link href="https://www.facebook.com/">
									<i className="fa-brands fa-facebook-f"></i>
								</Link>
							</li>
							<li>
								<Link href="https://www.instagram.com/">
									<i className="fa-brands fa-instagram"></i>
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/">
									<i className="fa-brands fa-linkedin-in"></i>
								</Link>
							</li>
							<li>
								<Link href="https://x.com/">
									<i className="fa-brands fa-twitter"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default MobileMenu;
