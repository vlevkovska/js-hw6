// Задача 1 (варіант 1)
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  orderedItems.forEach((element) => {
    totalPrice += element;
  });

  // Пиши код выше этой строки
  return totalPrice;
}

// Задача 1 (варіант 2)
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  orderedItems.forEach(function (element) {
    totalPrice += element;
  });

  // Пиши код выше этой строки
  return totalPrice;
}

// Задача 2
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
}

// Задача 3
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach(function (element) {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

// Задача 4
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
};

// Задача 5
// Пиши код ниже этой строки
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки

// Задача 6
// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

// Задача 7
// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
};

// Задача 8
// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};

//Задача 9
function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newNumbers = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number = number + value;
      newNumbers.push(number);
    } else if (number % 2 !== 0) {
      newNumbers.push(number);
    }
  });
  return newNumbers;
  // Пиши код выше этой строки
}

// Задача 10
const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);

// Задача 11
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const titles = books.map((book) => book.title);

// Задача 12
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];
// Пиши код ниже этой строки

const genres = books.flatMap((book) => book.genres);

// Задача 13
// Пиши код ниже этой строки
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
// Пиши код выше этой строки

// Задача 14
// Пиши код ниже этой строки
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
// Пиши код выше этой строки

// Задача 15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// Задача 16
const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index
);

// Задача 17
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// Задача 18
// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
// Пиши код выше этой строки

// Задача 19
// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(({ age }) => age >= minAge && age < maxAge);
};
// Пиши код выше этой строки

// Задача 20
// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

// Пиши код выше этой строки

// Задача 21
// Пиши код ниже этой строки
const getFriends = (users) => {
  const friends = users.flatMap((users) => users.friends);
  const uniqueFriends = friends.filter(
    (friends, index, array) => array.indexOf(friends) === index
  );
  return uniqueFriends;
};
// Пиши код выше этой строки

// Задача 22
// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive === true);
};
// Пиши код выше этой строки

// Задача 23
// Пиши код ниже этой строки
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};
// Пиши код выше этой строки

// Задача 24
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

// Задача 25
// Пиши код ниже этой строки
const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};
// Пиши код выше этой строки

// Задача 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);
const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// Задача 27
// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive);
};
// Пиши код выше этой строки

// Задача 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// Задача 29
// Пиши код ниже этой строки
const isAnyUserActive = (users) => {
  return users.some((user) => user.isActive);
};
// Пиши код выше этой строки

// Задача 30
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number;
});

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

// Задача 31
const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (total, player) => total + player.playtime / player.gamesPlayed,
  0
);

// Задача 32
// Пиши код ниже этой строки
const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки

// Задача 33
// Пиши код ниже этой строки
const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};
// Пиши код выше этой строки

// Задача 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

// Задача 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// Задача 36
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// Задача 37
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

// Задача 38
// Пиши код ниже этой строки
const sortByAscendingBalance = (users) => {
  const balance = [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance
  );
  return balance;
};
// Пиши код выше этой строки

// Задача 39
// Пиши код ниже этой строки
const sortByDescendingFriendCount = (users) => {
  const numberOfFriends = [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
  return numberOfFriends;
};
// Пиши код выше этой строки

// Задача 40
// Пиши код ниже этой строки
const sortByName = (users) => {
  const sortedByName = [...users].sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(secondUser.name)
  );
  return sortedByName;
};
// Пиши код выше этой строки

// Задача 41
const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .filter((book) => book.rating >= MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort(books.author);

// Задача 42
// Пиши код ниже этой строки
const getNamesSortedByFriendCount = (users) => {
  const numberOfFriends = [...users]

    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map((user) => user.name);
  return numberOfFriends;
};
// Пиши код выше этой строки

// Задача 43
// Пиши код ниже этой строки
const getSortedFriends = (users) => {
  const friends = [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
  return friends;
};
// Пиши код выше этой строки

// Задача 44
// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  const totalBalanceByGender = [...users]
    .filter((user) => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
  return totalBalanceByGender;
};
// Пиши код выше этой строки
