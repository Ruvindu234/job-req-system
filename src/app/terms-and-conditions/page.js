import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import TermsPageHeader from "@/components/sections/terms/TermsPageHeader";
import TermsContent from "@/components/sections/terms/TermsContent";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Terms & Conditions | Skills In Motion",
	description: "Read the Terms and Conditions for using Skills In Motion recruitment and migration services.",
};

export default function TermsAndConditionsPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<TermsPageHeader />
				<TermsContent />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
