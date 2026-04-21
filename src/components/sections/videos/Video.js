import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const Video = () => {
	return (
		<section className="tj-video-section tjParallaxSection">
			<div
				className="tj-video-bg tjParallaxImage"
				style={{ backgroundImage: "url('/new_images/slider-1.webp')" }}
			></div>
			<div className="video-btn-wrap">
				<PopupVideo>
					<Link
						className="video-btn glightbox video-popup"
						href="https://www.youtube.com/watch?v=Z5RLRLuyG7c"
					>
						<span className="play-btn">
							<i className="tji-play"></i>
						</span>
					</Link>
				</PopupVideo>
			</div>
		</section>
	);
};

export default Video;
