import Link from "next/link";

const ButtonPrimary = ({ className, text, url, type, iconName }) => {
	return (
		<>
			{type ? (
				<button
					type={type ? type : "submit"}
					className={`tj-primary-btn ${className ? className : ""}`}
				>
					<span className="btn_inner">
						<span className="btn_icon">
							<span>
								<i className="fas fa-arrow-right"></i>
								<i className="fas fa-arrow-right"></i>
							</span>
						</span>
						<span className="btn_text">
							<span>{text}</span>
						</span>
					</span>
				</button>
			) : (
				<Link
					href={url ? url : "/"}
					className={`tj-primary-btn ${className ? className : ""}`}
				>
					<span className="btn_inner">
						<span className="btn_icon">
							<span>
								<i className={iconName ? iconName : "fas fa-arrow-right"}></i>
								<i className={iconName ? iconName : "fas fa-arrow-right"}></i>
							</span>
						</span>
						<span className="btn_text">
							<span>{text}</span>
						</span>
					</span>
				</Link>
			)}
		</>
	);
};

export default ButtonPrimary;
