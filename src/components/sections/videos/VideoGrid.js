"use client";

import { useEffect } from "react";
import Link from "next/link";

const videos = [
	{
		id: 1,
		youtubeId: "MLpWrANjFbI",
		title: "How to Nail Your Job Interview",
		category: "Career Tips",
		duration: "8:24",
	},
	{
		id: 2,
		youtubeId: "Z5RLRLuyG7c",
		title: "Top Recruitment Strategies for 2024",
		category: "Recruitment",
		duration: "12:05",
	},
	{
		id: 3,
		youtubeId: "aX2KCQBNuok",
		title: "Migration Pathways to Australia Explained",
		category: "Migration",
		duration: "15:30",
	},
	{
		id: 4,
		youtubeId: "Ks-_Mh1QhMc",
		title: "Building a Standout Resume",
		category: "Career Tips",
		duration: "10:18",
	},
	{
		id: 5,
		youtubeId: "1Evwgu369Jw",
		title: "Understanding Employer Branding",
		category: "Employers",
		duration: "9:45",
	},
	{
		id: 6,
		youtubeId: "xvFZjo5PgG0",
		title: "Salary Negotiation — Expert Advice",
		category: "Career Tips",
		duration: "7:52",
	},
];

const VideoGrid = () => {
	useEffect(() => {
		import("glightbox").then(({ default: GLightbox }) => {
			GLightbox({ selector: ".vg-glightbox" });
		});
	}, []);

	return (
		<section className="tj-video-grid-section section-space">
			<div className="container">
				<div className="row align-items-end mb-50">
					<div className="col-lg-8">
						<div className="sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								// Watch &amp; Learn
							</span>
							<h2 className="sec-title text-anim">
								Video guides &amp; resources
							</h2>
						</div>
					</div>
					<div className="col-lg-4 text-lg-end wow fadeInUp" data-wow-delay="0.2s">
						<p className="vg-subtext">
							Short videos covering recruitment, migration, and career growth — curated for candidates and employers.
						</p>
					</div>
				</div>

				<div className="row g-4">
					{videos.map((video) => (
						<div key={video.id} className="col-xl-4 col-md-6">
							<div className="vg-card wow fadeInUp" data-wow-delay="0.1s">
								<div className="vg-thumbnail">
									<img
										src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
										alt={video.title}
									/>
									<div className="vg-overlay" />
									<Link
										href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
										className="vg-glightbox vg-play-btn"
										aria-label={`Play ${video.title}`}
									>
										<span className="play-icon">
											<i className="tji-play"></i>
										</span>
									</Link>
									<span className="vg-duration">{video.duration}</span>
								</div>
								<div className="vg-content">
									<span className="vg-category">{video.category}</span>
									<h4 className="vg-title">{video.title}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VideoGrid;
