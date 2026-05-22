import Link from "next/link";

const SkillsAssessmentContent = () => {
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

	const noteStyle = {
		fontSize: "14px",
		opacity: 0.85,
		marginBottom: "10px",
	};

	const whoWillAssist = [
		"Usually, applicants must hold or have commenced skills assessments before we introduce them to employers.",
		"Skills assessment can be managed by yourself or using an agent that you know, or we can recommend an agent.",
		"If you need us to recommend an agent, please let us know.",
	];

	const costRows = [
		{ label: "1st Stage – Employment Verification", amount: "$ 1,120.00" },
		{ label: "2nd Stage – Technical Interview", amount: "$ 2,000.00" },
		{ label: "Migration Agent fees", amount: "$ 800.00" },
	];

	const cellStyle = {
		border: "1px solid var(--tj-color-border-1, #e5e5e5)",
		padding: "12px 16px",
	};

	return (
		<section className="tj-service-area section-space" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div className="tj-entry-content">

									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Holders of certain passports are required to have a positive skills assessment to be eligible to apply for a 482 visa. Please refer to{" "}
										<Link
											href="https://www.tradesrecognitionaustralia.gov.au/osap-nominated-occupations-countries-and-sars"
											target="_blank"
											style={{ color: "var(--tj-color-theme-primary)", textDecoration: "underline" }}
										>
											Trades Recognition Australia
										</Link>{" "}
										for the list of nominated occupations, countries and SARs.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Who will assist
									</h4>
									<ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
										{whoWillAssist.map((item, i) => (
											<li key={i} style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
												<i className="tji-double-check" style={checkIcon}></i>
												<span>{item}</span>
											</li>
										))}
									</ul>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Total cost of processing skills assessment and terms with recommended migration agent
									</h4>
									<div className="wow fadeInUp" data-wow-delay="0.1s" style={{ overflowX: "auto" }}>
										<table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
											<tbody>
												{costRows.map((row, i) => (
													<tr key={i}>
														<td style={cellStyle}>{row.label}</td>
														<td style={{ ...cellStyle, whiteSpace: "nowrap", fontWeight: 600 }}>{row.amount}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>

									<ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
										<li style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
											<i className="tji-double-check" style={checkIcon}></i>
											<span>Pay A$1,520 for skills assessment 1st stage — at commencement.</span>
										</li>
										<li style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
											<i className="tji-double-check" style={checkIcon}></i>
											<span>Pay A$2,400 for skills assessment 2nd stage — approximately 12 weeks after the initial payment.</span>
										</li>
									</ul>

									<h5 style={{ ...headingStyle, marginTop: "20px" }} className="wow fadeInUp" data-wow-delay="0.1s">
										Important notes
									</h5>
									<p style={noteStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										* In case the 1st stage of the application does not proceed, we will refund $1,120. We will not refund the partial payment of our fees ($400) after we commence work.
									</p>
									<p style={noteStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										** If you do not pass stage 1 or stage 2 of the skills assessment, or withdraw from the 2nd stage — no refunds are available.
									</p>
									<p style={noteStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										*** If you fail the stage 1 Document Review, a reassessment can be done once at a cost of $450. No additional agent fees apply.
									</p>
									<p style={noteStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										*** If you fail the stage 2 Technical Interview, a reassessment can be done once at a cost of $1,000. No additional agent fees apply.
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

export default SkillsAssessmentContent;
