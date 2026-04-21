import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import AboutUsPageHeader from "@/components/sections/about-us/AboutUsPageHeader";
import Services8 from "@/components/sections/services/Services8";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function AboutUsPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<AboutUsPageHeader />
				<Services8 />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
