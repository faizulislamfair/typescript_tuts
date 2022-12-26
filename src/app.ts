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


// enum Friends {
//     Duck,
//     Chicken,
//     Penguin
// }

// enum Configs {
//     API_Key = "api_key",
//     Domain_Name = "domain_name"
// }

// console.log(Friends.Penguin);



// function add(num1: number, num2: number): void {
//     console.log(num1 + num2);
// }

// add(10, 30);



// const add = (num1: number, num2: number, num3?: number): number => {
//     return num1 + num2 + num3!;
// }

// const result = add(10, 30, 15);

// console.log(result);


// type MyName = string | number;

// let myName: MyName = 'Ataraxia';


// type arr = string[];

// const arr: arr = [""];


// type Person = {
//     name: string;
//     age: number;
//     phone: string | string[];
//     email: string;
//     address: {
//         presentAddress: string;
//         permanentAddress: string;
//     };
//     favorites: {
//         type: "food" | "player" | "singer" | "actor";
//         value: string;
//     }[];
// };


// const person: Person = {
//     name: "Hibernate",
//     email: 'fair@gmail.com',
//     age: 22,
//     phone: ['123'],
//     address: {
//         presentAddress: 'parijat',
//         permanentAddress: 'padma'
//     },
//     favorites: [
//         {
//             type: 'food',
//             value: 'Kacchi'
//         },
//         {
//             type: 'player',
//             value: 'Neymar'
//         }
//     ]
// }


// interface Person {
//     name: string;
//     email: string;
// }


// let person: Person = {
//    name: 'John',
//    email: 'john@example.com'
// }




interface Address {
    presentAddress: string;
    permanentAddress: string;
}

interface Favorite {
    type: "food" | "player" | "singer" | "actor";
    value: string;
}

interface Auth {
    isLoggedIn: boolean;
}

interface Person extends Auth {
    name: string;
    age: number;
    phone: string | string[];
    email: string;
    address: Address;
    favorites: Favorite[];
};

const person: Person = {
    name: "Hibernate",
    email: 'fair@gmail.com',
    age: 22,
    phone: ['123'],
    address: {
        presentAddress: 'parijat',
        permanentAddress: 'padma'
    },
    favorites: [
        {
            type: 'food',
            value: 'Kacchi'
        },
        {
            type: 'player',
            value: 'Neymar'
        }
    ],
    isLoggedIn: true,
}

