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
						<span
							className="employer-page-badge wow fadeInDown"
							data-wow-delay="0.1s"
						>
							// Recruitment &amp; Migration Solutions
						</span>
						<h1
							className="tj-page-title wow fadeInDown"
							data-wow-delay="0.2s"
						>
							Employers
						</h1>
						<p
							className="employer-page-tagline wow fadeInUp"
							data-wow-delay="0.3s"
						>
							&ldquo;If you need &lsquo;em, we&rsquo;ll find &lsquo;em&rdquo;
						</p>
						<div
							className="tj-page-link wow fadeInUp"
							data-wow-delay="0.4s"
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
