// 1. Import the math module
// and use it in the application

// TASK 1:
// Make simple calculator app that asks the user for operation to make
// The application will parse the given operation and call the appropriate function
// from the math module.
// The application will then print the result to the console.
// The application will then ask the user if they want to continue.
// If the user wants to continue, the application will repeat the process.
// If the user does not want to continue, the application will exit.

let readline = require('readline');
let math = require('../lib/math');
let rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function calculate(input){
    let op=input.replace(/\s+/g,"");
    let operation = op.match(/(\d+|\+|\-|\*|\/)/g);
    let result;
    for(let i = 0; i < operation.length; i++){
        if(operation[i]==="*"||operation[i]==="/"){
            let num1 = Number(operation[i-1]);
            let num2 = Number(operation[i+1]);
            if(operation[i]=="*"){
                result=math.multiply(num1,num2);
            }
            else{
                if(num2==0){
                    console.log("wrong");
                    break;
                }
                else{
                    result=math.divide(num1,num2);
                }
            }
        operation.splice(i-1,3,result.toString());
        i--;
        }
    }
    for(let i = 0; i < operation.length; i++){
    if(operation[i]==="+"||operation[i]==="-"){
            let num1 = Number(operation[i-1]);
            let num2 = Number(operation[i+1]);
            result = operation[i]==="+"?math.add(num1,num2)
            :math.subtract(num1,num2);
            operation.splice(i-1,3,result.toString());
            i--;
        }
    }
    return result;
}
function ask(){
    rl.question("Enter an operation: ",(operation)=> {
        let result=calculate(operation);
        console.log(`Result: ${result}`);
        rl.question("Do you want tocontinue? (yes/no)",(e)=>{
            let answer=e.toLowerCase();
            let answer2=answer=="yes"?ask()
            :console.log("End, Goodbye!");
        })
    });
}
ask();


// TASK 2 (Bouns 50 points):
// Make a guessing game that asks the user to guess a number between 0 and 50.
// The application will generate a random number between 0 and 50 using the randomTo50 function.
// The application will then ask the user to guess the number.
// The user has 5 attempts to guess the number. if the attempt is wrong, the application will print "Try again 🤔" to the console.
// If the user does not guess the number correctly 5 times, the application will print "You lost the game!! try again 🤔" to the console.
// If the user guesses the number correctly, the application will print "You won the game!! congrats 🥳🥳" to the console.
let randomnum=math.randomTo50();
let attempt=0;
let maxattempt=5;
function askguess(){
    rl.question("guess a number between 0 and 50 :",(guessnum)=>{
        let guess=parseInt(guessnum);
        attempt++;
            if(randomnum===guess){
                console.log("You won the game!! congrats 🥳🥳");
                rl.close();
            }
            else if(attempt<maxattempt){
                console.log("Try again 🤔");
                askguess();
            }
            else{
                console.log("You lost the game!! try again 🤔");
                console.log(`The correct number was: ${randomnum}`);
                rl.close();
            } 
    });
}
askguess();

// TASK 3 (Bouns 50 points):
// Make a function that ask the user the following questions:
// 1. What is your name?
// 2. What is your age? (if age is not a number or is less than 10, the application will print "Invalid age" and end the program)
// 3. What is the Favorite programming language
// Then after the user answers all the questions, the application will print the following.
// console.log("\n--- Summary ---");
// console.log(`Name: ${name || "(no name)"}`);
// console.log(`Age: ${age}`);
// console.log(`Favorite language: ${fav || "(not specified)"}`);
// console.log("----------------\n");
function askuser(){
    rl.question("What is your name?",(name)=>{
        rl.question("What is your age?",(age)=>{
            let agenum=parseInt(age);
            if(isNaN(agenum) || agenum < 10){
                console.log("Invalid age");
                rl.close();
            }
            else{
                rl.question("What is the Favorite programming language",(fav)=>{
                    console.log("\n--- Summary ---");
                    console.log(`Name: ${name || "(no name)"}`);
                    console.log(`Age: ${age}`);
                    console.log(`Favorite language: ${fav || "(not specified)"}`);
                    console.log("----------------\n");
                    rl.close();
                })
            }
        })
    })
}
askuser();