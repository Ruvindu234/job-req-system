import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const MobileNavbar = () => {
	const navItems = getNavItems();
	return (
		<div className="hamburger_menu d-block d-lg-none">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems.map((item, idx) => (
								<li
									key={item.id}
									className={idx === navItems.length - 1 ? "mean-last" : ""}
								>
									<Link
										href={item.path ? item.path : "#"}
										>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
