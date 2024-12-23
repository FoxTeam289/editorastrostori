import { skys } from './skys';
import { hasClass, addClass, removeClass } from '../toggleClass';
import { addSelect } from '../addSelect';
import { generateSky } from './generateSky';

const els = document.querySelectorAll('[data-design-el]');
const elsStand = document.querySelectorAll('[data-design-stand-el]');
const sky = document.querySelector('[data-sky]');
const transparentSky = 'transparent';
const time = 550;

const activeStand = (status, productsWrapper, data, designStandEl) => {
	const stand = document.querySelector('[data-design-stand]');

	if (!stand && !elsStand.length) return;

	if (status) {
		addClass(stand, 'active');

		elsStand.forEach((el) => {
			if (el.checked) {
				updateSky(designStandEl);
				data[el.name] = el.dataset.designStandEl;
				addSelect({ productsWrapper, data });
			}
		});

		return;
	}

	removeClass(stand, 'active');
	delete data['stand-type'];
};

const updateSky = (design) => {
	if (!sky) return;

	const typeSky = skys[design === transparentSky ? 'white' : design];

	design === transparentSky ? addClass(sky, transparentSky) : removeClass(sky, transparentSky);

	!hasClass(sky, transparentSky) && sky.getAttribute(`data-${transparentSky}`) && sky.removeAttribute(`data-${transparentSky}`);

	if (!typeSky) return;

	// addClass(sky, 'hide');
	// generateSky();

	console.log(sky);

	// setTimeout(() => {
	// 	sky.innerHTML = typeSky;

	// 	setTimeout(() => removeClass(sky, 'hide'), time / 2);
	// }, time / 2);
};

const changeColorStand = (design) => {
	if (!sky) return;

	hasClass(sky, transparentSky) && sky.setAttribute(`data-${transparentSky}`, design);
};

export const changeDesignSky = (productsWrapper, data) => {
	const design = document.querySelector('[data-design]');

	if (!design && !els.length && !elsStand.length) return;

	els.forEach((el) => {
		const {
			checked,
			dataset: { designEl }
		} = el;

		if (checked) {
			designEl === transparentSky ? activeStand(true, productsWrapper, data, designEl) : activeStand(false, productsWrapper, data, designEl);
		}

		el.addEventListener('change', () => {
			const {
				dataset: { designEl }
			} = el;

			designEl === transparentSky ? activeStand(true, productsWrapper, data, designEl) : activeStand(false, productsWrapper, data, designEl);

			updateSky(designEl);

			addClass(design, 'hide');
			setTimeout(() => removeClass(design, 'hide'), time);

			data[el.name] = designEl;
			addSelect({ productsWrapper, data });
		});
	});

	elsStand.forEach((el) => {
		const {
			dataset: { designStandEl }
		} = el;

		el.addEventListener('change', () => {
			changeColorStand(designStandEl);

			data[el.name] = designStandEl;
			addSelect({ productsWrapper, data });
		});
	});
};
