import Accordion from "@/components/shared/accordion/Accordion";

const Faq2 = () => {
	return (
		<section className="h7-faq section-space">
			<div className="container">
				<div className="row mb-40">
					<div className="col-12 text-center">
						<span className="sub-title wow fadeInUp" data-wow-delay="0.1s" style={{ backgroundColor: "#0075ff", padding: "3px 10px", borderRadius: "8px", color: "#ffffff" }}>FAQ</span>
						<h2 className="sec-title text-anim wow fadeInUp" data-wow-delay="0.2s">Frequently asked questions</h2>
					</div>
				</div>
				<div className="row flex-column-reverse flex-lg-row">
					<div className="col-12  col-lg-8">
						<Accordion>
							<div className="tj-faq ">
								<div
									className="accordion tj-faq-style h7-faq-style"
									id="accordionExample"
								>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												<span>01.</span> Does Skills In Motion provide visa services?
											</button>
										</h2>
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													No. Your employer will decide which migration agent or service provider they will use to lodge the visa application, including yours.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												<span>02.</span> How long does it take to be selected after completing my documents?
											</button>
										</h2>
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													We cannot provide an exact timeline. The selection process varies depending on factors such as your occupation, skill level, and English proficiency.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
												<span>03.</span> Can I apply with my family?
											</button>
										</h2>
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													This depends on the type of visa and employer requirements. In many cases, family members can be included, but it is best to confirm with your migration agent or employer.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												<span>04.</span> How much money do I need to immigrate to Australia?
											</button>
										</h2>
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													The cost varies depending on the visa type, application fees, medical checks, and other requirements. Your migration agent or employer will provide a detailed breakdown based on your situation.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												<span>05.</span> What is the process of applying for skilled migration to Australia?
											</button>
										</h2>
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>The process typically includes:</p>
												<ul>
													<li>Assessing your experience, technical skills, English proficiency, and ability to provide required documentation</li>
													<li>Obtaining a skills assessment (if required)</li>
													<li>Searching for job opportunities once your documents are complete</li>
													<li>Attending interviews and selection processes</li>
													<li>Appointment of a migration agent by the employer</li>
													<li>Payment of visa fees and submission of your visa application</li>
													<li>Completing medical and character checks</li>
													<li>Receiving your visa grant</li>
													<li>Contacting your migration agent, employer, or Skills In Motion for further guidance</li>
												</ul>
											</div>
										</div>
									</div>
																</div>
							</div>
						</Accordion>
					</div>
					<div className="col-12  col-lg-4">
						<div className="faq-banner">
							<img src="/new_images/h2-about-1.webp" alt="" />

							<div className="sec-heading h9-section-heading style-4">
								<h4 className="sec-title text-anim">
									Questions and answers
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
