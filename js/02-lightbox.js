import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []
galleryItems.forEach(element => {
    const galleryLink = document.createElement('a')
    galleryLink.className = 'gallery__link'
    galleryLink.href = element.original
    const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview
    galleryImage.setAttribute('title', element.description)
    galleryImage.alt = element.description

    galleryLink.append(galleryImage)
    items.push(galleryLink)
})
gallery.append(...items)

new SimpleLightbox('.gallery a', {
    captionDelay: 250
})



// const gallery = document.querySelector('.gallery')
// const items = []

// galleryItems.forEach(element => {
// 	const galleryLink = document.createElement('a')
// 	galleryLink.className = 'gallery__link'
// 	galleryLink.href = element.original
// 	const galleryImage = document.createElement('img')
// 	galleryImage.className = 'gallery__image'
// 	galleryImage.src = element.preview
// 	galleryImage.setAttribute('title', element.description)
// 	galleryImage.alt = element.description

// 	galleryLink.append(galleryImage)
// 	items.push(galleryLink)
// })
// gallery.append(...items)

// new SimpleLightbox('.gallery a', {
// 	captionDelay: 250
// })


// // Задание 2 - библиотека SimpleLightbox

// // Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.
// Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.