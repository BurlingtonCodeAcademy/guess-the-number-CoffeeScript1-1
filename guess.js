const { ok } = require('assert');      
const { POINT_CONVERSION_COMPRESSED } = require('constants');
const { NODATA } = require('dns');
const { getUnpackedSettings } = require('http2');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);


// this is a promisse, which I will call in my While Loop 
function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}


// function setting the range and values that will be used/cycled through. 1 to 100.
function randomInt(min, max) {
    let range = (max - min) + 1
    let decimal = (Math.random() * (range))
    let int = (Math.floor(decimal) + min)
    return int
}



//async function that starts game, awaits for user input and 
start();

async function start() {
    console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
    let secretNumber = await ask("What is your secret number, Mortal?");
    console.log('You entered: ' + secretNumber);
    let guess = await ask("Is your number " + randomInt(1, 100) + "?")



// this is my while loop, which will print the appropriate answer depending on what the player answers. 

    while (guess !== secretNumber) {
      
        if (guess === 'yes') {
            console.log("I told you I could guess your number! I win")
            process.exit();

        } else if (guess === 'no') {
            let guess = await ask("Is your number" + randomInt(1, 100) + "?")
            console.log("Is it" + randomInt(1, 100) + "?")

        } else start()
    }
}
