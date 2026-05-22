import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Subclass482PageHeader from "@/components/sections/resources/Subclass482PageHeader";
import Subclass482Content from "@/components/sections/resources/Subclass482Content";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Subclass 482 Working Visa | Skills In Motion",
	description: "Information sheet on the Subclass 482 Working Visa — costs, family members, refunds, and relocation support.",
};

export default function Subclass482Page() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<Subclass482PageHeader />
				<Subclass482Content />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
