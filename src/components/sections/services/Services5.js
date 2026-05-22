"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import { useState } from "react";

const resources = [
	{ id: 1, title: "Your Interview Toolkit", iconName: "tji-optimization", link: "/resources/interview-guide" },
	{ id: 2, title: "Information sheet Skills Assessment", iconName: "tji-strategic" },
	{ id: 3, title: "Information sheet Subclass 482 Working Visa", iconName: "tji-business" },
];

const Services5 = () => {
	const services = resources;
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="tj-service-section-four section-space">
			<div className="container">
				<div className="row align-items-center mb-40">
					<div className="col-lg-9 col-12">
						<span className="sub-title wow fadeInUp" data-wow-delay="0.3s" style={{ backgroundColor: "#0075ff", padding: "3px 10px", borderRadius: "8px", color: "#ffffff" }}>
							Reading material
						</span>
						<h2 className="sec-title text-anim" style={{ marginBottom: "12px" }}>
							Recruitment guides & resources
						</h2>
						<p className="mb-0" style={{ color: "inherit", opacity: "0.75" }}>
							Explore curated reading materials to help candidates and employers
							navigate recruitment, migration, and career growth.
						</p>
					</div>
					<div className="col-lg-3 col-12 d-none d-lg-flex justify-content-end align-items-center">
						<ButtonPrimary text={"Browse all guides"} url={"/resources"} />
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h5-service-wrap wow fadeInUp" data-wow-delay="0.3s">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard5
											key={idx}
											service={service}
											handleCurrentIndex={handleCurrentIndex}
											currentIndex={currentIndex}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
				<div className="row d-lg-none">
					<div className="col">
						<div className="services-btn text-center">
							<ButtonPrimary text={"Browse all guides"} url={"/resources"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services5;
