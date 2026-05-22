import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import SkillsAssessmentPageHeader from "@/components/sections/resources/SkillsAssessmentPageHeader";
import SkillsAssessmentContent from "@/components/sections/resources/SkillsAssessmentContent";
import Cta1 from "@/components/sections/cta/Cta1";
import TjMagicCursor from "@/components/shared/others/TjMagicCursor";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Skills Assessment | Skills In Motion",
	description: "Information sheet on the skills assessment process, costs, and terms for the Subclass 482 visa pathway.",
};

export default function SkillsAssessmentPage() {
	return (
		<div>
			<Header headerType={2} />
			<Header isStickyHeader={true} headerType={2} />
			<main>
				<SkillsAssessmentPageHeader />
				<SkillsAssessmentContent />
				<Cta1 />
			</main>
			<Footer2 />
			<ClientWrapper />
			<TjMagicCursor type={2} />
		</div>
	);
}
