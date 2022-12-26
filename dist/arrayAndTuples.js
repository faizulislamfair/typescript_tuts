"use strict";
var pokemons = ['Arceus', 'Dialga', 'Palkia'];
pokemons.push('Giratina');
var newPokemons = pokemons.map(function (pokemon, i) { return i + 1 + '. ' + pokemon; });
console.log(pokemons, newPokemons);
