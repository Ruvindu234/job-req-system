import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const visaOptions = [
	{ code: "TSS", num: "482", icon: "fa-solid fa-plane-departure" },
	{ code: "ENS", num: "186", icon: "fa-solid fa-building" },
	{ code: "RSMS", num: "187", icon: "fa-solid fa-map-location-dot" },
	{ code: "Training", num: "407", icon: "fa-solid fa-graduation-cap" },
];

const keyPoints = [
	"Lowest fee guarantee",
	"Access to candidates in Europe, Asia & Middle East",
	"Vast experience as recruiter and migration agents",
	"We manage whole process for employer and applicant",
];

const OverseasRecruitment = () => {
	return (
		<section className="tj-about-section-two section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="about-wrapper">
							<div className="about-images-group-one hover:shine wow fadeInUp">
								<Image
									src="/new_images/h2-about-1.webp"
									alt="Overseas Recruitment"
									width={399}
									height={532}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>

							<div className="about-content-two">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Overseas Recruitment Service
									</span>
									<h2 className="sec-title text-anim">
										We find the <span>right people</span> for the right jobs!
									</h2>
									<div
										className="desc wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<p>
											Auz-connect offer integrated recruitment and migration
											solutions to Australian employers facing skilled shortages
											in their industry with skilled overseas staff. Our team of
											experts can assist Employers with any employer sponsored
											visa, in any eligible industry and find the skilled
											candidates that fit the culture.
										</p>
									</div>
									<div
										className="about-feature-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<div className="feature-box">
											<div className="feature-left">
												<div className="check-list-one">
													<ul>
														{keyPoints.map((point, idx) => (
															<li key={idx}>
																<i className="tji-double-check"></i>
																{point}
															</li>
														))}
													</ul>
												</div>
												<div className="about-button">
													<ButtonPrimary
														text={"Make an Enquiry"}
														url={"#employer-enquiry"}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Visa Options */}
				<div className="row">
					<div className="col-12">
						<div
							className="employer-visa-cards wow fadeInUp"
							data-wow-delay="0.2s"
						>
							{visaOptions.map((visa, idx) => (
								<div key={idx} className="employer-visa-card">
									<div className="visa-icon">
										<i className={visa.icon}></i>
									</div>
									<div className="visa-info">
										<h5>{visa.code}</h5>
										<span>({visa.num}) Visa</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Quote */}
				<div className="row">
					<div className="col-12">
						<div
							className="employer-quote wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<i className="fas fa-quote-left employer-quote-icon"></i>
							<p>
								We have extensive databases and relationships with a variety of
								candidates and agencies to find the right people for the right
								jobs. We take the time to make sure all parties get what they
								want.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OverseasRecruitment;
