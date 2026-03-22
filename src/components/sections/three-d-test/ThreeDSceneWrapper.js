'use client';

import dynamic from 'next/dynamic';

const ThreeDScene = dynamic(
	() => import('./ThreeDScene'),
	{ ssr: false }
);

export default function ThreeDSceneWrapper() {
	return <ThreeDScene />;
}
