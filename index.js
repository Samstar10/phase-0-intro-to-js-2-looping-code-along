// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//let nameArr = []

function writeCards(names, event){
    let nameArr = []
    for(let i = 0; i < names.length; i++){
        nameArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return nameArr
}

console.log(writeCards(nameArr, 'birthday'))

function countDown(){
    let count = 0
    while(count <= 10){
        console.log(count++)
    }
}
countDown()