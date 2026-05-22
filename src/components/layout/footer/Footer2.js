import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";
import FooterLogo from "./FooterLogo";

const Footer2 = () => {
	return (
		<footer className="tj-footer-area footer-2 fix">
			<div className="footer-top-area">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-1 footer-info">
								<div className="footer-logo">
									<FooterLogo />
								</div>
								<p className="desc">
									Our mission is to empowers businesses off our all size too
									thrive in an businesses ever changing marketplaces.
								</p>
								<div className="footer-social">
									<h5 className="title">Follow Us:</h5>
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
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-2 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Our offices</h4>
								</div>
								<div className="infos-item">
									<span>Headquarters - USA</span>
									<p>993 Renner Burg, West Rond, MT 94251-030</p>
									<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
								</div>
								<div className="infos-item">
									<span>Operations - Canada</span>
									<p>Suite 452 8082 Boner Parge, Elviraton, CA 48998</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Resources</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/resources/interview-guide">Your Interview Toolkit</Link>
										</li>
										<li>
											<Link href="/resources/skills-assessment">Skills Assessment Info Sheet</Link>
										</li>
										<li>
											<Link href="/resources/subclass-482-visa">Subclass 482 Visa Info Sheet</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-4 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Pages</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/">Home</Link>
										</li>
										<li>
											<Link href="/about-us">About Us</Link>
										</li>
										<li>
											<Link href="/employers">Employers</Link>
										</li>
										<li>
											<Link href="/job-seekers">Job Seekers</Link>
										</li>
										<li>
											<Link href="/our-sectors">Our Sectors</Link>
										</li>
										<li>
											<Link href="/resources">Resources</Link>
										</li>
										<li>
											<Link href="/contact">Contact</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area-2">
				<div className="container">
					<div className="row line">
						<div className="col-xl-4"></div>
						<div className="col-xl-8">
							<div className="copyright-2">
								<div className="copyright-content-area">
									<div className="copyright-text">
										<p>
											© 2025{" "}
											<Link href="/" target="_blank">
												{" "}
												TalentBridge{" "}
											</Link>{" "}
											All right reserved.
										</p>
									</div>
									<div className="copyright-menu">
										<ul>
											<li>
												<Link href="/contact">Policy & privacy</Link>
											</li>
											<li>
												<Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer2;
