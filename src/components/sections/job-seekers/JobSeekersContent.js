"use client";
import { useState } from "react";

const JobSeekersContent = () => {
	const [activeTab, setActiveTab] = useState("australian");

	const tabBaseStyle = {
		padding: "9px 22px",
		fontSize: "14px",
		fontWeight: 600,
		fontFamily: "var(--tj-ff-heading)",
		border: "2px solid var(--tj-color-theme-primary)",
		borderRadius: "30px",
		cursor: "pointer",
		transition: "all 0.3s ease",
		textAlign: "center",
	};

	const getTabStyle = (name) => ({
		...tabBaseStyle,
		backgroundColor:
			activeTab === name ? "var(--tj-color-theme-primary)" : "transparent",
		color:
			activeTab === name
				? "var(--tj-color-common-white)"
				: "var(--tj-color-theme-primary)",
		boxShadow:
			activeTab === name ? "0 8px 20px rgba(0, 117, 255, 0.25)" : "none",
	});

	return (
		<section className="tj-product-area section-space" style={{ paddingTop: "40px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
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
										<p style={{ color: "#e67e22", fontWeight: 600 }}>
											We do not charge fees for our services to
											candidates. Recruitment support is a free service
											for all applicants.
										</p>
									</div>

									{/* Applicant type tabs */}
									<div className="tj-product-details-tab-nav tj-tab">
										<nav>
											<div
												id="jobSeekersTab"
												role="tablist"
												style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
											>
												<button
													id="nav-tab-australian"
													type="button"
													role="tab"
													aria-controls="nav-australian"
													aria-selected={activeTab === "australian"}
													onClick={() => setActiveTab("australian")}
													style={getTabStyle("australian")}
												>
													Australian Applicants
												</button>
												<button
													id="nav-tab-overseas"
													type="button"
													role="tab"
													aria-controls="nav-overseas"
													aria-selected={activeTab === "overseas"}
													tabIndex={activeTab === "overseas" ? 0 : -1}
													onClick={() => setActiveTab("overseas")}
													style={getTabStyle("overseas")}
												>
													Overseas Applicants
												</button>
											</div>
										</nav>

										<div className="tab-content" id="jobSeekersTabContent">

											{/* Australian Applicants Tab */}
											<div
												className={`tab-pane fade ${activeTab === "australian" ? "active show" : ""}`}
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
												className={`tab-pane fade ${activeTab === "overseas" ? "active show" : ""}`}
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
						</div>
					</div>
				</div>
		</section>
	);
};

export default JobSeekersContent;
