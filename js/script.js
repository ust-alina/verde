"use strict"


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('popup_form_request');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				var elem = document.getElementById('popup_form_info');
                elem.innerHTML = "Спасибо за отправленную заявку, специалист свяжется с вами в ближайшее время.";
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			let elem = document.getElementById('popup_form_info');
			elem.innerHTML = "Заполните обязательные поля";
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('._email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('._tel')) {
					if (telTest(input)) {
						formAddError(input);
						error++;
					}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	//Функция теста телефона
	function telTest(input) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
	}


});


/*--------------ЗАЯВКА НА ПОДБОР--------------*/


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('verde_bid_form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail_zajavka_podbor.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				var elem = document.getElementById('verde_bid_form_info');
                elem.innerHTML = "Спасибо за отправленную заявку, специалист свяжется с вами в ближайшее время.";
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			let elem = document.getElementById('verde_bid_form_info');
			elem.innerHTML = "Заполните обязательные поля";
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req_bid');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('._email_bid')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('._tel_bid')) {
					if (telTest(input)) {
						formAddError(input);
						error++;
					}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	//Функция теста телефона
	function telTest(input) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
	}


});

/*--------------ОТВЕТЫ--------------*/


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('verde_que_form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail_que.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				var elem = document.getElementById('verde_que_form_info');
                elem.innerHTML = "Спасибо за отправленную заявку, специалист свяжется с вами в ближайшее время.";
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			let elem = document.getElementById('verde_que_form_info');
			elem.innerHTML = "Заполните обязательные поля";
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req_que');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('._email_que')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('._tel_que')) {
					if (telTest(input)) {
						formAddError(input);
						error++;
					}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	//Функция теста телефона
	function telTest(input) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
	}


});


/*--------------Нижняя форма--------------*/


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('see_block_form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail_bottom.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				var elem = document.getElementById('see_block_form_info');
                elem.innerHTML = "Спасибо за отправленную заявку, специалист свяжется с вами в ближайшее время.";
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			let elem = document.getElementById('see_block_form_info');
			elem.innerHTML = "Заполните обязательные поля";
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req_see');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('._email_see')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('._tel_see')) {
					if (telTest(input)) {
						formAddError(input);
						error++;
					}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	//Функция теста телефона
	function telTest(input) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
	}


});


/*--------------Большая--------------*/


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('visual_form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail_big.php', {
				method: 'POST',
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				var elem = document.getElementById('visual_form_info');
                elem.innerHTML = "Спасибо за отправленную заявку, специалист свяжется с вами в ближайшее время.";
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			let elem = document.getElementById('visual_form_info');
			elem.innerHTML = "Заполните обязательные поля";
		}

	}


	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req_visual');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('._email_visual')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.classList.contains('._tel_visual')) {
					if (telTest(input)) {
						formAddError(input);
						error++;
					}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	//Функция теста email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
	//Функция теста телефона
	function telTest(input) {
		return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(input.value);
	}
//Получаем инпут file в переменную
const formImage = document.getElementById('formImage');
//Получаем див для превью в переменную
const formPreview = document.getElementById('formPreview');

//Слушаем изменения в инпуте file
formImage.addEventListener('change', () => {
	uploadFile(formImage.files[0]);
});

function uploadFile(file) {
	// провераяем тип файла
	if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
		alert('Разрешены только изображения.');
		formImage.value = '';
		return;
	}
	// проверим размер файла (<2 Мб)
	if (file.size > 2 * 1024 * 1024) {
		alert('Файл должен быть менее 2 МБ.');
		return;
	}

	var reader = new FileReader();
	reader.onload = function (e) {
		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
	};
	reader.onerror = function (e) {
		alert('Ошибка');
	};
	reader.readAsDataURL(file);
}

});