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
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_top d-flex align-items-center justify-content-between">
						<div className="hamburger_logo">
							<Link
								href="/"
								className="mobile_logo"
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
						</div>
						<div className="hamburger_close">
							<button
								className="hamburger_close_btn hamburgerCloseBtn"
								onClick={() => handleMobileToggler(false)}
							>
								<i className="fa-thin fa-times"></i>
							</button>
						</div>
					</div>
					<MobileNavbar />
					<div className="hamburger-socials">
						<h4 className="hamburger-title">Follow us</h4>
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
