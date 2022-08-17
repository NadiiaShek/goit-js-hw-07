import { galleryItems } from './gallery-items.js'

console.log(galleryItems)
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})

gallery.append(...items)

gallery.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})



   


// // Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// // Реализация делегирования на div.gallery и получение url большого изображения.
// // Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// // Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// // Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// // Разметка элемента галереи
// // Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе <img>, и указываться в href ссылки. Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.
// /* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// // Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна. */