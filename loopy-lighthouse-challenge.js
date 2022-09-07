let num = 100
while (num <= 200) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse")
  } else if (num % 4 === 0) {
    console.log("Lighthouse")
  } else if (num % 3 === 0) {
    console.log("Loopy")
  } else console.log(num)
  num++
}

//If the number is a multiple of 3, print the string "Loopy" instead of the number.
//If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
//If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
let x = 60
while (x >= 0) {
    if (x===50) {
    console.log("Orbiter transfers from ground to internal power");
}   else if (x===31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }   else if (x===16) {
        console.log("Activate launch pad sound suppression system");
    }   else if (x===10) {
        console.log("Activate main engine hydrogen burnoff system");
    }   else if (x===6) {
        console.log("Main engine start");
    }   else if (x===0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }   else {
        console.log("T-"+x+" seconds");
    }
    x=x-1;
}