"use strict";
// const message = "Hello TypeScript";
// const msg = 'Remember JavaScript?';
// console.log(message, msg, language);
var description = {};
var friends = ['duck', 'panda'];
var user = {
    name: 'user',
    email: 'user@example.com'
};
friends.forEach(function (item) {
    description[item] = item + 'is flying';
});
