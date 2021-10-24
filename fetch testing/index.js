// const publicTCGKey = "8f07f29f-3415-438c-80d4-60b644c6a563";
// const pricateTCGKey = "473d77ef-d1b0-4515-880d-b0908824a5c2";
const pokemon = require('pokemontcgsdk');

pokemon.configure({apiKey: '54a08a82-2581-44b2-a02e-d208a27384af'})

// CARDS
// find card by id  
pokemon.card.find('base1-4')
.then(card => {
    console.log(card.rarity + "test") 
    console.log(card.name + "test")// "Charizard"
})

// filter card by q parameter / name
pokemon.card.where({ q: 'name:blastoise' })
.then(result => {
    console.log(result.data[0].name) // "Blastoise"
})

// filter cards by q parameter / name and page
pokemon.card.where({ q: 'name:blastoise', pageSize: 10, page: 3 })
.then(result => {
    console.log(result.data[0].name) // "Blastoise"
})

// automatically page through card data

pokemon.card.all({ q: 'name:blastoise' })
    .then((cards) => {
        console.log(cards[0].name) // "Blastoise"
    })

// SETS
// return set name by set name
pokemon.set.find('base1')
.then(set => {
    console.log(set.name) // "Base"
})

// Supertypes
pokemon.supertype.all('base1-4')
.then(card => {
    console.log(card.supertype) // "Charizard"
})
// Subtypes
pokemon.subtype.all('base1-4')
.then(card => {
    console.log(card.subtype) // "Charizard"
})
// Types
pokemon.type.all('base1-4')
.then(card => {
    console.log(card.type) // "Charizard"
})
// Rarity
pokemon.rarity.all('base1-4')
.then(card => {
    console.log(card.rarity) // "Charizard"
})