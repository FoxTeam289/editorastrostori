import { addSelect } from '../addSelect';
import { generateSky } from './generateSky';

export const eventDate = (productsWrapper, data) => {
	const stars = document.querySelector('.stars__data-date');
	const day = document.querySelector('input[name=day]');
	const month = document.querySelector('input[name=month]');
	const year = document.querySelector('input[name=year]');
	const minutes = document.querySelector('input[name=minutes]');
	const seconds = document.querySelector('input[name=seconds]');
	const action = document.querySelector('.event__time-action');

	const els = [day, month, year, minutes, seconds];

	els.forEach((el) => {
		el.addEventListener('input', () => {
			console.log(el.value);
			data[el.name] = el.value;
			addSelect({ productsWrapper: productsWrapper, data: data });

			const date = `${data.day ? data.day : ''}.${data.month ? data.month : ''}.${data.year ? data.year : ''}`;
			const time = `${data.minutes ? data.minutes : ''}:${data.seconds ? data.seconds : ''}`;

			window.localStorage.setItem(el.id, el.value);
			generateSky();

			stars.innerHTML = `<span>${date}</span><span class="hide" data-time>&nbsp;${time !== ':' ? time : ''}</span>`;
		});
	});

	action.addEventListener('click', () => {
		const time = document.querySelector('[data-time]');

		if (!time) return;

		time.classList.toggle('hide');
	});
};
