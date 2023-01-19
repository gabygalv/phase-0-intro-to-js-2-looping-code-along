const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(namesArray,event) {
    let thankYouCards = []
    for (let cards = 0; cards < namesArray.length; cards++) {
        thankYouCards.push(`Thank you, ${namesArray[cards]}, for the wonderful ${event} gift!`)
    } 
    return thankYouCards
}

function countDown () {
    let number = 10;

while (number >= 0) {
    console.log(number--);
}
}