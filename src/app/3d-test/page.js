import ThreeDSceneWrapper from '@/components/sections/three-d-test/ThreeDSceneWrapper';

export const metadata = {
	title: '3D Test – Cinematic Earth',
	description: 'Interactive 3D cinematic globe experience with flight to Sydney, Australia.',
};

export default function ThreeDTestPage() {
	return (
		<div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
			<ThreeDSceneWrapper />
		</div>
	);
}
