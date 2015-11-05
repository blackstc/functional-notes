// .map(function (currentVal, index, array) { ... })

// Write a function that does the following:

// myFn([10,20,30]) >> [1,2,3]
// Divide each number by 10.

// myFn([10,20,30]) >> [30,10,20]
// Shift every number one forward. The first item in the returned array
// should be the last item in the input array.

// SOLUTION
// function myFn(array) {
//   return array.map(function(current, index, array) {
//     return array[index - 1] || array[array.length - 1];
//   });
// }

// console.log(myFn([10, 20, 30]));

// myFn(['average', 'exceptional', 'amazing']) >> ['aeae', 'eeioa', 'aai']
// Return just the vowels

// SOLUTION
// function myFn(array) {
//   return array.map(function(current, index, array) {
//     return current.replace(/[^aeiou]/ig, '');
//   });
// }
// console.log(myFn(['average', 'exceptional', 'amazing']));

// var myMatrix = [[1,2,3],
//                 [4,5,6],
//                 [7,8,9]];
// myFn(myMatrix) >> [ [ 2, 4, 6 ], [ 8, 10, 12 ], [ 14, 16, 18 ] ]
// Return the double of all numbers in the matrix, in the same format.

// SOLUTION
// function myFn(array) {
//   return array.map(function(current, index, array) {
//     return current.map(function(val, index, current) {
//       return val * 2;
//     });
//   });
// }
// console.log(myFn(myMatrix));


var wesFavoritePokemon = [{
  id: '38413e28-83ec-11e5-8bcf-feff819cdc9f',
  name: 'Crobat',
  type: ['Poison', 'Flying'],
  evolves: false,
  formerEvolutions: [{
    id: '38414792-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Golbat'
  },
  {
    id: '3841490e-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Zubat'
  }]
},
{
  id: '384141f2-83ec-11e5-8bcf-feff819cdc9f',
  name: 'Gengar',
  type: ['Ghost', 'Poison'],
  evolves: true,
  formerEvolutions: [{
    id: '38414fa8-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Haunter'
  },
  {
    id: '38415174-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Ghastly'
  }],
  nextEvolutions: [{
    id: '384152e6-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Mega Gengar'
  }]
},
{
  id: '3841444a-83ec-11e5-8bcf-feff819cdc9f',
  name: 'Jigglypuff',
  type: ['Normal', 'Fairy'],
  evolves: true,
  formerEvolutions: [{
    id: 'fda25954-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Igglybuff'
  }],
  nextEvolutions: [{
    id: 'fda25b2a-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Wigglytuff'
  }]
},
{
  id: '3841460c-83ec-11e5-8bcf-feff819cdc9f',
  name: 'Clefairy',
  type: ['Fairy'],
  evolves: true,
  formerEvolutions: [{
    id: 'fda262be-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Cleffa'
  }],
  nextEvolutions: [{
    id: 'fda2639a-83ec-11e5-8bcf-feff819cdc9f',
    name: 'Clefable'
  }]
}];

// myFn1(wesFavoritePokemon) >> ['Crobat', 'Gengar', 'Jigglypuff', 'Clefairy']
// Return the names of my favorite Pokemon

//SOLUTION
function fn1(array) {
  return array.map(function(pokemon) {
    return pokemon.name;
  });
}


// myFn2(wesFavoritePokemon) >> ['Poison', 'Ghost', 'Normal', 'Fairy']
// Return the first type of my favorite Pokemon

//SOLUTION
function fn2(array) {
  return array.map(function(pokemon) {
    return pokemon.type[0];
  });
}

// myFn3(wesFavoritePokemon) >> [{ 'Crobat': [], 'Gengar': [{ id: ..., name: 'Mega Gengar' }, ...]}]
// Return an object with the Pokemon's name as the key and their next evolutions as the value.
// If there are no next evolutions, return an empty array.

//SOLUTION
function fn3(array) {
  return array.map(function(pokemon) {
    var obj = {};
    obj[pokemon.name] = pokemon.nextEvolutions || [];
    return obj;
  });
}
// console.log(fn3(wesFavoritePokemon));

// .filter(filterFunction)

// Write a function that does the following:

// myFn([10,15,20]) >> [10,20]
// Return only those numbers that are even.
function myFn(array) {
  return array.filter(function(val) {
    return val % 2 === 0;
  });
}
console.log(myFn([10, 15, 20]));
// myFn(['return', 'phrases', 'with one word']) >> ['return', 'phrases']
// Return only those phrases that are one word.

// var myMatrix = [[1,0,1],
//                 [1,1,1],
//                 [0,1,1]];
// myFn(myMatrix) >> [ [ 1, 0, 1 ], [ 0, 1, 1 ] ]
// Return only those rows that have a 0 in them.

// myFn(wesFavoritePokemon) >> [{ name: 'Jigglypuff', ... }]
// Return the Pokemon whose ID is '3841444a-83ec-11e5-8bcf-feff819cdc9f'. Return the entire object.

// myFn(wesFavoritePokemon) >> [{ name: 'Crobat', type: ... }, { name: 'Gengar', type: ... }]
// Return only those Pokemon that are of the Poison type. Return the entire object.

// myFn(wesFavoritePokemon) >> [{ name: 'Crobat', type: ... }]
// Return only those where evolves = false. Return the entire object.

// myFn(wesFavoritePokemon) >> [{ name: 'Crobat', ... }, { name: 'Gengar', ...}]
// Return only those Pokemon that have more than one formerEvolution.


// Both .map and .filter

// myFn([10,15,20]) >> [5,10]
// Return the halves of those numbers that are initially even


// myFn(['racecar', 'amalgam', 'oligopoly', 'zoom']) >> ['amalgam', 'zoom']
// Return only those words whose vowels are all the same.

// var myMatrix = [[1,0,1],
//                 [1,1,1],
//                 [0,1,0]];
// myFn(myMatrix) >> [ [ true, true ], [ true ] ]
// Return only those rows that have a 0 in them. Then, remove all of the
// 0s. Finally, return 'true' for all the 1s.

// myFn(wesFavoritePokemon) >> ['Poison', 'Normal', 'Fairy']
// Return the first type of those Pokemon that can evolve.

// myFn(wesFavoritePokemon) >> ['Crobat', 'Gengar']
// Return the names of the Pokemon who have the poison type.

// myFn(wesFavoritePokemon) >> [{ name: 'Wigglytuff', ... }, { name: 'Clefable', ... }]
// Return only the evolution objects of those Pokemon who have the type 'Fairy'.

// myFn(wesFavoritePokemon) >> ['3841490e-83ec-11e5-8bcf-feff819cdc9f',
//                              '38415174-83ec-11e5-8bcf-feff819cdc9f',
//                              ...]
// Return just the IDs of the last Pokemon inside of formerEvolutions (i.e. 'Zubat', 'Ghastly', ...)
