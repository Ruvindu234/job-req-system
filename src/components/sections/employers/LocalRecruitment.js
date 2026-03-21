import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const challenges = [
	"Are you spending too much time looking for and interviewing candidates?",
	"Are you simply not getting what you need with your current arrangement?",
	"Are you having issues finding talent that fits your corporate culture?",
	"Are you paying too much in external/contingent staffing fees?",
];

const LocalRecruitment = () => {
	return (
		<section className="tj-about-section section-space employer-local-section">
			<div className="container">
				<div className="row align-items-center g-5">
					<div className="col-lg-6">
						<div className="sec-heading style-2">
							<span
								className="sub-title wow fadeInUp"
								data-wow-delay="0.1s"
							>
								// Local Recruitment Service
							</span>
							<h2 className="sec-title text-anim">
								Strategic <span>local staffing</span> solutions for your needs
							</h2>
							<div
								className="desc wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<p>
									Auz-connect provides a strategic approach to recruitment and
									our flexibility allows us to work on a very personal level
									adapting to your needs as they change. Our methodologies place
									significant emphasis on quality driven processes to ensure that
									your service requirements are expertly matched and managed.
								</p>
							</div>
						</div>

						<div
							className="employer-challenges wow fadeInUp"
							data-wow-delay="0.4s"
						>
							<h5 className="employer-challenges-title">
								Are you facing these challenges?
							</h5>
							<ul className="employer-challenge-list">
								{challenges.map((challenge, idx) => (
									<li key={idx}>
										<span className="challenge-icon">
											<i className="fas fa-circle-question"></i>
										</span>
										<span>{challenge}</span>
									</li>
								))}
							</ul>
							<p className="employer-solution-text">
								Then you have come to the right firm for all your recruitment
								and staff augmentation needs.
							</p>
						</div>

						<div
							className="about-button wow fadeInUp"
							data-wow-delay="0.5s"
							style={{ marginTop: "35px" }}
						>
							<ButtonPrimary
								text={"Make an Enquiry"}
								url={"#employer-enquiry"}
							/>
						</div>
					</div>

					<div
						className="col-lg-6 wow fadeInRight"
						data-wow-delay="0.3s"
					>
						<div className="about-images-group-two hover:shine">
							<Image
								src="/new_images/slider-3.webp"
								alt="Local Recruitment"
								width={565}
								height={600}
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
						<div
							className="employer-local-quote wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<i className="fas fa-quote-left"></i>
							<p>
								We can find you the local talent that you were looking for at a
								fraction of fees charged by other local recruitment agencies.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LocalRecruitment;
