'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

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

		// ── Earth texture ──────────────────────────────────────────────────
		function makeEarthTexture() {
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

		const R = 2;
		const earthMesh = new THREE.Mesh(
			new THREE.SphereGeometry(R,64,64),
			new THREE.MeshPhongMaterial({ map: makeEarthTexture(), shininess: 20, specular: new THREE.Color(0x113366) })
		);
		scene.add(earthMesh);
		scene.add(new THREE.Mesh(new THREE.SphereGeometry(R*1.015,48,48), new THREE.MeshPhongMaterial({ color:0x4488ff, transparent:true, opacity:0.08, side:THREE.FrontSide })));
		const cloudMesh = new THREE.Mesh(new THREE.SphereGeometry(R*1.006,48,48), new THREE.MeshPhongMaterial({ map:makeCloudTexture(), transparent:true, opacity:0.55, depthWrite:false }));
		scene.add(cloudMesh);

		// Lighting
		const sun = new THREE.DirectionalLight(0xfff5dd,1.8); sun.position.set(6,3,4); scene.add(sun);
		scene.add(new THREE.AmbientLight(0x223355, 2.5));
		const rim = new THREE.DirectionalLight(0x3366aa, 0.9); rim.position.set(-5,-2,-3); scene.add(rim);

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
		earthMesh.add(markerG); markerG.visible = false;

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
		earthMesh.add(opera); opera.visible = false;

		// ── Airplane ───────────────────────────────────────────────────────
		function buildPlane() {
			const g = new THREE.Group();
			const wm = new THREE.MeshPhongMaterial({ color:0xeeeeee, shininess:120 });
			const em = new THREE.MeshPhongMaterial({ color:0x777777, shininess:180 });
			const bm = new THREE.MeshPhongMaterial({ color:0x1a3a8a });

			const body = new THREE.Mesh(new THREE.CylinderGeometry(0.022,0.016,0.3,10), wm);
			body.rotation.z = Math.PI/2; g.add(body);
			const nose = new THREE.Mesh(new THREE.ConeGeometry(0.022,0.07,10), wm);
			nose.rotation.z = -Math.PI/2; nose.position.x = 0.18; g.add(nose);
			const tailCone = new THREE.Mesh(new THREE.ConeGeometry(0.016,0.05,10), wm);
			tailCone.rotation.z = Math.PI/2; tailCone.position.x = -0.175; g.add(tailCone);

			const wShape = new THREE.Shape();
			wShape.moveTo(0.02,0); wShape.lineTo(-0.14,-0.1); wShape.lineTo(-0.16,-0.1); wShape.lineTo(-0.04,0);
			const wGeo = new THREE.ShapeGeometry(wShape);
			const wR = new THREE.Mesh(wGeo, wm); wR.rotation.x = Math.PI/2; g.add(wR);
			const wL = wR.clone(); wL.scale.z = -1; g.add(wL);

			[-1,1].forEach(side => {
				const wl = new THREE.Mesh(new THREE.BoxGeometry(0.004,0.02,0.008), wm);
				wl.position.set(-0.13,0.01,side*0.1); wl.rotation.x=0.25*side; g.add(wl);
				const eng = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.045,8), em);
				eng.rotation.z=Math.PI/2; eng.position.set(-0.03,-0.01,side*0.065); g.add(eng);
			});

			const tf = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.045,0.004), wm);
			tf.position.set(-0.125,0.022,0); g.add(tf);
			const hs = new THREE.Mesh(new THREE.BoxGeometry(0.04,0.003,0.06), wm);
			hs.position.set(-0.135,0.008,0); g.add(hs);

			const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.0235,0.017,0.28,10), bm);
			stripe.rotation.z=Math.PI/2; stripe.position.x=0.005; stripe.scale.set(1,0.08,1); g.add(stripe);
			const eGlow = new THREE.PointLight(0xff8822,0.5,0.3);
			eGlow.position.set(-0.03,-0.01,0); g.add(eGlow);
			return g;
		}
		const plane = buildPlane(); plane.visible = false; scene.add(plane);

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

		// ── Flight path: LA → UAE → India → Indonesia → NE Australia → Sydney
		// CatmullRomCurve3 with dense waypoints keeps the path above the surface.
		const ALT = R + 1.2; // cruise altitude
		const flightWaypoints = [
			ll2v3( 34, -118, R+1.5),  // Los Angeles (take-off)
			ll2v3( 38,  -90, ALT),    // Central USA
			ll2v3( 42,  -70, ALT),    // Eastern USA
			ll2v3( 45,  -50, ALT),    // W Atlantic
			ll2v3( 44,  -30, ALT),    // Mid Atlantic
			ll2v3( 40,  -10, ALT),    // near Portugal
			ll2v3( 36,   10, ALT),    // Mediterranean
			ll2v3( 30,   35, ALT),    // Middle East entry
			ll2v3( 25,   55, ALT),    // UAE / Dubai
			ll2v3( 19,   72, ALT),    // Mumbai / India W coast
			ll2v3( 12,   80, ALT),    // SE India
			ll2v3(  5,   95, ALT),    // Bay of Bengal
			ll2v3( -5,  110, ALT),    // Sumatra / Indonesia
			ll2v3(-10,  125, ALT),    // Java Sea
			ll2v3(-15,  138, R+1.0),  // Timor Sea
			ll2v3(-17,  146, R+0.8),  // NE Australia – Cairns
			sydPos.clone().normalize().multiplyScalar(R + 0.04), // Sydney
		];
		const flightCurve = new THREE.CatmullRomCurve3(flightWaypoints, false, 'catmullrom', 0.5);

		// ── Animation loop ─────────────────────────────────────────────────
		const clock = new THREE.Clock();
		// camTheta ≈ 0.2 faces the Americas/USA side of the globe
		let phase = 0, phaseT = 0, camTheta = 0.2;
		const CAM_D = 5.5;
		let rafId;

		const phaseStatus = ['EARTH','LOS ANGELES → DUBAI → INDIA → SYDNEY','APPROACHING SYDNEY...','WELCOME TO AUSTRALIA ✈'];

		function animate() {
			rafId = requestAnimationFrame(animate);
			const dt = clock.getDelta();
			phaseT += dt;
			cloudMesh.rotation.y += dt * 0.018;

			if (phase === 0) {
				camTheta += dt * 0.18;
				camera.position.set(CAM_D*Math.sin(camTheta), CAM_D*0.35, CAM_D*Math.cos(camTheta));
				camera.lookAt(0,0,0);
				if (phaseT > 2.5) { phase=1; phaseT=0; plane.visible=true; setStatus(phaseStatus[1]); }

			} else if (phase === 1) {
				const prog = Math.min(phaseT/11, 1);
				const ease = prog<0.5 ? 2*prog*prog : -1+(4-2*prog)*prog;
				const pos = flightCurve.getPoint(ease);
				const tan = flightCurve.getTangent(ease).normalize();
				plane.position.copy(pos);
				plane.quaternion.setFromUnitVectors(new THREE.Vector3(1,0,0), tan);
				updateTrail(pos);
				const back = tan.clone().negate().multiplyScalar(1.0+(1-ease)*2.5);
				camera.position.lerp(pos.clone().add(back).add(new THREE.Vector3(0,0.35,0)), 0.04);
				camera.lookAt(pos);
				if (prog >= 1) { phase=2; phaseT=0; setStatus(phaseStatus[2]); }

			} else if (phase === 2) {
				if (phaseT > 0.8) {
					markerG.visible=true; opera.visible=true; plane.visible=false;
					if (trailMesh) { scene.remove(trailMesh); trailMesh=null; }
					phase=3; phaseT=0; setStatus(phaseStatus[3]);
				}

			} else if (phase === 3) {
				earthMesh.rotation.y += dt*0.04;
				const pulse=(Math.sin(phaseT*2.5)+1)/2;
				ring2Mesh.scale.setScalar(1+pulse*0.6);
				mkMat2.opacity=0.4-pulse*0.35;
				mkMat1.opacity=0.7+pulse*0.3;
				camTheta += dt*0.12;
				camera.position.lerp(new THREE.Vector3(CAM_D*0.8*Math.sin(camTheta), CAM_D*0.3, CAM_D*0.8*Math.cos(camTheta)), 0.015);
				camera.lookAt(0,0,0);
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
