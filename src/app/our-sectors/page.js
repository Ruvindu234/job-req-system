import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import OurSectorsPageHeader from "@/components/sections/our-sectors/OurSectorsPageHeader";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function OurSectorsPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<OurSectorsPageHeader />
				<Blogs6 />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
