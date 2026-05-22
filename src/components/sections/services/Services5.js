"use client";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import { useState } from "react";

const resources = [
	{ id: 1, title: "Your Interview Toolkit", iconName: "tji-optimization", link: "/resources/interview-guide" },
	{ id: 2, title: "Skills Assessment Info Sheet", iconName: "tji-strategic", link: "/resources/skills-assessment" },
	{ id: 3, title: "Subclass 482 Visa Info Sheet", iconName: "tji-business", link: "/resources/subclass-482-visa" },
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
					<div className="col-12">
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
			</div>
		</section>
	);
};

export default Services5;
