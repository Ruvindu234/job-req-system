import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import InterviewGuidePageHeader from "@/components/sections/resources/InterviewGuidePageHeader";
import InterviewGuideContent from "@/components/sections/resources/InterviewGuideContent";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Interview Guide | Skills In Motion",
	description: "Skills in Motion interview guide — how to prepare for, present at, and follow up on your job interview.",
};

export default function InterviewGuidePage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<InterviewGuidePageHeader />
				<InterviewGuideContent />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
