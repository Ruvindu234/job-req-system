import Link from "next/link";

const EmployersPageHeader = () => {
	return (
		<section
			className="tj-page-header"
			style={{ backgroundImage: "url('/new_images/pheader-bg.webp')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<h1
							className="tj-page-title wow fadeInDown"
							data-wow-delay="0.1s"
						>
							Employers
						</h1>
						<p
							className="wow fadeInUp"
							data-wow-delay="0.2s"
							style={{
								color: "var(--tj-color-common-white)",
								fontSize: "20px",
								marginTop: "12px",
								fontStyle: "italic",
								opacity: 0.85,
							}}
						>
							&ldquo;If you need &lsquo;em, we&rsquo;ll find &lsquo;em&rdquo;
						</p>
						<div
							className="tj-page-link wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<span>
								<Link href="/">
									<span>Home</span>
								</Link>
							</span>
							<span>
								<i
									className="fas fa-chevron-right"
									style={{ fontSize: "11px" }}
								></i>
							</span>
							<span>Employers</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployersPageHeader;
