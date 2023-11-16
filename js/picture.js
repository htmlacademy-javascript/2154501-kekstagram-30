//поиск списка картинок
//const picturesList = document.querySelector('.pictures');
//поиск шаблона с id=picture и классом внутри тоже picture
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');
//console.dir(document.querySelector('#picture'));

//создаем новый элемент по шаблону, параметры передаем по деструкту
const createThumbnail = ({ url, description, likes, comments, id }) => {
  //клонируем узел с вложениями
  const element = templateFragment.cloneNode(true);
  //создаем переменную под каждое свойство
  const elementImage = element.querySelector('.picture__img');
  const elementLikes = element.querySelector('.picture__likes');
  const elementComments = element.querySelector('.picture__comments');
  //передаем переменные в свойства вновь созданного элемента из шаблона
  elementImage.src = url;
  elementImage.alt = description;
  elementLikes.textContent = likes;
  elementComments.textContent = comments.length;
  element.dataset.thumbnailId = id;
  //добавляем в коробочку каждое изображение
  return element;
};

const renderThumbnails = (pictures, picturesList) => {
  //создаем коробочку
  const fragment = document.createDocumentFragment();
  //для каждого элемента массива фоток создаем миниатюру и кладем в коробочку
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  //только после создания всех миниатюр в коробке переносим их на страницу
  picturesList.append(fragment);
};

export { renderThumbnails };
