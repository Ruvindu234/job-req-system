import { assetUrl } from "@/libs/assetUrl";
import Link from "next/link";

const Subclass482PageHeader = () => {
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
							// Information Sheet
						</span>
						<h1
							className="tj-page-title wow fadeInDown"
							data-wow-delay="0.2s"
						>
							Subclass 482 Working Visa
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
							<span>
								<Link href="/resources">
									<span>Resources</span>
								</Link>
							</span>
							<span>
								<i
									className="fas fa-chevron-right"
									style={{ fontSize: "11px" }}
								></i>
							</span>
							<span>Subclass 482 Working Visa</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subclass482PageHeader;
