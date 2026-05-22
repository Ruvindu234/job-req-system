const InterviewGuideContent = () => {
	const headingStyle = {
		fontFamily: "var(--tj-ff-heading)",
		color: "var(--tj-color-heading-primary)",
		marginBottom: "12px",
		marginTop: "32px",
	};

	const checkIcon = {
		fontSize: "16px",
		color: "var(--tj-color-theme-primary)",
		marginTop: "3px",
		flexShrink: 0,
	};

	const placeConnection = [
		"Choose a quiet location.",
		"Make sure your device has quality sound and a working microphone. Test well before and just before the scheduled time.",
		"Be ready to get invited, never be late as you may not be given second chances.",
		"Be ready to answer the phone in case of a connection failure of the Zoom meeting.",
	];

	const interviewAssess = [
		"technical knowledge and relevancy of experience to their business",
		"personality including language skills",
		"expectations from employment in Australia",
		"connections to Australia (friends, family ties)",
	];

	return (
		<section className="tj-service-area section-space" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div className="tj-entry-content">

									<p className="wow fadeInUp" data-wow-delay="0.1s">
										The interview is happening because the prospective employer wishes to know you beyond your Resume. It&apos;s a conversation where they learn about who you are, what you could bring to the role, and how you might fit into their team. It&apos;s your chance to ask questions too!
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Most of the time your interview will be via a Zoom link which we share with you and the employer, set at a pre-agreed time and date.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Place and connection
									</h4>
									<ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
										{placeConnection.map((item, i) => (
											<li key={i} style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
												<i className="tji-double-check" style={checkIcon}></i>
												<span>{item}</span>
											</li>
										))}
									</ul>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										What to wear and presenting yourself
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Wear what you would in person — top to bottom! Depending on your occupation, wear the most appropriate attire (workwear is for trades, a suit for an engineer, etc.).
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Personal grooming is important as most Australian employers do value it. Hair (brushed &amp; neat), Facial Hair (trimmed and shaped), Makeup (natural and professional).
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										What you should know about the employer
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Research the company&apos;s website for what they do and where they are located. If you are given the chance, you should clearly convey your understanding of the organization&apos;s work, why you are interested in the position, and why you would be the ideal candidate for the job.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Interview questions
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										The interview will be 15 minutes. The company will most likely ask you a range of questions and will request you to explain certain practical situations to assess:
									</p>
									<ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
										{interviewAssess.map((item, i) => (
											<li key={i} style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
												<i className="tji-double-check" style={checkIcon}></i>
												<span>{item}</span>
											</li>
										))}
									</ul>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Questions you may be expected to answer can differ depending on the interviewer. Therefore, you should be ready to answer any situational question.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										After interview
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										If successful, you will receive instructions from us about next steps. As per the instructions, you will liaise with a migration agent appointed by the employer.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										If the employer notifies that you are unsuccessful, we will provide feedback to help you grow for your next interview.
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

export default InterviewGuideContent;
