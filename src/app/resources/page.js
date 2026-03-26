import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import ResourcesPageHeader from "@/components/sections/resources/ResourcesPageHeader";
import Video from "@/components/sections/videos/Video";
import Services5 from "@/components/sections/services/Services5";
import Faq2 from "@/components/sections/faq/Faq2";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function ResourcesPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<ResourcesPageHeader />
				<Faq2 />
				<Video />
				<Services5 />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
