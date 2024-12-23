import { addSelect } from '../addSelect';

export const eventName = (productsWrapper, data) => {
	const stars = document.querySelector('.stars__data-address');
	const inputText = document.querySelector('[data-input-text=give-your-event-name]');

	if (!stars && !inputText) return;

	const starsValue = stars.innerHTML;

	inputText.addEventListener('input', (evt) => {
		const value = evt.target.value;

		data[evt.target.name] = value;
		addSelect({ productsWrapper: productsWrapper, data: data });

		value === '' ? (stars.innerHTML = starsValue) : (stars.innerHTML = evt.target.value);
	});
};
