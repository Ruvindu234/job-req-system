import { assetUrl } from "@/libs/assetUrl";
import Link from "next/link";

const ContactPageHeader = () => {
	return (
		<section
			className="tj-page-header"
			style={{ backgroundImage: `url('${assetUrl("/new_images/pheader-bg.webp")}')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<span
							className="employer-page-badge wow fadeInDown"
							data-wow-delay="0.1s"
						>
							// Get in Touch
						</span>
						<h1
							className="tj-page-title wow fadeInDown"
							data-wow-delay="0.2s"
						>
							Contact Us
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
							<span>Contact</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPageHeader;
