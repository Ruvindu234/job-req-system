import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import EmployersPageHeader from "@/components/sections/employers/EmployersPageHeader";
import OverseasRecruitment from "@/components/sections/employers/OverseasRecruitment";
import LocalRecruitment from "@/components/sections/employers/LocalRecruitment";
import EmployerEnquiry from "@/components/sections/employers/EmployerEnquiry";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function EmployersPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<EmployersPageHeader />
				<OverseasRecruitment />
				<LocalRecruitment />
				<EmployerEnquiry />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
