"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero2 = () => {
	const heroSlides = [
		{
			subtitle: "number #1 solver agency",
			title: "Find the Right Talent, Right Now.",
			img: "/new_images/slider-new.jpeg",
		},
	];

	function updateDashWidth(swiper) {
		const dashInner = swiper.el.querySelector(".dash-inner");

		if (dashInner) {
			const realIndex = swiper.realIndex;
			const progressPercent = ((realIndex + 1) / heroSlides.length) * 100;
			dashInner.style.width = progressPercent + "%";
		}
	}

	return (
		<section className="tj-hero-slider style-1">
			<Swiper
				speed={2000}
				loop={true}
				effect="fade"
				modules={[Pagination, Autoplay, Navigation, EffectFade]}
				pagination={{
					el: ".tj-sw-pagination",
					type: "fraction",
					clickable: true,
					renderFraction: (currentClass, totalClass) =>
						`<span class="${currentClass}"></span>` +
						` <span class="dash"><span class="dash-inner"></span></span> ` +
						`<span class="${totalClass}"></span>`,
				}}
				navigation={{ prevEl: ".tj-btn-prev", nextEl: ".tj-btn-next" }}
				autoplay={{ delay: 5000 }}
				onInit={swiper => updateDashWidth(swiper)}
				onSlideChange={swiper => updateDashWidth(swiper)}
				className="full-slider-active"
			>
				{heroSlides.map(({ img, title, subtitle }, idx) => (
					<SwiperSlide key={idx}>
						<section
							className="tj-slider-section"
							style={{ backgroundImage: `url(${img})` }}
						>
							<div className="container">
								<div className="row">
									<div className="slider-wrapper">
										<div className="slider-content">
											<span className="sub-title">{subtitle}</span>
											<h1 className="slider-title" style={{ fontSize: "54px" }}>{title}</h1>
											<ButtonPrimary
												text={"Free consultation"}
												url={"/contact"}
												className={"slider-button"}
											/>
										</div>
									</div>
								</div>
							</div>
						</section>
					</SwiperSlide>
				))}

				<div className="tj-navigation" style={{ display: "none" }}>
					<div className="tj-btn tj-btn-prev">
						<i className="fas fa-caret-left"></i>
					</div>
					<div className="tj-sw-pagination"></div>
					<div className="tj-btn tj-btn-next">
						<i className="fas fa-caret-right"></i>
					</div>
				</div>
			</Swiper>
		</section>
	);
};

export default Hero2;
