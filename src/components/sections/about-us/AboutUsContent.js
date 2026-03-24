import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const AboutUsContent = () => {
	return (
		<>
			{/* Vision & Mission */}
			<section className="tj-about-info section-space">
				<div className="container">
					<div className="row rg-30 justify-content-between">
						<div className="col-lg-6 col-md-12">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Our Vision
								</span>
								<h2 className="sec-title text-anim">
									Employer&apos;s preferred recruitment agency of choice
								</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="desc wow fadeInUp" data-wow-delay="0.3s">
								<p>
									Our vision is to become the employer&apos;s preferred
									recruitment agency of choice, based on the extent and quality
									of our services. We also endeavor to be the preferred platform
									for candidates to discover and pursue exciting careers with
									their ideal organizations.
								</p>
							</div>
						</div>
					</div>

					<div className="row rg-30 justify-content-between mt-60">
						<div className="col-lg-6 col-md-12">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									// Our Mission
								</span>
								<h2 className="sec-title text-anim">
									Preferred and trusted recruitment partner
								</h2>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="desc wow fadeInUp" data-wow-delay="0.3s">
								<p>
									Our mission is to be the preferred and trusted recruitment
									partner for both our clients and candidates. To achieve this,
									we are committed to providing excellent customer service,
									quality staffing, and competitive pricing. We will continue to
									work in close consultation with our clients to ensure that
									their staffing needs are fully met to their complete
									satisfaction.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Company Overview */}
			<section className="tj-about-section-two section-space" style={{ background: "var(--tj-color-grey-1, #f8f8f8)" }}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="about-wrapper" style={{ flexDirection: "column", gap: "40px" }}>
								<div className="about-content-two" style={{ maxWidth: "100%" }}>
									<div className="sec-heading style-2">
										<span
											className="sub-title wow fadeInUp"
											data-wow-delay="0.1s"
										>
											// One-Stop Solution for Local and Overseas Talent
										</span>
										<h2 className="sec-title text-anim">
											Skills In Motion — Expert Recruiters Across Industries
										</h2>
									</div>
								</div>

								<div className="row rg-30">
									<div className="col-lg-6 col-md-12">
										<div className="desc wow fadeInUp" data-wow-delay="0.2s">
											<p>
												Skills In Motion is a recruitment company that
												specializes in a number of diverse industries and areas.
												Whether you are looking for a new team member or your
												next job opportunity, our expert recruiters operate
												across trades and technical occupations.
											</p>
											<p>
												We specialize in deploying only the best professionals
												and skilled tradespeople to meet the needs of companies.
											</p>
											<p>
												We have qualified, skilled, and experienced professionals
												both within and outside Australia who are actively
												seeking work opportunities across the country.
											</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="desc wow fadeInUp" data-wow-delay="0.3s">
											<p>
												Over the years, we have served numerous companies in
												Australia and New Zealand by sourcing talented and
												suitable local and overseas workers. This is a new
												venture that brings previously overseas-managed
												operations back to Australia, combining them to offer
												both local and international talent from a single source.
											</p>
											<p>
												Our professional recruitment service saves you time and
												money by finding the right people for your business. As
												your dedicated recruitment partner, it is important to us
												that you get the right staff who fit your business
												requirements. Our professional account managers will
												ensure your needs are fulfilled to your satisfaction.
											</p>
											<p>
												Skills In Motion is connected and associated with several
												recruitment and migration firms operating within
												Australia. We use an overseas back-office team to prepare
												eligible candidates with decision-ready applications.
											</p>
										</div>
										<div className="about-button wow fadeInUp mt-30" data-wow-delay="0.5s">
											<ButtonPrimary text={"Get in Touch"} url={"/contact"} />
										</div>
									</div>
								</div>

								{/* Key Points */}
								<div className="row rg-20 wow fadeInUp" data-wow-delay="0.4s">
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="check-list-one">
											<ul>
												<li>
													<i className="tji-double-check"></i>Local &amp; Overseas Talent
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="check-list-one">
											<ul>
												<li>
													<i className="tji-double-check"></i>Trades &amp; Technical Roles
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="check-list-one">
											<ul>
												<li>
													<i className="tji-double-check"></i>Australia &amp; New Zealand
												</li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6">
										<div className="check-list-one">
											<ul>
												<li>
													<i className="tji-double-check"></i>Decision-Ready Applications
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUsContent;
