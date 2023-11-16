import { isEscapeKey } from './function.js';

const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.querySelector('body');
const closePictureButtonElement = bigPictureElement.querySelector('.big-picture__cancel');

const hidePicture = () =>{
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onClosePictureButtonClick = () => {
  hidePicture();
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePicture();
  }
}

const renderPicture = ({ url, description, likes }) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showPicture = (pictureData) => {
  bigPictureElement.classList.remove('hidden'); //картинка появляется
  bodyElement.classList.add('modal-open'); //модальное окно открывается
  document.addEventListener('keydown', onEscKeydown);
  renderPicture(pictureData);
};

closePictureButtonElement.addEventListener('click', onClosePictureButtonClick);

export { showPicture};


/*
//названия переменных берем по названию классов в HTML
const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const image = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const caption = bigPicture.querySelector('.social__caption');
const commentList = bigPicture.querySelector('.social__comments');
const commentItem = bigPicture.querySelector('.social__comment');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const commentsShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');


//по нажатию ESC делаем функцию закрытия большой картинки
const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseBigPicture();
  }
};

// функция закрытия большой картинки
function onCloseBigPicture () {
  bigPicture.classList.add('hidden'); // скрываем картинку
  body.classList.remove('modal-open'); //закрываем модальное окно
  document.removeEventListener('keydown', onPopupEscKeydown); //удаляем обработчик
}

//функция открытия большой картинки
const openBigPicture = () => {
  bigPicture.classList.remove('hidden'); //картинка появляется
  body.classList.add('modal-open'); //модальное окно открывается
  document.addEventListener('keydown', onPopupEscKeydown); //добавляем обработчик
};

//функция по нажатию на миниатюру
const onThumbnailClick = (thumbnail, pictureInfo) => {
  thumbnail.addEventListener('click', () => { //добавляем обработчик на клик
    image.src = pictureInfo.url; //подставляем src из url
    likesCount.textContent = pictureInfo.likes; //подставляем likes в текстовое содержимое элемента .likes-count
    caption.textContent = pictureInfo.description; //подставляем описание фотографии description строкой в блок .social__caption.
    //Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.
    commentsShownCount.textContent = pictureInfo.comments.length;
    //Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.
    commentsTotalCount.textContent = pictureInfo.comments.length;
    commentsCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');//пока скрываем, но доработаем в следующем задании

    commentList.textContent = ''; // обнуляем список комментов

    pictureInfo.comments.forEach(({avatar, name, message}) => {//обработка списка комментариев с деструктуризацией
      const commentElement = commentItem.cloneNode(true); //клонируем с вложениями
      //делаем разметку каждого комментария
      const commentImage = commentElement.querySelector('.social__picture'); //будущая аватарка юзера
      const commentText = commentElement.querySelector('.social__text'); //текст коммента
      //берем данные из деструктуризации
      commentImage.src = avatar; //аватар
      commentImage.alt = name; //имя комментатора
      commentText.textContent = message; //текст комментария

      commentList.append(commentElement); //добавляем в конец списка
    });

    openBigPicture(); //открываем большую картинку
  });
};

closeBigPictureButton.addEventListener('click', onCloseBigPicture);

export {onThumbnailClick};*/
