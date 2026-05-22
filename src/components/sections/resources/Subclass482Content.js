const Subclass482Content = () => {
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

	const cellStyle = {
		border: "1px solid var(--tj-color-border-1, #e5e5e5)",
		padding: "12px 16px",
	};

	const amountCell = {
		...cellStyle,
		whiteSpace: "nowrap",
		fontWeight: 600,
	};

	const generalInfo = [
		{ label: "Term of contract", value: "Up to 4 years (usually 3 years)" },
		{ label: "Minimum weekly salary", value: "A$1,215 (or above) after tax" },
		{ label: "Weekly expenses", value: "A$700 (a high estimate for a reasonable person)" },
		{ label: "Potential monthly savings", value: "A$2,000" },
	];

	const visaCostRows = [
		{ label: "Visa Application Fees", amount: "$ 3,210.00" },
		{ label: "DHA Processing Fees", amount: "$ 43.61" },
		{ label: "Migration Agent Fees", amount: "$ 5,000.00" },
	];

	const familyCostRows = [
		{ label: "Visa Application Fees (Spouse + each child over 18 years)", amount: "$ 3,210.00 + 43.61" },
		{ label: "Visa Application Fees (each child under 18 years)", amount: "$ 805.00 + 10.92" },
		{ label: "Migration Agent Fees — Spouse", amount: "$ 1,000.00" },
		{ label: "Migration Agent Fees — Children (each)", amount: "$ 500.00" },
	];

	const whoPays = [
		"Usually nominees (YOU) pay for their own visa.",
		"The migration agent assisting you will advise on the applicable fees and terms of payment before they commence.",
		"Below are the maximum fees they are allowed to charge.",
	];

	const refunds = [
		"We will ensure a refund of the visa application fees plus any agent fees paid for the visa application in full if the application is refused or withdrawn due to the nomination being refused.",
		"There will be no refunds for refusals or withdrawals due to medical or character grounds, or if you have submitted documents that the immigration department considers fake or bogus.",
		"If the lodged application is withdrawn at your request, there will be no refund under any circumstance.",
	];

	const relocation = [
		"Skills in Motion will not promise or assist you with airport pickup, finding accommodation, setting up tax files, or opening bank accounts.",
		"However, Skills in Motion will discuss these requirements with you and the employer at the time of the selection process and provide clear advice on what to expect before you sign an employment contract with the employer.",
	];

	const renderList = (items) => (
		<ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
			{items.map((item, i) => (
				<li key={i} style={{ display: "flex", gap: "10px", marginBottom: "16px" }} className="wow fadeInUp" data-wow-delay="0.1s">
					<i className="tji-double-check" style={checkIcon}></i>
					<span>{item}</span>
				</li>
			))}
		</ul>
	);

	const renderCostTable = (rows, total) => (
		<div className="wow fadeInUp" data-wow-delay="0.1s" style={{ overflowX: "auto" }}>
			<table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
				<tbody>
					{rows.map((row, i) => (
						<tr key={i}>
							<td style={cellStyle}>{row.label}</td>
							<td style={amountCell}>{row.amount}</td>
						</tr>
					))}
					{total ? (
						<tr>
							<td style={{ ...cellStyle, fontWeight: 700 }}>Total</td>
							<td style={{ ...amountCell, fontWeight: 700 }}>{total}</td>
						</tr>
					) : null}
				</tbody>
			</table>
		</div>
	);

	return (
		<section className="tj-service-area section-space" style={{ paddingTop: "50px", paddingBottom: "60px" }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div className="tj-entry-content">

									<h4 style={{ ...headingStyle, marginTop: 0 }} className="wow fadeInUp" data-wow-delay="0.1s">
										About Skills in Motion
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Skills in Motion is a recruitment agent. If we are satisfied that we can reasonably secure you a job and you have completed the basic document requirements for a visa application, we help you find a suitable employer in Australia.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										We are paid by the employers, so our service for finding an employer is offered free of charge to you. Skills in Motion does not provide visa advice nor visa lodgment assistance.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										General information about the 482 visa
									</h4>
									<div className="wow fadeInUp" data-wow-delay="0.1s" style={{ overflowX: "auto" }}>
										<table style={{ width: "100%", borderCollapse: "collapse", margin: "8px 0 24px" }}>
											<tbody>
												{generalInfo.map((row, i) => (
													<tr key={i}>
														<td style={{ ...cellStyle, fontWeight: 600, width: "40%" }}>{row.label}</td>
														<td style={cellStyle}>{row.value}</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Who will assist you with the visa application
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Whichever migration agent your employer selects will prepare and lodge your visa. After you are selected, your employer will advise you or the appointed migration agent will contact you directly. Skills in Motion will also reconfirm and share all of your details that they hold with the migration agent.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Who pays for the visa application
									</h4>
									{renderList(whoPays)}
									<h5 style={{ ...headingStyle, marginTop: "20px" }} className="wow fadeInUp" data-wow-delay="0.1s">
										Total cost of processing the visa (average / max)
									</h5>
									{renderCostTable(visaCostRows, "$ 8,253.61")}

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Payment
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Most likely you will have to pay the full invoice value before they lodge the visa.
									</p>

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Family members
									</h4>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										You can add family members to your application at the time of the visa, or add them after you get the visa and settle down in Australia. Family members have work rights.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Adding family members is allowed only with the consent of the employer. This is a question you should ask at the time of the interview with the employer.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Adding family members with you in the application, or arriving in Australia together, is not recommended. Adding them after you get the visa and settle down in Australia is generally considered the right choice.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										Below are indicative figures. The migration agent assisting you will advise on the applicable fees and terms of payment before they commence.
									</p>
									{renderCostTable(familyCostRows)}

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Refunds for refused / withdrawn applications
									</h4>
									{renderList(refunds)}

									<h4 style={headingStyle} className="wow fadeInUp" data-wow-delay="0.1s">
										Who will assist you with the relocation
									</h4>
									{renderList(relocation)}

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subclass482Content;
