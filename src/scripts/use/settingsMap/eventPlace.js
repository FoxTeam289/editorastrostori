import { addClass, removeClass, hasClass } from '../toggleClass';
import { generateSky } from './generateSky';

let currentLang = 'ru_RU';

const createScript = (lang) => {
	const script = document.createElement('script');
	script.src = `https://api-maps.yandex.ru/2.1/?apikey=07002732-d0b5-4507-b9f9-f8f1b2b73381&lang=${lang}`;
	document.body.appendChild(script);

	script.onload = () => searchLocations();
};

const searchLocations = () => {
	const input = document.querySelector('input[name=event-city]');
	const list = document.querySelector('.event__list');
	const coords = document.querySelector('.stars__data-coords');
	const stars = document.querySelector('.stars__data-address');

	if (!input && !list && !coords) return;

	const listLoading = list.querySelector('.event__list-loading');
	const listEmpty = list.querySelector('.event__list-empty');
	const listScroll = list.querySelector('.event__list-scroll');
	const attributes = listScroll.querySelector('li').attributes;

	const closeList = () => {
		removeClass(input.parentElement, 'show');
		removeClass(list, 'show');

		setTimeout(() => {
			listScroll.innerHTML = '';
			removeClass(listLoading, 'hide');
		}, 100);
	};

	document.body.addEventListener('click', (event) => {
		if (!hasClass(list, 'show')) return;

		const isClickInsideList = list.contains(event.target);
		const isClickInsideInput = input.contains(event.target);

		if (!isClickInsideList && !isClickInsideInput) {
			closeList();
			input.value = '';
		}
	});

	input.addEventListener('input', (evt) => {
		const value = evt.target.value;

		if (value === '') {
			closeList();
			return;
		}

		addClass(input.parentElement, 'show');
		addClass(list, 'show');

		ymaps.geocode(value, { results: 10 }).then((res) => {
			listScroll.innerHTML = '';

			!res.geoObjects.events.typesCount ? removeClass(listEmpty, 'hide') : addClass(listEmpty, 'hide');

			res.geoObjects.each((obj) => {
				const li = document.createElement('li');
				li.textContent = obj.getAddressLine();
				li.className = 'qwe';

				for (let i = 0; i < attributes.length; i++) {
					const attr = attributes[i];
					li.setAttribute(attr.name, attr.value);
				}

				li.addEventListener('click', () => {
					const coordinates = obj.geometry.getCoordinates();
					const text = li.innerHTML;

					coords.innerHTML = `${Math.floor(coordinates[0] * 100) / 100}&deg;N&nbsp;${Math.floor(coordinates[1] * 100) / 100}&deg;E`;
					stars.innerHTML = text;

					window.localStorage.setItem('lat', coordinates[0]);
					window.localStorage.setItem('lon', coordinates[1]);
					generateSky();

					closeList();

					setTimeout(() => {
						evt.target.value = text;
						removeClass(listLoading, 'hide');
					}, 100);
				});

				listScroll.insertAdjacentElement('beforeend', li);

				setTimeout(() => addClass(listLoading, 'hide'), 100);
			});
		});
	});
};

const loadMapApi = (lang = currentLang) => {
	createScript(lang);
};

export const eventPlace = () => {
	loadMapApi();

	const changeLangButton = document.querySelector('#changeLangButton');
	if (!changeLangButton) return;

	changeLangButton.addEventListener('click', () => (currentLang === 'ru_RU' ? loadMapApi('en_US') : loadMapApi()));
};
