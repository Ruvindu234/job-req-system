"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import getALlServices from "@/libs/getALlServices";
import { useState } from "react";

const Services5 = () => {
	const services = getALlServices()?.slice(0, 6);
	const [currentIndex, setCurrentIndex] = useState(1);
	const handleCurrentIndex = idx => {
		setCurrentIndex(idx);
	};
	return (
		<section className="tj-service-section-four section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.3s">
									Reading material
								</span>
								<h2 className="sec-title text-anim">
									Guides & resources for your recruitment journey
								</h2>
							</div>

							<div className="desc">
								Explore curated reading materials to help candidates and
								employers navigate recruitment, migration, and career growth.
							</div>
							<ButtonPrimary text={"Browse all guides"} url={"/resources"} />
						</div>
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
