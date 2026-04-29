"use client";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { assetUrl } from "@/libs/assetUrl";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero2 = () => {
	const heroSlides = [
		{
			subtitle: "number #1 solver agency",
			title: "Find the Right Talent, Right Now.",
			img: assetUrl("/new_images/slider-new.jpeg"),
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
		<section className="tj-hero-slider style-1 hero-2">
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
				{heroSlides.map(({ img }, idx) => (
					<SwiperSlide key={idx}>
						<section
							className="tj-slider-section"
							style={{ backgroundImage: `linear-gradient(rgba(5, 18, 31, 0.3), rgba(5, 18, 31, 0.1)), url(${img})`, minHeight: "185vh" }}
						>
							<div className="container">
								<div className="row">
									<div className="slider-wrapper">
										<div className="slider-content">
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
