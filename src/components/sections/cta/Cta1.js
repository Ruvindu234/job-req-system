import { assetUrl } from "@/libs/assetUrl";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Cta1 = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-wrapper">
							<div className="cta-title">
								<h2 className="title text-anim" style={{ fontSize: "36px" }}>Ready to Find Your Next Hire?</h2>
							</div>
							<div className="cta-button wow fadeInUp" data-wow-delay="0.1s">
								<ButtonPrimary
									text={"Lets talk now"}
									url={"/contact"}
									className="white-btn"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<img
				className="cta-shape-1"
				src={assetUrl("/images/shapes/cta-shapes-1.png")}
				alt=""
				width={207}
				height={110}
				style={{ height: "auto" }}
			/>
			<img
				className="cta-shape-2"
				src={assetUrl("/images/shapes/cta-shapes-2.png")}
				alt=""
				width={207}
				height={110}
				style={{ height: "auto" }}
			/>
		</section>
	);
};

export default Cta1;
