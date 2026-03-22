'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ThreeDScene() {
	const mountRef = useRef(null);
	const [status, setStatus] = useState('EARTH');

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		// ── Scene / Camera / Renderer ──────────────────────────────────────
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000008);

		const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.01, 1000);
		camera.position.set(0, 1, 6);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(mount.clientWidth, mount.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.0;
		mount.appendChild(renderer.domElement);

		// ── Stars ──────────────────────────────────────────────────────────
		{
			const geo = new THREE.BufferGeometry();
			const pos = new Float32Array(4000 * 3);
			for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 500;
			geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
			scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.25 })));
		}

		// ── Earth (GLTF cartoon model) — removed canvas texture functions ──
		function makeEarthTexture_UNUSED() {
			const tc = document.createElement('canvas');
			tc.width = 2048; tc.height = 1024;
			const ctx = tc.getContext('2d');

			// Ocean gradient
			const og = ctx.createLinearGradient(0,0,0,1024);
			og.addColorStop(0,'#09203e'); og.addColorStop(0.5,'#0e2a52'); og.addColorStop(1,'#09203e');
			ctx.fillStyle = og; ctx.fillRect(0,0,2048,1024);

			const xy = (lon, lat) => [((lon + 180) / 360) * 2048, ((90 - lat) / 180) * 1024];

			const poly = (pts, fill, stroke) => {
				ctx.beginPath();
				ctx.moveTo(...xy(pts[0][0], pts[0][1]));
				pts.slice(1).forEach(p => ctx.lineTo(...xy(p[0], p[1])));
				ctx.closePath();
				ctx.fillStyle = fill; ctx.fill();
				if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
			};

			const L  = '#3d5e30';   // base land
			const L2 = '#4a6e3a';   // lighter land
			const LS = '#2a4220';   // land stroke
			const AU = '#c8883a';   // Australia ochre
			const AS = '#8a5510';   // Australia stroke

			// ── NORTH AMERICA ──────────────────────────────────────────────
			poly([
				[-168,72],[-140,72],[-120,74],[-95,75],[-80,73],[-65,72],
				[-60,70],[-64,64],[-55,58],[-52,55],[-56,47],[-66,44],
				[-70,42],[-74,40],[-76,36],[-80,32],[-80,26],[-82,24],
				[-87,24],[-90,20],[-87,16],[-84,10],[-80,8],[-77,8],
				[-78,12],[-84,15],[-88,16],[-92,19],[-97,20],
				[-105,20],[-110,24],[-117,32],[-117,33],
				[-122,37],[-124,46],[-124,50],[-130,55],
				[-140,60],[-155,60],[-165,62],[-168,66],[-168,72],
			], L2, LS);
			// Florida peninsula
			poly([[-80,30],[-80,26],[-82,24],[-87,24],[-87,30],[-80,30]], L2);
			// Baja California
			poly([[-117,32],[-110,24],[-109,23],[-117,30],[-117,32]], L2);
			// Alaska
			poly([[-168,72],[-168,60],[-162,58],[-152,58],[-148,60],[-140,60],[-140,66],[-168,72]], L2, LS);
			// Cuba (island)
			poly([[-85,22],[-75,22],[-75,20],[-82,20],[-85,22]], L2);

			// ── GREENLAND ─────────────────────────────────────────────────
			poly([[-70,76],[-20,76],[-18,72],[-25,65],[-50,60],[-70,68],[-70,76]], '#b0c8d8', '#8090a8');

			// ── SOUTH AMERICA ─────────────────────────────────────────────
			poly([
				[-82,12],[-76,12],[-62,12],[-50,5],[-38,5],
				[-35,-5],[-35,-12],[-40,-20],[-43,-23],
				[-48,-28],[-52,-34],[-58,-38],[-62,-42],
				[-68,-55],[-65,-55],[-66,-52],
				[-72,-46],[-75,-40],[-80,-30],[-82,-12],[-82,12],
			], L2, LS);

			// ── EUROPE ────────────────────────────────────────────────────
			// Continental body
			poly([
				[-10,36],[0,36],[6,43],[8,44],[14,44],[16,40],
				[20,38],[24,38],[26,40],[28,42],[30,46],
				[30,50],[28,54],[22,56],[18,58],
				[14,58],[12,56],[10,56],[8,55],[5,52],
				[3,51],[2,51],[-2,48],[-5,44],[-8,38],[-10,36],
			], L2, LS);
			// Scandinavian peninsula
			poly([
				[5,58],[8,58],[10,58],[12,56],[14,56],[18,58],
				[20,64],[22,68],[24,70],[26,72],[28,72],[30,70],
				[28,68],[24,64],[22,60],[20,58],[18,58],[16,58],
				[14,60],[12,58],[10,56],[8,55],[5,58],
			], L2, LS);
			// Iberian peninsula (Spain/Portugal)
			poly([
				[-10,36],[-8,38],[-8,44],[-2,44],[3,42],[4,44],
				[0,44],[-2,48],[-5,44],[-8,38],[-10,36],
			], L2, LS);
			// Italian boot
			poly([
				[8,44],[12,44],[14,42],[16,38],[16,37],[15,36],
				[12,38],[11,38],[10,44],[8,44],
			], L2, LS);
			// Greek peninsula
			poly([[20,42],[22,38],[24,36],[26,38],[24,40],[22,40],[20,42]], L2, LS);
			// Great Britain
			poly([
				[-6,50],[-2,50],[2,51],[1,53],[-1,55],[-2,57],
				[-4,58],[-6,58],[-6,56],[-4,54],[-4,52],[-6,50],
			], L2, LS);
			// Ireland
			poly([[-10,52],[-6,52],[-6,54],[-8,54],[-10,54],[-10,52]], L2, LS);

			// ── AFRICA ────────────────────────────────────────────────────
			poly([
				[-18,38],[0,36],[12,37],[25,36],[33,30],
				[38,22],[42,14],[44,12],[50,12],[52,10],
				[44,-2],[36,-20],[35,-36],
				[20,-36],[15,-36],[10,-36],
				[8,-5],[2,4],[-5,5],[-18,4],[-18,15],[-18,38],
			], L2, LS);
			// Horn of Africa
			poly([[44,12],[50,12],[52,10],[44,4],[40,4],[42,8],[44,12]], L2);
			// Madagascar
			poly([[44,-12],[50,-16],[50,-25],[44,-26],[43,-20],[44,-12]], L2, LS);

			// ── ASIA ──────────────────────────────────────────────────────
			// Main Eurasian body
			poly([
				[26,42],[30,46],[32,50],[36,54],[40,56],[50,60],
				[60,68],[70,68],[80,72],[100,72],[140,72],
				[180,72],[180,50],[150,46],[140,34],[130,30],
				[120,22],[110,14],[104,2],[100,5],[95,8],
				[90,22],[88,26],[82,28],[80,12],[78,8],
				[72,12],[68,20],[62,22],[58,22],[55,24],
				[48,30],[44,38],[40,36],[36,36],[32,36],[30,36],[26,42],
			], L2, LS);
			// Indian subcontinent (distinctive triangle)
			poly([
				[66,24],[68,24],[72,22],[76,18],[80,12],[80,8],
				[78,8],[76,10],[72,12],[68,16],[66,22],[66,24],
			], L2, LS);
			// Sri Lanka
			poly([[80,10],[82,8],[82,6],[80,6],[80,10]], L2);
			// Arabian peninsula
			poly([
				[36,30],[44,14],[46,14],[48,16],[52,18],[56,22],
				[60,22],[58,26],[56,26],[52,26],[48,22],[44,22],
				[42,18],[40,14],[36,22],[36,30],
			], L2, LS);
			// Indochina peninsula
			poly([
				[100,22],[104,22],[108,18],[106,14],[104,4],[100,4],
				[96,4],[95,8],[90,22],[100,22],
			], L2, LS);
			// Korean peninsula
			poly([[126,38],[130,34],[128,34],[126,36],[124,36],[126,38]], L2, LS);
			// Kamchatka
			poly([[160,58],[162,54],[158,52],[156,52],[158,56],[160,58]], L2);

			// ── JAPAN ─────────────────────────────────────────────────────
			// Honshu
			poly([
				[130,32],[132,33],[134,34],[137,35],[138,36],
				[141,38],[141,40],[140,42],[142,44],[140,42],
				[138,40],[136,36],[136,34],[134,33],[130,32],
			], L2, LS);
			// Kyushu
			poly([[130,32],[132,33],[130,33],[128,32],[130,32]], L2, LS);
			// Hokkaido
			poly([[140,44],[142,44],[146,44],[144,46],[140,44]], L2, LS);
			// Shikoku
			poly([[132,34],[134,34],[134,33],[132,33],[132,34]], L2);

			// ── AUSTRALIA (most detailed — ochre) ─────────────────────────
			poly([
				[114,-34],  // Perth SW coast
				[118,-34],  // Esperance
				[124,-34],  // SE WA
				[129,-34],  // Great Australian Bight W
				[132,-34],  // Head of Bight
				[136,-36],  // SE SA
				[139,-36],  // Murray Mouth
				[141,-39],  // Portland Vic
				[147,-39],  // Wilson's Prom
				[148,-38],  // SE Vic
				[150,-37],  // Eden
				[151,-34],  // Sydney
				[153,-30],  // Byron Bay
				[153,-28],  // Gold Coast
				[150,-23],  // Gladstone
				[148,-20],  // Bowen
				[146,-19],  // Townsville
				[145,-17],  // Cairns
				[145,-15],  // Cape Flattery
				[145,-12],  // Top of Cape York
				[142,-10],  // Cape York tip (northernmost)
				[141,-12],  // W of Cape York
				[139,-17],  // SE Gulf of Carpentaria
				[136,-17],  // S Gulf of Carpentaria
				[136,-14],  // W Gulf / Groote Eylandt area
				[136,-12],  // Arnhem Land E
				[131,-12],  // Darwin
				[128,-15],  // Joseph Bonaparte Gulf
				[122,-18],  // Broome / Kimberley
				[118,-20],  // Port Hedland
				[114,-22],  // Exmouth / Coral Bay
				[113,-26],  // Shark Bay
				[114,-30],  // Geraldton
				[114,-32],  // Perth N
				[114,-34],  // back to start
			], AU, AS);
			// Tasmania
			poly([[144,-40],[148,-40],[148,-44],[144,-44],[144,-40]], AU, AS);

			// ── NEW ZEALAND ───────────────────────────────────────────────
			// North Island
			poly([[174,-36],[178,-38],[178,-40],[176,-42],[172,-40],[174,-36]], L2, LS);
			// South Island
			poly([[172,-40],[176,-42],[170,-46],[166,-46],[168,-44],[172,-40]], L2, LS);

			// ── INDONESIA ─────────────────────────────────────────────────
			// Sumatra
			poly([[96,4],[100,2],[104,0],[106,-6],[102,-6],[98,-2],[95,2],[96,4]], L2, LS);
			// Java
			poly([[106,-6],[108,-6],[110,-8],[112,-8],[114,-8],[108,-7],[106,-6]], L2, LS);
			// Borneo
			poly([[108,2],[116,2],[118,4],[118,6],[116,7],[114,6],[110,4],[108,2]], L2, LS);
			// Sulawesi (simplified)
			poly([[120,2],[124,2],[124,-2],[122,-4],[120,0],[120,2]], L2);
			// Papua New Guinea
			poly([[131,-2],[140,-4],[142,-6],[140,-8],[136,-6],[131,-4],[131,-2]], L2, LS);
			// Philippines (Luzon)
			poly([[120,16],[122,18],[122,20],[120,20],[118,18],[120,16]], L2, LS);

			// ── ICE CAPS ──────────────────────────────────────────────────
			const iceTop = ctx.createLinearGradient(0,0,0,130);
			iceTop.addColorStop(0,'rgba(220,238,255,1)'); iceTop.addColorStop(1,'rgba(220,238,255,0)');
			ctx.fillStyle = iceTop; ctx.fillRect(0,0,2048,130);
			const iceBot = ctx.createLinearGradient(0,895,0,1024);
			iceBot.addColorStop(0,'rgba(220,238,255,0)'); iceBot.addColorStop(1,'rgba(220,238,255,1)');
			ctx.fillStyle = iceBot; ctx.fillRect(0,895,2048,129);

			// ── CITY GLOW DOTS ────────────────────────────────────────────
			const cities = [
				[-74,40.7],[-0.1,51.5],[2.35,48.85],[151.2,-33.87],[139.69,35.68],
				[72.88,19.07],[103.8,1.35],[31.24,30.06],[18.42,-33.92],[55.3,25.2],
				[116.4,39.9],[121.5,31.2],[77.2,28.6],[-43.2,-22.9],[-58.4,-34.6],
				[37.6,55.75],[28.97,41.01],[-87.6,41.8],[-118.2,34.0],[-79.4,43.7],
				[144.96,-37.81],[153.0,-27.47],[115.86,-31.95],[174.77,-36.86],[106.8,-6.2],
			];
			cities.forEach(([lon, lat]) => {
				const [x, y] = xy(lon, lat);
				const g = ctx.createRadialGradient(x,y,0,x,y,10);
				g.addColorStop(0,'rgba(255,220,80,0.95)');
				g.addColorStop(0.3,'rgba(255,180,40,0.5)');
				g.addColorStop(1,'rgba(255,150,20,0)');
				ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x,y,10,0,Math.PI*2); ctx.fill();
				ctx.fillStyle = '#ffe060'; ctx.beginPath(); ctx.arc(x,y,2.5,0,Math.PI*2); ctx.fill();
			});

			// ── GRATICULE ─────────────────────────────────────────────────
			ctx.strokeStyle = 'rgba(100,160,255,0.05)'; ctx.lineWidth = 1;
			for (let lon=-180; lon<=180; lon+=30) { const x=((lon+180)/360)*2048; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,1024); ctx.stroke(); }
			for (let lat=-90; lat<=90; lat+=30) { const y=((90-lat)/180)*1024; ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(2048,y); ctx.stroke(); }

			return new THREE.CanvasTexture(tc);
		}

		function makeCloudTexture() {
			const tc = document.createElement('canvas'); tc.width=1024; tc.height=512;
			const ctx = tc.getContext('2d'); ctx.clearRect(0,0,1024,512);
			for (let i=0; i<120; i++) {
				const x=Math.random()*1024, y=Math.random()*512;
				const rx=Math.random()*80+30, ry=rx*(0.3+Math.random()*0.4);
				const g=ctx.createRadialGradient(x,y,0,x,y,Math.max(rx,ry));
				const a=Math.random()*0.4+0.05;
				g.addColorStop(0,`rgba(255,255,255,${a})`); g.addColorStop(1,'rgba(255,255,255,0)');
				ctx.fillStyle=g; ctx.save(); ctx.translate(x,y); ctx.rotate(Math.random()*Math.PI);
				ctx.scale(rx/ry,1); ctx.beginPath(); ctx.arc(0,0,ry,0,Math.PI*2); ctx.fill(); ctx.restore();
			}
			return new THREE.CanvasTexture(tc);
		}

		// ── Height / bump map (unused — Earth now loaded from GLTF) ───────
		function makeHeightMap_UNUSED() {
			const tc = document.createElement('canvas');
			tc.width = 2048; tc.height = 1024;
			const ctx = tc.getContext('2d');

			// Deep ocean base
			ctx.fillStyle = '#1a1a1a';
			ctx.fillRect(0, 0, 2048, 1024);

			const xy  = (lon, lat) => [((lon + 180) / 360) * 2048, ((90 - lat) / 180) * 1024];
			const fill = (pts, hex) => {
				ctx.beginPath(); ctx.fillStyle = hex;
				ctx.moveTo(...xy(pts[0][0], pts[0][1]));
				pts.slice(1).forEach(p => ctx.lineTo(...xy(p[0], p[1])));
				ctx.closePath(); ctx.fill();
			};
			// Gradient-filled strip for mountain ranges
			const ridge = (pts, bright) => {
				if (pts.length < 2) return;
				const [x0,y0] = xy(pts[0][0], pts[0][1]);
				const [x1,y1] = xy(pts[pts.length-1][0], pts[pts.length-1][1]);
				const g = ctx.createLinearGradient(x0,y0,x1,y1);
				g.addColorStop(0,'#111');
				g.addColorStop(0.5, bright);
				g.addColorStop(1,'#111');
				ctx.beginPath(); ctx.strokeStyle = g;
				ctx.lineWidth = 18; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
				ctx.moveTo(x0, y0);
				pts.slice(1).forEach(p => ctx.lineTo(...xy(p[0], p[1])));
				ctx.stroke();
				// Softer halo
				ctx.lineWidth = 34; ctx.globalAlpha = 0.3;
				ctx.stroke();
				ctx.globalAlpha = 1;
			};

			// ── Continental shelves (shallow ocean) ───────────────────────
			// Slightly lighter than deep ocean around coastlines
			fill([[-168,72],[-52,72],[-52,50],[-65,44],[-82,23],[-92,16],[-85,10],[-78,8],[-75,5],[-115,20],[-125,50],[-140,60],[-168,72]], '#3a3a3a');
			fill([[-82,12],[-62,12],[-38,5],[-35,-5],[-35,-55],[-68,-55],[-75,-40],[-80,-30],[-82,-12],[-82,12]], '#3a3a3a');
			fill([[-18,38],[42,36],[55,70],[30,72],[10,72],[-10,62],[-12,50],[-10,36]], '#3a3a3a');
			fill([[-18,36],[-18,-36],[18,-36],[35,-36],[44,-12],[52,10],[55,38],[42,36],[-18,36]], '#3a3a3a');
			fill([[45,72],[180,72],[180,50],[140,12],[108,5],[95,5],[80,8],[68,20],[60,22],[45,36],[45,72]], '#3a3a3a');
			fill([[114,-34],[154,-28],[145,-12],[142,-10],[131,-12],[114,-22],[113,-26],[114,-34]], '#3a3a3a');

			// ── Lowland terrain (plains, basins) ──────────────────────────
			fill([[-168,72],[-52,72],[-52,50],[-65,44],[-82,23],[-92,16],[-85,10],[-78,8],[-75,5],[-115,20],[-125,50],[-140,60],[-168,72]], '#585858');
			fill([[-82,12],[-62,12],[-38,5],[-35,-5],[-35,-55],[-68,-55],[-75,-40],[-80,-30],[-82,-12],[-82,12]], '#525252');
			fill([[-18,38],[42,36],[55,70],[30,72],[10,72],[-10,62],[-12,50],[-10,36]], '#525252');
			fill([[-18,36],[-18,-36],[18,-36],[35,-36],[44,-12],[52,10],[55,38],[42,36],[-18,36]], '#4e4e4e');
			fill([[45,72],[180,72],[180,50],[140,12],[108,5],[95,5],[80,8],[68,20],[60,22],[45,36],[45,72]], '#525252');
			fill([[114,-34],[154,-28],[145,-12],[142,-10],[131,-12],[114,-22],[113,-26],[114,-34]], '#505050');

			// ── Plateaus & highlands ───────────────────────────────────────
			// Tibetan Plateau
			fill([[72,28],[104,28],[104,36],[92,40],[78,36],[72,32],[72,28]], '#909090');
			// Colorado Plateau / US interior
			fill([[-115,32],[-104,32],[-104,42],[-115,42],[-115,32]], '#707070');
			// Brazilian Highlands
			fill([[-50,-5],[-35,-5],[-35,-25],[-50,-25],[-50,-5]], '#686868');
			// East African Plateau
			fill([[28,-5],[40,-5],[40,-15],[28,-15],[28,-5]], '#6e6e6e');
			// Australian interior (flat — keep medium)
			fill([[120,-20],[140,-20],[140,-35],[120,-35],[120,-20]], '#585858');
			// Greenland ice sheet (high elevation)
			fill([[-60,68],[-20,68],[-20,76],[-60,76],[-60,68]], '#c0c0c0');
			// Antarctic (high ice sheet)
			fill([[-180,-70],[180,-70],[180,-90],[-180,-90],[-180,-70]], '#d0d0d0');

			// ── Major mountain ranges ──────────────────────────────────────
			// Himalayas (tallest on Earth)
			ctx.lineWidth = 22;
			ridge([[72,36],[78,34],[84,28],[90,28],[96,26],[102,26]], '#ffffff');
			// Karakoram + Hindu Kush
			ridge([[66,36],[72,36],[76,38],[68,38],[66,36]], '#e0e0e0');
			// Andes
			ridge([[-76,10],[-76,0],[-76,-15],[-70,-30],[-68,-40],[-68,-55]], '#d8d8d8');
			// Rocky Mountains
			ridge([[-120,30],[-118,36],[-115,42],[-112,48],[-110,55]], '#c8c8c8');
			// Alps
			ridge([[6,44],[8,47],[10,47],[14,46],[16,46]], '#d0d0d0');
			// Caucasus
			ridge([[40,42],[44,43],[48,42],[44,42]], '#c0c0c0');
			// Urals
			ridge([[58,52],[60,56],[60,60],[60,64],[58,68]], '#a0a0a0');
			// Atlas Mountains
			ridge([[-6,34],[0,33],[6,33],[10,32]], '#b0b0b0');
			// Zagros (Iran)
			ridge([[44,30],[48,32],[52,34],[56,28]], '#b8b8b8');
			// Great Dividing Range (Australia)
			ridge([[151,-28],[150,-32],[150,-36],[148,-38]], '#a0a0a0');
			// Ethiopian Highlands
			ridge([[36,8],[38,10],[40,12],[38,14]], '#b0b0b0');
			// Appalachians
			ridge([[-84,34],[-82,36],[-80,38],[-78,42],[-76,44]], '#909090');
			// Sierra Nevada
			ridge([[-120,36],[-118,38],[-119,40],[-120,42]], '#b0b0b0');
			// Scandinavian mountains
			ridge([[6,58],[8,62],[14,66],[16,68],[18,70]], '#a8a8a8');
			// Pyrenees
			ridge([[-2,43],[0,43],[2,42],[4,42]], '#c0c0c0');

			// ── Ocean trenches (darkest points) ───────────────────────────
			ctx.lineWidth = 10; ctx.globalAlpha = 1;
			// Mariana Trench
			ridge([[143,18],[145,16],[147,14],[147,12]], '#050505');
			// Philippine Trench
			ridge([[126,13],[127,10],[127,7]], '#080808');
			// Tonga Trench
			ridge([[-175,-16],[-174,-20],[-174,-24]], '#060606');
			// Peru-Chile Trench
			ridge([[-76,-5],[-74,-15],[-72,-25],[-70,-35]], '#080808');
			// Java Trench
			ridge([[104,-10],[106,-10],[108,-10],[110,-10]], '#080808');

			// ── Ice caps gradient ──────────────────────────────────────────
			const iceTop = ctx.createLinearGradient(0,0,0,100);
			iceTop.addColorStop(0,'rgba(220,220,220,1)');
			iceTop.addColorStop(1,'rgba(220,220,220,0)');
			ctx.fillStyle = iceTop; ctx.fillRect(0,0,2048,100);
			const iceBot = ctx.createLinearGradient(0,924,0,1024);
			iceBot.addColorStop(0,'rgba(220,220,220,0)');
			iceBot.addColorStop(1,'rgba(220,220,220,1)');
			ctx.fillStyle = iceBot; ctx.fillRect(0,924,2048,100);

			// ── Pixel-level terrain noise ──────────────────────────────────
			const id = ctx.getImageData(0, 0, 2048, 1024);
			const d  = id.data;
			for (let i = 0; i < d.length; i += 4) {
				const n = (Math.random() - 0.5) * 18;
				const v = Math.max(0, Math.min(255, d[i] + n));
				d[i] = d[i+1] = d[i+2] = v;
			}
			ctx.putImageData(id, 0, 0);

			return new THREE.CanvasTexture(tc);
		}

		const R = 2; // reference radius — all markers/curves use this scale

		// Single loader instance shared by both Earth and plane assets
		const gltfLoader = new GLTFLoader();

		// earthGroup acts as the Earth: children rotate with it,
		// markers are parented to it, loaded from GLTF asynchronously.
		const earthGroup = new THREE.Group();
		scene.add(earthGroup);

		gltfLoader.load(
			'/earth_cartoon.glb',
			(gltf) => {
				const model = gltf.scene;

				// Scale so the model's longest axis = 2 * R (diameter)
				const box    = new THREE.Box3().setFromObject(model);
				const size   = box.getSize(new THREE.Vector3());
				const maxDim = Math.max(size.x, size.y, size.z);
				model.scale.setScalar((R * 2) / maxDim);

				// Re-centre pivot to bounding-box centre
				const centre = box.getCenter(new THREE.Vector3());
				model.position.sub(centre.multiplyScalar((R * 2) / maxDim));

				// ── Align the GLTF texture so Australia sits at the ll2v3
				// computed position for Sydney. Adjust this angle until the
				// continent on the model lines up with the landing marker.
				model.rotation.y = Math.PI;

				earthGroup.add(model);
			},
			undefined,
			(err) => console.error('earth GLTFLoader error:', err)
		);

		// Atmosphere glow (thin blue shell outside the globe)
		scene.add(new THREE.Mesh(
			new THREE.SphereGeometry(R * 1.015, 48, 48),
			new THREE.MeshPhongMaterial({ color: 0x4488ff, transparent: true, opacity: 0.08, side: THREE.FrontSide })
		));

		// Cloud layer (slow-rotating translucent sphere)
		const cloudMesh = new THREE.Mesh(
			new THREE.SphereGeometry(R * 1.006, 48, 48),
			new THREE.MeshPhongMaterial({ map: makeCloudTexture(), transparent: true, opacity: 0.55, depthWrite: false })
		);
		scene.add(cloudMesh);

		// Lighting
		// Full day lighting — bright ambient floods all sides, no dark hemisphere
		scene.add(new THREE.AmbientLight(0xffffff, 2.8));
		const sun = new THREE.DirectionalLight(0xfff5dd, 1.0); sun.position.set(6,3,4); scene.add(sun);
		const fill = new THREE.DirectionalLight(0xffffff, 0.8); fill.position.set(-6,-3,-4); scene.add(fill);

		// ── Sydney helpers ─────────────────────────────────────────────────
		const ll2v3 = (lat, lon, r) => {
			const phi=(90-lat)*Math.PI/180, theta=(lon+180)*Math.PI/180;
			return new THREE.Vector3(-r*Math.sin(phi)*Math.cos(theta), r*Math.cos(phi), r*Math.sin(phi)*Math.sin(theta));
		};
		const sydPos = ll2v3(-33.87, 151.21, R);

		// Pulsing ring marker
		const markerG = new THREE.Group();
		markerG.position.copy(sydPos);
		markerG.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), sydPos.clone().normalize());
		const mkMat1 = new THREE.MeshBasicMaterial({ color:0xffcc44, side:THREE.DoubleSide, transparent:true });
		const mkMat2 = new THREE.MeshBasicMaterial({ color:0xffcc44, side:THREE.DoubleSide, transparent:true, opacity:0.4 });
		markerG.add(new THREE.Mesh(new THREE.RingGeometry(0.05,0.08,32), mkMat1));
		const ring2Mesh = new THREE.Mesh(new THREE.RingGeometry(0.05,0.08,32), mkMat2);
		markerG.add(ring2Mesh);
		earthGroup.add(markerG); markerG.visible = false;

		// Sydney Opera House (simplified iconic shells)
		function buildOperaHouse() {
			const g = new THREE.Group();
			const wm = new THREE.MeshPhongMaterial({ color:0xf5f2ee, shininess:100 });
			g.add(new THREE.Mesh(new THREE.BoxGeometry(0.12,0.012,0.07), wm));
			[-1,-2,-3].forEach(i => {
				const s = new THREE.Mesh(new THREE.BoxGeometry(0.11+i*0.008,0.007,0.065+i*0.003), wm);
				s.position.y = i*0.007; g.add(s);
			});
			const sm = new THREE.MeshPhongMaterial({ color:0xfaf8f5, shininess:140, side:THREE.DoubleSide });
			const addShell=(r,th,ang,rx,ry,rz,px,py,pz)=>{
				const sh=new THREE.Mesh(new THREE.TorusGeometry(r,th,6,14,ang),sm);
				sh.rotation.set(rx,ry,rz); sh.position.set(px,py,pz); g.add(sh);
			};
			addShell(0.04,0.005,Math.PI*0.75, 0,0.1,-Math.PI*0.2,  -0.02,0.028,0);
			addShell(0.032,0.004,Math.PI*0.7,  0,-0.1,-Math.PI*0.25, 0.025,0.022,0.008);
			addShell(0.025,0.003,Math.PI*0.65, 0,0.15,-Math.PI*0.28, 0.05,0.016,-0.006);
			return g;
		}
		const opera = buildOperaHouse();
		const sydNorm = sydPos.clone().normalize();
		opera.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), sydNorm);
		opera.position.copy(sydNorm.clone().multiplyScalar(R+0.008));
		earthGroup.add(opera); opera.visible = false;

		// ── Airplane (GLTF model) ──────────────────────────────────────────
		// Wrapper group: the animation code orients this along the tangent.
		// The inner pivot corrects the model's native forward axis → +X.
		const plane = new THREE.Group();
		plane.visible = true;
		scene.add(plane);

		gltfLoader.load(
			'/cartoon_plane.glb',
			(gltf) => {
				const model = gltf.scene;

				// Fit model to a consistent size regardless of source scale
				const box = new THREE.Box3().setFromObject(model);
				const size = box.getSize(new THREE.Vector3());
				const maxDim = Math.max(size.x, size.y, size.z);
				model.scale.setScalar(0.36 / maxDim);

				// Re-center so the model pivots from its centre
				const centre = box.getCenter(new THREE.Vector3());
				model.position.sub(centre.multiplyScalar(0.36 / maxDim));

				// Rotate so the model's nose points along local +X
				// (GLTF convention is -Z forward; rotate 90° around Y)
				model.rotation.y = -Math.PI / 2;

				// Engine glow light (kept from procedural version)
				const eGlow = new THREE.PointLight(0xff8822, 0.5, 0.3);
				eGlow.position.set(0, 0, 0);
				plane.add(eGlow);

				plane.add(model);
			},
			undefined,
			(err) => console.error('GLTFLoader error:', err)
		);

		// ── Condensation trail ─────────────────────────────────────────────
		const trailPts = []; let trailMesh = null;
		function updateTrail(pos) {
			trailPts.unshift(pos.clone());
			if (trailPts.length>80) trailPts.pop();
			if (trailMesh) scene.remove(trailMesh);
			if (trailPts.length<3) return;
			const pts = new THREE.CatmullRomCurve3(trailPts).getPoints(trailPts.length*2);
			const geo = new THREE.BufferGeometry().setFromPoints(pts);
			trailMesh = new THREE.Line(geo, new THREE.LineBasicMaterial({ color:0xddeeff, transparent:true, opacity:0.35 }));
			scene.add(trailMesh);
		}

		// ── Flight path: full loop around the Equator ─────────────────────
		// Dense waypoints every ~20° of longitude at lat=0 (Equator),
		// closed loop so the plane circles endlessly.
		const ALT = R + 0.22; // cruise altitude — hugs the surface
		const flightWaypoints = [];
		const EQUATOR_STEPS = 36; // one point every 10°
		for (let i = 0; i <= EQUATOR_STEPS; i++) {
			const lon = -180 + (i / EQUATOR_STEPS) * 360;
			flightWaypoints.push(ll2v3(25, lon, ALT));
		}
		const flightCurve = new THREE.CatmullRomCurve3(flightWaypoints, true, 'catmullrom', 0.5);

		// Park plane at LA ground position during intro orbit
		plane.position.copy(flightWaypoints[0]);

		// ── Animation loop ─────────────────────────────────────────────────
		const clock = new THREE.Clock();
		// camTheta ≈ 0 faces the equator start (lon=-180)
		let phase = 0, phaseT = 0, camTheta = 0;
		const CAM_D      = 4.8; // intro orbit distance
		const CAM_D_FLY  = 4.2; // flight distance — keeps full globe visible
		let   camDist    = CAM_D; // current interpolated distance

		let rafId;

		const phaseStatus = ['EARTH', 'EQUATOR ORBIT ✈'];

		const FLIGHT_DURATION = 60; // seconds — slow cinematic pace
		let   bankAngle       = 0;  // smoothed bank, persists across frames
		const _right   = new THREE.Vector3();
		const _up      = new THREE.Vector3();
		const _forward = new THREE.Vector3();
		const _nextFwd = new THREE.Vector3();
		const _camTgt  = new THREE.Vector3();
		const _lookAt  = new THREE.Vector3();
		const _rotMat  = new THREE.Matrix4();
		const _tQuat   = new THREE.Quaternion();
		const _bankQ   = new THREE.Quaternion();

		function animate() {
			rafId = requestAnimationFrame(animate);
			const dt = clock.getDelta();
			phaseT += dt;
			cloudMesh.rotation.y += dt * 0.018;

			if (phase === 0) {
				// Orbit while Earth is displayed — faster so India comes into view
				camTheta += dt * 0.25;
				camDist += (CAM_D - camDist) * dt * 2.0; // ease back to full distance
				camera.position.set(
					camDist * Math.sin(camTheta),
					camDist * 0.35,
					camDist * Math.cos(camTheta)
				);
				camera.lookAt(0, 0, 0);
				if (phaseT > 2.5) {
					phase = 1; phaseT = 0;
					setStatus(phaseStatus[1]);
				}

			} else if (phase === 1) {
				// Continuous loop — wraps around so the plane circles endlessly
				const loopT = (phaseT % FLIGHT_DURATION) / FLIGHT_DURATION;

				// ── Position ─────────────────────────────────────────────
				const pos = flightCurve.getPoint(loopT);
				plane.position.copy(pos);

				// ── Orientation ──────────────────────────────────────────
				// forward  = direction of travel (curve tangent)
				// earthNorm = outward from Earth centre (defines "up" for the aircraft)
				// right    = perpendicular to both, points to right wing
				// up       = recomputed so it is exactly perpendicular to forward
				flightCurve.getTangent(loopT, _forward).normalize();

				const earthNorm = pos.clone().normalize();

				_right.crossVectors(earthNorm, _forward).normalize();
				_up.crossVectors(_forward, _right).normalize();

				// Banking — measure how much the path curves left/right
				// by comparing the tangent a tiny step ahead
				const ahead = (loopT + 0.006) % 1;
				flightCurve.getTangent(ahead, _nextFwd).normalize();

				const turnRate   = _nextFwd.clone().sub(_forward).dot(_right);
				const targetBank = THREE.MathUtils.clamp(turnRate * 22, -0.6, 0.6);
				// Low-pass filter the bank so it never snaps
				bankAngle += (targetBank - bankAngle) * (dt * 3.5);

				// Build rotation matrix: X=forward, Y=up, Z=-right (right-hand)
				_rotMat.makeBasis(_forward, _up, _right.clone().negate());
				_tQuat.setFromRotationMatrix(_rotMat);

				// Roll the plane around its forward axis by bankAngle
				_bankQ.setFromAxisAngle(_forward, bankAngle);
				_tQuat.premultiply(_bankQ);

				// Slerp current quaternion toward target — never a hard snap
				plane.quaternion.slerp(_tQuat, dt * 4.5);

				// ── Trail ────────────────────────────────────────────────
				updateTrail(pos);

				// ── Camera ───────────────────────────────────────────────────
				// Full-globe view: camera follows the plane from far enough
				// back to see the whole Earth, slightly elevated for a 3/4 angle.
				camDist += (CAM_D_FLY - camDist) * dt * 1.2;

				_camTgt.copy(earthNorm)
					.multiplyScalar(camDist)
					.add(new THREE.Vector3(0, camDist * 0.35, 0));
				camera.position.lerp(_camTgt, dt * 1.0);
				camera.lookAt(0, 0, 0);

			}

			renderer.render(scene, camera);
		}
		animate();

		// ── Resize ─────────────────────────────────────────────────────────
		const onResize = () => {
			const w = mount.clientWidth, h = mount.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		window.addEventListener('resize', onResize);

		// ── Cleanup ────────────────────────────────────────────────────────
		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('resize', onResize);
			renderer.dispose();
			if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
		};
	}, []);

	return (
		<div style={{ position: 'relative', width: '100%', height: '100vh', background: '#000008' }}>
			<div ref={mountRef} style={{ width: '100%', height: '100%' }} />
			<div style={{
				position: 'absolute',
				bottom: '40px',
				left: '50%',
				transform: 'translateX(-50%)',
				color: '#fff',
				fontFamily: 'Georgia, serif',
				fontSize: '18px',
				fontWeight: 600,
				letterSpacing: '4px',
				textTransform: 'uppercase',
				textShadow: '0 0 30px rgba(80,160,255,0.9), 0 2px 6px #000',
				pointerEvents: 'none',
				whiteSpace: 'nowrap',
			}}>
				{status}
			</div>
		</div>
	);
}
