"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const JobSeekersContent = () => {
	return (
		<section className="tj-product-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<BootstrapWrapper>
							<div className="tj-product-details-bottom">
								<div className="row">
									<div className="col-xl-12">
										{/* Overview — always visible */}
									<div className="tj-product-details-description js-overview mb-40">
										<p>
											We understand and respect the different needs and
											expectations of companies, and our consultants are
											dedicated to ensuring that you are placed in roles
											that suit your skills and experience.
										</p>
										<p>
											We have employers waiting to hire you!
										</p>
										<p>
											Our strong and long-lasting relationships with
											other recruiters mean you have the best chance of
											finding the job you want. We take the time to
											identify the key requirements of each vacancy.
											Through our candidate assessment process, we match
											the best people to the right roles.
										</p>
										<p>
											If that person happens to be you, we will prepare
											you for interviews and assist with any potential
											visa applications if required.
										</p>
										<p>
											We do not charge fees for our services to
											candidates. Recruitment support is a free service
											for all applicants.
										</p>
									</div>

									{/* Applicant type tabs */}
									<div className="tj-product-details-tab-nav tj-tab">
										<nav>
											<div
												className="nav nav-tabs p-relative tj-product-tab"
												id="jobSeekersTab"
												role="tablist"
											>
												<button
													className="nav-link additional_information_tab active"
													id="nav-tab-australian"
													data-bs-toggle="tab"
													data-bs-target="#nav-australian"
													type="button"
													role="tab"
													aria-controls="nav-australian"
													aria-selected="true"
												>
													Australian Applicants
												</button>
												<button
													className="nav-link reviews_tab"
													id="nav-tab-overseas"
													data-bs-toggle="tab"
													data-bs-target="#nav-overseas"
													type="button"
													role="tab"
													aria-controls="nav-overseas"
													aria-selected="false"
													tabIndex="-1"
												>
													Overseas Applicants
												</button>
											</div>
										</nav>

										<div className="tab-content" id="jobSeekersTabContent">

											{/* Australian Applicants Tab */}
											<div
												className="tab-pane fade active show"
												id="nav-australian"
												role="tabpanel"
												aria-labelledby="nav-tab-australian"
											>
												<div className="tj-product-details-description mt-30">
													<p>
														We have employers waiting to hire you!
													</p>
													<p>
														We receive a large number of vacancies from across
														Australia in the sectors we serve. If you apply for
														a position through us, we will prioritise connecting
														you with employers, subject to your suitability for
														the role.
													</p>
													<p>
														We take the time to understand the key requirements
														of each vacancy and, through our assessment process,
														identify the best candidates. If you are selected,
														we will arrange interviews and provide post-placement
														support.
													</p>
													<p>
														Please contact us by submitting an inquiry below.
													</p>
												</div>
											</div>

											{/* Overseas Applicants Tab */}
											<div
												className="tab-pane fade"
												id="nav-overseas"
												role="tabpanel"
												aria-labelledby="nav-tab-overseas"
											>
												<div className="tj-product-details-description mt-30">
													<p>
														We are a leading recruitment firm that works with
														potential employers, recruitment partners, and
														sponsors to provide job opportunities for overseas
														workers. This includes candidates currently residing
														in Australia on a valid visa, as well as those
														outside Australia seeking opportunities to work in
														their field.
													</p>
													<p>
														We assist applicants in securing sponsored job
														opportunities by representing reputable companies
														with genuine skill shortages.
													</p>
													<p>
														If you are interested in opportunities within your
														area of expertise, you will need to provide evidence
														of your skills and qualifications to meet specific
														job requirements.
													</p>
													<p>
														To view the terms of engagement, please use the
														provided link.
													</p>
													<p>
														Please contact us by submitting an inquiry below.
													</p>
												</div>
											</div>

										</div>
									</div>
									</div>
								</div>
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default JobSeekersContent;
