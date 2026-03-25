import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import JobSeekersPageHeader from "@/components/sections/job-seekers/JobSeekersPageHeader";
import JobSeekersContent from "@/components/sections/job-seekers/JobSeekersContent";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function JobSeekersPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<JobSeekersPageHeader />
				<JobSeekersContent />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
