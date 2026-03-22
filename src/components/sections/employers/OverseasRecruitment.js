import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const visaOptions = [
	{
		code: "TSS",
		num: "482",
		label: "Temporary Skill Shortage",
		icon: "fa-solid fa-plane-departure",
	},
	{
		code: "ENS",
		num: "186",
		label: "Employer Nomination Scheme",
		icon: "fa-solid fa-building",
	},
	{
		code: "RSMS",
		num: "187",
		label: "Regional Sponsored Migration",
		icon: "fa-solid fa-map-location-dot",
	},
	{
		code: "Training",
		num: "407",
		label: "Training Visa Program",
		icon: "fa-solid fa-graduation-cap",
	},
];

const keyPoints = [
	"Lowest fee guarantee",
	"Access to candidates in Europe, Asia & Middle East",
	"Vast experience as recruiter and migration agents",
	"We manage the whole process for both employer and applicant",
];

const OverseasRecruitment = () => {
	return (
		<section className="tj-about-section-two section-space">
			<div className="container">

				{/* ── Section Heading ── */}
				<div className="row justify-content-center">
					<div className="col-lg-8 text-center">
						<div className="sec-heading sec-heading-centered wow fadeInUp" data-wow-delay="0.1s">
							<span className="sub-title">
								// Overseas Recruitment Service
							</span>
							<h2 className="sec-title text-anim">
								We find the <span>right people</span> for the right jobs!
							</h2>
							<div className="desc">
								<p>
									Auz-connect offer integrated recruitment and migration
									solutions to Australian employers facing skilled shortages,
									sourcing qualified international staff in any eligible
									industry.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* ── Image + Content ── */}
				<div className="row align-items-center g-4 g-xl-5">
					<div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
						<div className="about-images-group-one hover:shine">
							<Image
								src="/new_images/h2-about-1.webp"
								alt="Overseas Recruitment"
								width={399}
								height={532}
								style={{ width: "100%", height: "auto" }}
							/>
						</div>
					</div>

					<div className="col-lg-7 wow fadeInRight" data-wow-delay="0.3s">
						<div className="check-list-one mb-4">
							<ul>
								{keyPoints.map((point, idx) => (
									<li key={idx}>
										<i className="tji-double-check"></i>
										{point}
									</li>
								))}
							</ul>
						</div>
						<div className="employer-quote">
							<i className="fas fa-quote-left employer-quote-mark"></i>
							<p>
								We have extensive databases and relationships with a variety
								of candidates and agencies to find the right people for the
								right jobs. We take the time to make sure all parties get
								what they want.
							</p>
						</div>
						<div className="about-button mt-4">
							<ButtonPrimary
								text={"Make an Enquiry"}
								url={"#employer-enquiry"}
							/>
						</div>
					</div>
				</div>

				{/* ── Visa Cards ── */}
				<div className="row">
					<div className="col-12">
						<div
							className="employer-visa-grid wow fadeInUp"
							data-wow-delay="0.2s"
						>
							{visaOptions.map((visa, idx) => (
								<div key={idx} className="employer-visa-card">
									<div className="visa-icon">
										<i className={visa.icon}></i>
									</div>
									<h5 className="visa-code">{visa.code}</h5>
									<span className="visa-num">({visa.num}) Visa</span>
									<p className="visa-desc">{visa.label}</p>
								</div>
							))}
						</div>
					</div>
				</div>

			</div>
		</section>
	);
};

export default OverseasRecruitment;
