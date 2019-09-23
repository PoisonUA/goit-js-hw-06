'use strict';

import users from './users.js';

// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(itemOf => itemOf.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) => users.filter(itemOf => color == itemOf.eyeColor);
console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => users.filter(itemOf => itemOf.gender == gender).map(itemOf => itemOf.name);
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => users.filter(itemOf => !itemOf.isActive);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => users.find(itemOf => itemOf.email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => users.filter(itemOf => itemOf.age > min && itemOf.age < max);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => users.reduce((summ, itemOf) => summ + itemOf.balance, 0)
console.log(calculateTotalBalance(users)); // 20916


// Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => users.filter(itemOf => itemOf.friends.includes(friendName)).map(itemOf => itemOf.name);
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => users.sort((itemOfOne, itemOfTwo) => itemOfOne.friends.length - itemOfTwo.friends.length).map(itemOf => itemOf.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
const getSortedUniqueSkills = users => users.reduce((full, itemOf) => {full.push(...itemOf.skills); return full}, [])
                                            .reduce((alluniq, itemOf) => {return alluniq.includes(itemOf) ? alluniq : [...alluniq, itemOf]}, []).sort();
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 