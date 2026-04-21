import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const challenges = [
	{
		num: "01",
		text: "Are you spending too much time looking for and interviewing candidates?",
	},
	{
		num: "02",
		text: "Are you simply not getting what you need with your current arrangement?",
	},
	{
		num: "03",
		text: "Are you having issues finding talent that fits your corporate culture?",
	},
	{
		num: "04",
		text: "Are you paying too much in external or contingent staffing fees?",
	},
];

const LocalRecruitment = () => {
	return (
		<section className="tj-about-section section-space employer-local-section">
			<div className="container">
				<div className="row align-items-center g-4 g-xl-5">

					{/* ── Left: Content ── */}
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
									Our methodologies place significant emphasis on quality
									driven processes to ensure your service requirements are
									expertly matched. We work on a personal level, adapting to
									your needs as they change.
								</p>
							</div>
						</div>

						{/* ── Challenge Steps ── */}
						<div
							className="employer-process-steps wow fadeInUp"
							data-wow-delay="0.4s"
						>
							{challenges.map((item, idx) => (
								<div key={idx} className="employer-process-step">
									<span className="step-num">{item.num}</span>
									<div className="step-content">
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>

						{/* ── Solution Box ── */}
						<div
							className="employer-solution-box wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="solution-icon">
								<i className="fas fa-check-double"></i>
							</div>
							<p>
								Then you have come to the{" "}
								<span>right firm</span> for all your recruitment and staff
								augmentation needs.
							</p>
						</div>

						<div
							className="about-button wow fadeInUp"
							data-wow-delay="0.6s"
						>
							<ButtonPrimary
								text={"Make an Enquiry"}
								url={"#employer-enquiry"}
							/>
						</div>
					</div>

					{/* ── Right: Image ── */}
					<div
						className="col-lg-6 wow fadeInRight"
						data-wow-delay="0.3s"
					>
						<div className="employer-image-wrap">
							<div className="about-images-group-two hover:shine">
								<Image
									src="/new_images/slider-3.webp"
									alt="Local Recruitment"
									width={565}
									height={600}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>
							<div className="employer-local-quote">
								<i className="fas fa-quote-left"></i>
								<p>
									We can find you the local talent that you were looking for
									at a fraction of fees charged by other local recruitment
									agencies.
								</p>
							</div>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default LocalRecruitment;
