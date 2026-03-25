import Image from "next/image";

const EmployerContent = () => {
	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">

								{/* Hero Image */}
								<div className="tj-post-thumb hover:shine wow fadeInUp" data-wow-delay="0.1s">
									<Image
										src="/images/service/tj-service-1.webp"
										alt="Employer Recruitment"
										width={870}
										height={498}
										style={{ height: "auto", width: "100%" }}
									/>
								</div>

								{/* titleLarge */}
								<h3 className="sec-title text-anim">
									Recruitment is a time-consuming and complex process.
								</h3>

								<div className="tj-entry-content">

									{/* Intro */}
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										No time to search but need to find talent? <strong>We are here to make your worries disappear!</strong>
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.2s">
										Skills In Motion offers integrated recruitment solutions to
										Australian employers facing skilled shortages in their
										industries, by providing both skilled overseas staff and
										locally sourced talent. Our team of experts can assist
										employers with readily available skilled candidates across
										various sectors, or we will search for the right candidate
										based on your specific requirements, including cultural fit.
									</p>

									{/* We Offer */}
									<div className="tj-check-list">
										<h4 className="text-anim">We Offer</h4>
									</div>
									<div className="service-check-list mt-4 wow fadeInUp" data-wow-delay="0.3s">
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>Highly competitive rates.</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Recruitment fees payable after 3 months of placement (commencement of work), subject to satisfaction with the hire.</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Flexibility to use your company&apos;s migration agent. If you are new or wish to change your migration agent, we can recommend trusted professionals who provide money-back guarantees and high-quality services to both applicants and companies.</span>
											</li>
										</ul>
									</div>

									{/* Track Record */}
									<p className="wow fadeInUp" data-wow-delay="0.4s">
										We have an impressive track record of recruiting a wide
										range of personnel across Automotive, Manufacturing,
										Engineering, Construction, and Hospitality industries.
										Whether you require a local candidate or a specialist worker
										from overseas, we have the reach and expertise to find the
										right candidate for your vacancy.
									</p>

									{/* CTA text */}
									<p className="wow fadeInUp" data-wow-delay="0.5s">
										To learn more and access our applicant database, please send us an inquiry.
									</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployerContent;
