"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const EmployerEnquiry = () => {
	return (
		<section
			id="employer-enquiry"
			className="tj-contact-section"
			style={{ backgroundImage: "url('/images/shapes/contact-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="contact-wrapper">

							{/* ── Left: Info ── */}
							<div className="contact-left-content">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Get in Touch
									</span>
									<h2 className="sec-title text-anim">
										Make an enquiry today
									</h2>
									<div
										className="desc wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<p>
											Whether you need overseas or local talent, our team
											is ready to assist. Fill in the form and we&rsquo;ll
											be in touch shortly.
										</p>
									</div>

									{/* ── Contact Info ── */}
									<div
										className="employer-contact-info wow fadeInUp"
										data-wow-delay="0.4s"
									>
										<div className="contact-text">
											<i className="fa-solid fa-phone"></i>
											<Link href="tel:+61298995868">+61 2989 95868</Link>
										</div>
										<div className="contact-text">
											<i className="fa-solid fa-envelope"></i>
											<Link href="mailto:contact@auz-connect.com.au">
												contact@auz-connect.com.au
											</Link>
										</div>
										<div className="contact-text">
											<i className="fa-sharp fa-solid fa-location-dot"></i>
											Suite 7.01, 12 Century Circuit, Baulkham Hills, NSW 2153
										</div>
									</div>

									<div
										className="contact-button wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<ButtonPrimary
											text={"Contact us"}
											url={"/contact"}
											className={"white-btn"}
										/>
									</div>
								</div>
							</div>

							{/* ── Right: Form ── */}
							<div
								className="contact-form-one wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h3 className="title">Feel free to get in touch with us.</h3>

								<form>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													name="name"
													placeholder="Full Name*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													name="email"
													placeholder="Email Address*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													name="phone"
													placeholder="Contact Number*"
													required
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="file"
													name="file"
													accept=".pdf,.doc,.docx"
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-input input-textarea">
												<textarea
													name="message"
													placeholder="Type your message*"
												/>
											</div>
										</div>
										<div className="submit-button">
											<ButtonPrimary
												text={"Send Enquiry"}
												type="submit"
												className={"white-btn"}
											/>
										</div>
									</div>
								</form>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployerEnquiry;
