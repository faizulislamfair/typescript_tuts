"use strict";
// const message = "Hello TypeScript";
// const msg = 'Remember JavaScript?';
// console.log(message, msg, language);
// let myName: string = 'Fair';
// myName = 'Faizul';
// let age: number;
// age = 55;
// age = 155;
// let isPokemon: boolean;
// isPokemon = true;
// union types
// let category: number | string | boolean | [] | {};
// category = 25;
// category = 'Pokemon';
// category = false;
// category = {};
// category = [];
// let pokemons: string[] = ['Arceus', 'Dialga', 'Palkia'];
// pokemons.push('Giratina');
// const newPokemons = pokemons.map((pokemon, i) => i + 1 + '. ' + pokemon);
// console.log(pokemons, newPokemons);
// let colors: [string, string, number, boolean, string];
// colors = ['Cyan', 'Crimson', 555, true, 'Grey'];
// let pokemon: {
//     name: string;
//     weight?: number,
//     type: string;
//     megaForm: boolean;
//     moves?: string[];
// };
// pokemon = {
//     name: 'Dragonite',
//     weight: 210,
//     type: 'dragon',
//     megaForm: true,
//     moves: ['hyper beam']
// };
// pokemon = {
//     name: 'Dragonite',
//     // weight: 103,
//     type: 'dragon',
//     megaForm: true,
//     moves: ['draco meteor']
// };
// pokemon.megaForm = false;
// pokemon.moves = pokemon?.moves?.map(move => move.toUpperCase())
// console.log(pokemon, pokemon.type, pokemon['moves']);
var Friends;
(function (Friends) {
    Friends[Friends["Duck"] = 0] = "Duck";
    Friends[Friends["Chicken"] = 1] = "Chicken";
    Friends[Friends["Penguin"] = 2] = "Penguin";
})(Friends || (Friends = {}));
var Configs;
(function (Configs) {
    Configs["API_Key"] = "api_key";
    Configs["Domain_Name"] = "domain_name";
})(Configs || (Configs = {}));
console.log(Friends.Penguin);
