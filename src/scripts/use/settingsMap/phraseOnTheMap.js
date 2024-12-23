import { addSelect } from '../addSelect';

export const phraseOnTheMap = (productsWrapper, data) => {
	const stars = document.querySelector('.stars__data-text');
	const select = document.querySelector('[data-select]');
	const inputText = document.querySelector('[data-input-text=phrase-on-the-map]');

	if (!stars && !select && !inputText) return;

	const head = select.querySelector('[data-select-head]');
	const headText = head.querySelector('span');
	const body = select.querySelector('[data-select-body]');
	const els = select.querySelectorAll('[data-select-el]');

	const headTextOld = headText.innerHTML;

	const toggleSelect = (remove = false) => {
		if (remove) {
			select.classList.remove('show');
			body.classList.remove('show');
		} else {
			select.classList.toggle('show');
			body.classList.toggle('show');
		}
	};

	const addTextsInData = (text) => {
		data[inputText.name] = text;
		addSelect({ productsWrapper: productsWrapper, data: data });
	};

	head.addEventListener('click', () => toggleSelect());

	els.forEach((el) => {
		el.addEventListener('click', () => {
			toggleSelect(true);

			const text = el.dataset.selectEl;
			headText.innerHTML = text;
			stars.innerHTML = text;

			addTextsInData(text);
		});
	});

	inputText.addEventListener('input', () => {
		const texts = inputText.value.split('\n');

		data[inputText.name] = inputText.value;
		addSelect({ productsWrapper: productsWrapper, data: data });
		headText.innerHTML !== headTextOld && (headText.innerHTML = headTextOld);

		stars.innerHTML = texts.map((line) => `<br>${line}`).join('');
	});
};
