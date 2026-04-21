import { assetUrl } from "@/libs/assetUrl";
import makePath from "@/libs/makePath";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard6 = ({ blog, idx }) => {
	const { title, desc, id, img2, category, date, day, month, url, roles } = blog || {};
	const cardUrl = url || `/blogs/${id}`;
	return (
		<div className="blog-style-2 style-6 h-100" style={{ display: "flex", flexDirection: "column" }}>
			<div className="blog-images" style={{ height: "250px", flex: "none", overflow: "hidden" }}>
				<img src={assetUrl(img2 ? img2 : "/images/blog/h2-blog-1.webp")} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
				{!url && (
					<div className="blog-date">
						<span className="date">06</span>
						<span className="month">Nov</span>
					</div>
				)}
			</div>
			<div className="blog-content" style={{ flex: 1, padding: "14px 16px", border: 0 }}>
				<h4 className="title under-line" style={{ marginBottom: "6px" }}>
					{url ? title : <Link href={cardUrl}>{title}</Link>}
				</h4>
				<div className="desc" style={{ marginBottom: "8px" }}>
					<p style={{ fontSize: "14px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
						{desc || "In today's dynamic business environment, the key to success lies in strategic planning."}
					</p>
				</div>
				{roles ? (
					<div style={{ display: "flex", flexWrap: "wrap", gap: "6px", alignItems: "center", justifyContent: "space-between" }}>
						<div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
							{roles.map((role, i) => (
								<span key={i} style={{ fontSize: "12px", borderRadius: "4px", padding: "3px 10px", color: "#fff", background: "var(--tj-color-theme-primary)" }}>
									{role}
								</span>
							))}
						</div>
						<a href="#" className="sector-read-more">
							Read more →
						</a>
					</div>
				) : (
					<>
						<div className="blog-two-meta" style={{ marginBottom: "6px" }}>
							<ul>
								<li>
									<Link className="meta-link" href={`/blogs?category=${makePath(category)}`}>
										{category}
									</Link>
								</li>
								<li>03 Comments</li>
							</ul>
						</div>
						<div className="blog-button">
							<ButtonPrimary text={"Read more"} url={cardUrl} />
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default BlogCard6;
