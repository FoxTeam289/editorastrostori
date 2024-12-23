const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const generateSky = () => {
	const settings = {
		lat: Number(window.localStorage.getItem('lat')) ? Number(window.localStorage.getItem('lat')) : 0,
		lon: Number(window.localStorage.getItem('lon')) ? Number(window.localStorage.getItem('lon')) : 0,
		month: Number(window.localStorage.getItem('month')) ? Number(window.localStorage.getItem('month')) : 1,
		day: Number(window.localStorage.getItem('day')) ? Number(window.localStorage.getItem('day')) : 1,
		year: Number(window.localStorage.getItem('year')) ? Number(window.localStorage.getItem('year')) : 1970,
		minutes: Number(window.localStorage.getItem('minutes')) ? Number(window.localStorage.getItem('minutes')) : '00',
		seconds: Number(window.localStorage.getItem('seconds')) ? Number(window.localStorage.getItem('seconds')) : '00'
	};

	const date = new Date(`${settings.month > 12 ? 1 : months[settings.month - 1]} ${settings.day > 31 ? 1 : settings.day}, ${settings.year} ${settings.minutes}:${settings.seconds}:00`);

	const planetarium = S.virtualsky({
		id: 'starmap',
		projection: 'fisheye',
		latitude: settings.lat,
		longitude: settings.lon,
		clock: date,
		background: 'rgba(0,0,0,0)',
		transparent: false,
		az: 0,
		gradient: false,
		ground: false,
		keyboard: false,
		mouse: false,
		cardinalpoints: false,
		constellations: true,
		constellationlabels: false, // showConstellationLabels
		constellationwidth: 2.6, // 3.6
		scalestars: 10, // 15
		showplanets: false,
		showstars: true,
		showstarlabels: false, // showConstellationLabels
		showdate: false,
		showposition: false,
		gridlines_az: false,
		gridlines_eq: false,
		gridlines_gal: false,
		gridstep: 40,
		live: false,
		fontsize: '11px'
	});

	const canvas = document.querySelector('#starmap');

	const children = [...canvas.children];
	const divElements = children.filter((child) => child.tagName.toLowerCase() === 'div');

	setTimeout(() => divElements.forEach((el) => canvas.removeChild(el)), 500);
};
