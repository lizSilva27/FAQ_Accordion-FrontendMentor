document.addEventListener("DOMContentLoaded", function () {

	const toggleButtons = document.querySelectorAll('.toggleButton');
	let lastOpenedContent = null;

	toggleButtons.forEach(function (button) {

		button.addEventListener('click', function () {

			const contentId = this.getAttribute('data-target');
			const content = document.querySelector(`#${contentId}`);
			const icon = this.querySelector('img');

			if (content && icon) {
				
				// OCULTAR EL ÚLTIMO CONTENIDO EN CASO DE EXISTIR
				if (lastOpenedContent && lastOpenedContent !== content) {
					lastOpenedContent.classList.add('hidden');
					// RESTAURAR EL ICONO DEL ÚLTIMO BOTÓN CLIKADO
					const lastButton = document.querySelector(`[data-target="${lastOpenedContent.id}"]`);
					if (lastButton) {
						const lastIcon = lastButton.querySelector('img');
						if (lastIcon) {
							lastIcon.src = './img/icon-plus.svg';
						}
					}
				}

				// MOSTRAR EL CONTENIDO Y CAMBIAR EL ICONO SOLO PARA EL BOTÓN ACTUAL
				content.classList.toggle('hidden');
				icon.src = content.classList.contains('hidden') ? './img/icon-plus.svg' : './img/icon-minus.svg';

				// ACTUALIZAR EL ÚLTIMO CONTENIDO ABIERTO
				if (!content.classList.contains('hidden')) {
					lastOpenedContent = content;
				} else {
					lastOpenedContent = null;
				}
			}
		});
	});
});