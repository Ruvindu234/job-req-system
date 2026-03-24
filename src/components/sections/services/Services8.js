"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard8 from "@/components/shared/cards/ServiceCard8";
import getALlServices from "@/libs/getALlServices";

const Services8 = () => {
	const services = getALlServices()?.slice(0, 5);
	return (
		<section className="h8-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="sec-title text-anim mb-40" style={{ color: "var(--tj-color-common-white)" }}>
							Services Built for <span style={{ color: "var(--tj-color-theme-primary)" }}>Business</span> Goal Success
						</h2>
						<div className="h8-services-list">
							{services?.length
								? services.map((service, idx) => (
										<ServiceCard8 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
						<div className="mobile_btn text-center d-lg-none">
							<ButtonPrimary text={"More services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
