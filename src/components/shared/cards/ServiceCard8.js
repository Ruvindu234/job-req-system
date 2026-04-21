import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard8 = ({ service, idx }) => {
	const { title, id } = service || {};
	return (
		<div className="service_item wow fadeInUp" data-wow-delay={`0.${idx + 3}s`}>
			<span className="no">{modifyNumber(idx + 1)}.</span>
			<div className="content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<div className="desc">
					In today&apos;s dynamic business environment, the key to success lies
					in strategic planning and operational excellence.
				</div>
			</div>
			<Link className="service_btn icon-btn" href={`/services/${id}`}>
				<i className="tji-arrow-right"></i>
			</Link>
		</div>
	);
};

export default ServiceCard8;
