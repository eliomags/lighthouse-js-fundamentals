const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = function (moves) {
  let x = 0
  let y = 0
  for (i=0; i<moves.length; i++) {
    if (moves[i] === "north"){
      y++;
  }
    if (moves[i] === "south") {
      y--;
  }
    if (moves[i] === "east") {
      x++;
    }
    if (moves[i] === "west") {
      x--;
    }
}
  return[x, y];
}
console.log(finalPosition(moves));




function subtractFour(x) {
  return square(x) - 4;
}

function square(x) {
  return x * x;
}

console.log(subtractFour(5));