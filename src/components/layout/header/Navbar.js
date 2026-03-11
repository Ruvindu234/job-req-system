import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();

	return (
		<div
			className={`mainmenu ${
				(headerType === 3 || headerType == 4) && !isStickyHeader ? "menu-3" : ""
			}  d-lg-block d-none`}
			id={isStickyHeader ? "mainmenu" : "main-menu"}
		>
			<ul>
				{navItems.map((item) => {
					const nav = makeActiveLink(item);
					return (
						<li
							key={item.id}
							className={nav?.isActive ? "current-menu-item" : ""}
						>
							<Link
								href={nav?.path ? nav.path : "#"}
							>
								{nav?.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Navbar;
