//поиск списка картинок
const picturesList = document.querySelector('.pictures');
//поиск шаблона
const templateFragment = document.querySelector('#picture .picture');

const drawPhotos = (photos) => {
  //коробка для хранения
  const fragment = document.createDocumentFragment();
  //заполняем шаблон
  photos.forEach(({ url, description, likes, comments }) => {
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
    //добавляем в коробочку каждое изображение
    fragment.appendChild(element);
  });
  //добавляем из коробочки в список
  picturesList.appendChild(fragment);
};

export { drawPhotos };
