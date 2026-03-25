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
									Comprehensive Recruitment &amp; Staffing Solutions for Australian Employers
								</h3>

								<div className="tj-entry-content">

									{/* Two paragraphs */}
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Skills In Motion offers integrated recruitment and migration
										solutions to Australian employers facing skilled shortages,
										sourcing qualified local and international staff across any
										eligible industry. Whether you need temporary, permanent, or
										contract placements, our expert team manages the entire
										process from sourcing to onboarding.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										We have extensive databases and relationships with a variety
										of candidates and agencies to find the right people for the
										right jobs. Our methodologies place significant emphasis on
										quality-driven processes to ensure your service requirements
										are expertly matched. We work on a personal level, adapting
										to your needs as they change.
									</p>

									{/* Service Overview */}
									<div className="tj-check-list">
										<h4 className="text-anim">Service Overview</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Our professional account managers ensure your staffing
											needs are fully met to your complete satisfaction. We
											take the time to make sure all parties get what they
											want — saving you time and money by finding the right
											people for your business.
										</p>
									</div>

									{/* Checklist */}
									<div className="service-check-list mt-4 wow fadeInUp" data-wow-delay="0.3s">
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>Lowest fee guarantee for employer recruitment services.</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Access to candidates across Europe, Asia &amp; the Middle East.</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>Vast experience as recruiters and registered migration agents.</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>We manage the whole process for both employer and applicant.</span>
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
	);
};

export default EmployerContent;
