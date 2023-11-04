
const NAMES = [
  'Вася',
  'Миха',
  'Андрей',
  'Петр',
  'Чел',
  'Виктор',
  'Всеволод',
  'Николай',
  'Александр',
  'Димас',
  'Евгений'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'На охоте',
  'В клубе',
  'С друзьями',
  'Встреча',
  'Отпуск',
  'На работе',
  'Дество',
  'Семья',
];

const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_MAX_COUNT = 30;
const POST_COUNT = 25;

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInt(0, elements.length - 1)];

function idGenerator () {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generateCommentsId = idGenerator();

function createComment() {
  return ({
    id: generateCommentsId(),
    avatar: `img/avatar-${getRandomInt(1, AVATAR_COUNT)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  });
}

const createPost = (index) => ({
  id: index,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInt(0, COMMENTS_MAX_COUNT)}, () => createComment()),
});

const createPage = () => Array.from({length: POST_COUNT},
  (_, postIndex) => createPost(postIndex + 1)
);

createPage();
