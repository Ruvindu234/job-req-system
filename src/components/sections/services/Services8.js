"use client";
import modifyNumber from "@/libs/modifyNumber";

const aboutItems = [
	{
		title: "Vision",
		desc: "Our vision is to become the employer's preferred recruitment agency of choice, based on the extent and quality of our services. We also endeavor to be the preferred platform for candidates to discover and pursue exciting careers with their ideal organizations.",
	},
	{
		title: "Mission",
		desc: "Our mission is to be the preferred and trusted recruitment partner for both our clients and candidates. To achieve this, we are committed to providing excellent customer service, quality staffing, and competitive pricing. We will continue to work in close consultation with our clients to ensure that their staffing needs are fully met to their complete satisfaction.",
	},
	{
		title: "One-Stop Solution for Local and Overseas Talent",
		desc: "Skills In Motion is a recruitment company that specializes in a number of diverse industries and areas. Whether you are looking for a new team member or your next job opportunity, our expert recruiters operate across trades and technical occupations. We specialize in deploying only the best professionals and skilled tradespeople to meet the needs of companies. We have qualified, skilled, and experienced professionals both within and outside Australia who are actively seeking work opportunities across the country. Over the years, we have served numerous companies in Australia and New Zealand by sourcing talented and suitable local and overseas workers. This is a new venture that brings previously overseas-managed operations back to Australia, combining them to offer both local and international talent from a single source. Our professional recruitment service saves you time and money by finding the right people for your business. As your dedicated recruitment partner, it is important to us that you get the right staff who fit your business requirements. Our professional account managers will ensure your needs are fulfilled to your satisfaction. Skills In Motion is connected and associated with several recruitment and migration firms operating within Australia. These firms may assist both applicants and companies in achieving their pre- and post-selection goals. We use an overseas back-office team to prepare eligible candidates with decision-ready applications.",
	},
];

const Services8 = () => {
	return (
		<section className="h8-services-section section-space">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="sec-title text-anim mb-40" style={{ color: "var(--tj-color-common-white)" }}>
							Services Built for <span style={{ color: "var(--tj-color-theme-primary)" }}>Business</span> Goal Success
						</h2>
						<div className="h8-services-list">
							{aboutItems.map((item, idx) => (
								<div key={idx} className="service_item wow fadeInUp" data-wow-delay={`0.${idx + 3}s`}>
									<span className="no">{modifyNumber(idx + 1)}.</span>
									<div className="content" style={{ maxWidth: "100%" }}>
										<h4 className="title">{item.title}</h4>
										<div className="desc">{item.desc}</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
