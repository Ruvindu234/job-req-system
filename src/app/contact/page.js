import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import ContactPageHeader from "@/components/sections/contact/ContactPageHeader";
import EmployerEnquiry from "@/components/sections/employers/EmployerEnquiry";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function ContactPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<ContactPageHeader />
				<EmployerEnquiry />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
