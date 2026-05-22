const EmployerContent = () => {
	return (
		<section className="tj-service-area section-space" style={{ paddingTop: "40px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">

								{/* titleLarge */}
								<h3 className="sec-title text-anim" style={{ fontSize: "24px" }}>
									Recruitment is a time-consuming and complicated process.
								</h3>

								<div className="tj-entry-content">

									{/* Intro */}
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										No time to search but need to find talents? <strong>We to make your worries disappear!</strong>
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
									<ul className="mt-4 wow fadeInUp" data-wow-delay="0.3s" style={{ listStyle: "none", padding: 0, margin: 0 }}>
										<li style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
											<i className="tji-double-check" style={{ fontSize: "18px", color: "var(--tj-color-theme-primary)", marginTop: "3px", flexShrink: 0 }}></i>
											<span style={{ fontFamily: "var(--tj-ff-heading)", fontWeight: 600, color: "var(--tj-color-heading-primary)" }}>Highly competitive rates.</span>
										</li>
										<li style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
											<i className="tji-double-check" style={{ fontSize: "18px", color: "var(--tj-color-theme-primary)", marginTop: "3px", flexShrink: 0 }}></i>
											<span style={{ fontFamily: "var(--tj-ff-heading)", fontWeight: 600, color: "var(--tj-color-heading-primary)" }}>Recruitment fees payable after 3 months of placement (commencement of work), subject to satisfaction with the hire.</span>
										</li>
										<li style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
											<i className="tji-double-check" style={{ fontSize: "18px", color: "var(--tj-color-theme-primary)", marginTop: "3px", flexShrink: 0 }}></i>
											<span style={{ fontFamily: "var(--tj-ff-heading)", fontWeight: 600, color: "var(--tj-color-heading-primary)" }}>Flexibility use company migration agent. If you are new or wants to have a new migration agent, we will recommend those who will provide money back guarantees and superior services to both applicant and company alike.</span>
										</li>
									</ul>

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
