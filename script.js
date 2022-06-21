'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// OPTIONAL CHAINING

// sometimes you are asked to check if multiple options are true, before doing something

// old way

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open) }

// OPTIONAL CHAINING way (this is ES2020)

// only if openingHours exists and mon exists will open be console.logged

console.log(restaurant.openingHours?.mon?.open)
// this will give you undefined as mon does not exist

//
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// lets see if restaurant is open on each day
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`)
}

// the null coalesing operator is 2 question marks ??  it puts an or that checks null
// or undefined thus accounting for the use case where we have a 0 but want it to
// still display and be truthy


// OPTIONAL CHAINING ON METHODS ---
console.log(restaurant.order?.(0,1) ?? 'Method does not exist')

// Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}
]

// the old way
if (users.length > 0) console.log(users[0].name)
else console.log('user array empty')

// the new way with OPTIONAL CHAINING
console.log(users[0]?.name ?? 'User array empty');


