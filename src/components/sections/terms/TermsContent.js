const TermsContent = () => {
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

	const terms = [
		"Only applicants with decision ready visa documents subject to authenticity of material submitted and pass our own technical & language ability tests will proceed.",
		"Our free support is limited to the time you are selected by employer, a migration agent is assigned by your employer and Visa is lodged.",
		"We do not provide free assistance to overseas workers and their families after their visas granted. If required, you may request assistance at any time but at a case-by-case fee.",
		"No Fee Recruitment - Recruitment support is a free service to all applicants.",
		"No obligations – At any given point of time between initial engagement and payment of visa invoice you may receive from your migration agent, you may withdraw from the process. Skills In Motion also will reserve the right to disengage you from the payment of any visa invoice.",
	];

	return (
		<section className="tj-service-area section-space" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div className="tj-entry-content">

									{/* Terms List */}
									<ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px" }}>
										{terms.map((item, i) => (
											<li key={i} style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
												<i className="tji-double-check" style={checkIcon}></i>
												<span>{item}</span>
											</li>
										))}
									</ul>

									{/* CFO Section */}
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										When hiring a Chief Financial Officer (CFO), partnering with a specialised CFO recruiting firm can significantly streamline the process. While general employment agencies might broadly cover accounting and finance roles, specialised CFO recruitment firms offer more relevant expertise in sourcing, vetting, and placing high-calibre executive talent. If your organisation is serious about attracting quality financial leaders, you need to understand what sets top CFO recruitment firms apart.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										1. What makes CFO recruiting firms essential?
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Hiring the right CFO is no small feat. Many businesses struggle with identifying candidates who not only have the required technical skills, but also align with the company&apos;s culture and long-term goals. Specialised CFO recruiters go beyond traditional candidate databases and job boards, leveraging their extensive industry-specific networks, sophisticated sourcing techniques, and deep understanding of executive roles to ensure a perfect placement. Unlike generalists, a CFO recruiter thoroughly understands market conditions, executive salary expectations, and the unique dynamics of CFO recruitment.
									</p>

									<h5 style={{ ...headingStyle, marginTop: "20px" }} className="wow fadeInUp" data-wow-delay="0.1s">
										I. Access to a wider talent pool
									</h5>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										CFO recruitment firms have established networks and databases that give them access to top-tier candidates, many of whom may not be actively seeking new opportunities.
									</p>

									<h5 style={{ ...headingStyle, marginTop: "20px" }} className="wow fadeInUp" data-wow-delay="0.1s">
										II. Industry expertise
									</h5>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										These firms possess a deep understanding of the market and the unique demands of the CFO role. Their specialised knowledge enables them to identify candidates with the expertise to meet current and future business challenges.
									</p>

									<h5 style={{ ...headingStyle, marginTop: "20px" }} className="wow fadeInUp" data-wow-delay="0.1s">
										III. Streamlined hiring process
									</h5>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Time is money, and the longer a key position like CFO remains vacant, the more it impacts your operations. A CFO executive search firm has refined processes that reduce time-to-hire, ensuring you hire a qualified candidate swiftly.
									</p>

									<p className="wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "24px" }}>
										Before selecting your CFO recruiting partner, here&apos;s a quick summary of what makes working with a specialised firm like Richard Lloyd Executive so valuable.
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

export default TermsContent;
