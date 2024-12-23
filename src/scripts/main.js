import { blocksChecking } from './use/blocksChecking';
import { checkForActivity } from './use/settingsMap/checkForActivity';
import { addMount } from './use/settingsMap/addMount';
import { changeDesignSky } from './use/settingsMap/changeDesignSky';
import { changeSizes } from './use/settingsMap/changeSizes';
import { eventName } from './use/settingsMap/eventName';
import { eventDate } from './use/settingsMap/eventDate';
import { phraseOnTheMap } from './use/settingsMap/phraseOnTheMap';
import { typeMap } from './use/settingsMap/typeMap';
import { eventPlace } from './use/settingsMap/eventPlace';
import { generateSky } from './use/settingsMap/generateSky';

const { productsWrapper, priceValue } = blocksChecking('.t762');

const totalPrice = document.querySelector('.add-bag');
const inputs = document.querySelectorAll('[data-input]');
const inputsText = document.querySelectorAll('[data-input-text]');
const data = {};
const dataPrice = {};

const convertAndPrint = () => {
	const svgElement = document.querySelector('.stars svg');
	if (!svgElement) return;

	const design = data['design-type'] !== 'white' ? '#000000' : '#ffffff';
	const size = data.size.split('x');
	const quality = size[1] > 50 ? 260 : 300;

	domtoimage
		.toPng(svgElement, { quality: 1.0, width: size[0] * quality, height: size[1] * quality, bgcolor: design })
		.then(function (dataUrl) {
			const downloadLink = document.createElement('a');
			downloadLink.href = dataUrl;
			downloadLink.download = `${data.size}.png`;

			document.body.appendChild(downloadLink);
			downloadLink.click();
			document.body.removeChild(downloadLink);
		})
		.catch(function (error) {
			console.error('Произошла ошибка при преобразовании SVG в изображение:', error);
		});
};

export const main = () => {
	checkForActivity(productsWrapper, data);
	addMount(productsWrapper, data);
	changeDesignSky(productsWrapper, data);
	changeSizes(productsWrapper, data);
	eventName(productsWrapper, data);
	eventDate(productsWrapper, data);
	phraseOnTheMap(productsWrapper, data);
	typeMap(productsWrapper, data);
	eventPlace();
	generateSky();

	totalPrice.addEventListener('click', () => {
		convertAndPrint();
	});
};
