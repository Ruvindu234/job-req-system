import { assetUrl } from "@/libs/assetUrl";
import Link from "next/link";

const AboutUsPageHeader = () => {
	return (
		<section
			className="tj-page-header"
			style={{ backgroundImage: `url('${assetUrl("/new_images/pheader-bg.webp")}')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
<h1
							className="tj-page-title wow fadeInDown"
							data-wow-delay="0.2s"
						>
							About Us
						</h1>
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
							<span>About Us</span>
						</div>
						<div className="wow fadeInUp" data-wow-delay="0.4s" style={{ margin: "32px auto 0", maxWidth: "800px" }}>
							<p style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--tj-color-theme-primary)", marginBottom: "10px" }}>
								Our Mission
							</p>
							<p style={{ fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.85)" }}>
								To be the preferred and trusted recruitment partner to both our clients and candidates, overseas and local. We will continue to work in close consultation with our clients to ensure that their staffing needs are adequately met to their complete satisfaction.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsPageHeader;
