import BlogCard6 from "@/components/shared/cards/BlogCard6";

const sectors = [
	{
		title: "Automotive & Transportation",
		desc: "From mechanics and auto electricians to logistics coordinators and transport operators, we connect skilled professionals with leading automotive and transport businesses across Australia.",
		roles: ["Mechanics", "Auto Electricians", "Logistics Coordinators", "Transport Operators"],
		img2: "/new_images/automotive.jpg",
		url: "#",
	},
	{
		title: "Construction",
		desc: "We supply qualified tradespeople and construction professionals to residential, commercial, and civil projects. From carpenters to site managers, we have the talent your project demands.",
		roles: ["Carpenters", "Site Managers", "Labourers", "Project Managers"],
		img2: "/new_images/Construction.jpg",
		url: "#",
	},
	{
		title: "Engineering & Consulting",
		desc: "We place mechanical, civil, electrical, and structural engineers with top firms and consultancies. Whether you need a graduate or a senior specialist, our database is ready.",
		roles: ["Civil Engineers", "Mechanical Engineers", "Structural Engineers", "Consultants"],
		img2: "/new_images/engineer.jpg",
		url: "#",
	},
	{
		title: "Hospitality",
		desc: "From front-of-house staff to executive chefs and hotel managers, we recruit for restaurants, hotels, resorts, and catering businesses across Australia and New Zealand.",
		roles: ["Chefs", "Hotel Managers", "Front-of-House", "Catering Staff"],
		img2: "/new_images/Hospitality.jpg",
		url: "#",
	},
	{
		title: "Manufacturing",
		desc: "We source production workers, quality controllers, machine operators, and team leaders for manufacturing facilities. We understand the pace and precision the industry demands.",
		roles: ["Machine Operators", "Quality Controllers", "Production Workers", "Team Leaders"],
		img2: "/new_images/Manufacturing.jpg",
		url: "#",
	},
];

const Blogs6 = () => {
	return (
		<section className="h6-blog-section section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.2s">
								// Recruitment &amp; Migration Solutions
							</span>
							<h2 className="sec-title text-anim">
								Hire seamlessly across industries
							</h2>
							<p className="wow fadeInUp" data-wow-delay="0.3s">
								With over 10 years of experience, we have worked with leading
								recruitment companies and migration firms, specializing in the
								industries listed below. Our deep expertise and extensive
								candidate database make us a ready-to-go solution for finding
								top talent in these sectors.
							</p>
						</div>
					</div>
				</div>
				<div
					className="row rg-30 wow fadeInUp"
					data-wow-delay="0.3s"
				>
					{sectors.map((sector, idx) => (
						<div key={idx} className="col-xl-6 col-md-6 col-12 d-flex">
							<BlogCard6 blog={sector} idx={idx} />
						</div>
					))}
				</div>
			</div>
			<div className="h6-blog-shape move-anim">
				<img src="/images/shapes/h4-hero-shape-1.svg" alt="img" />
			</div>
		</section>
	);
};

export default Blogs6;
