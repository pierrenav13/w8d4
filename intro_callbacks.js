// class Clock {
//     constructor() {
//         this.date = new Date();
//         this.hours = this.date.getHours();
//         this.minutes = this.date.getMinutes();
//         this.seconds = this.date.getSeconds();

//         this.printTime();
//         //let newPrint = this.printTime.bind(this);
//         setInterval(this._tick.bind(this), 1000);

//     }
//     printTime(){
//         console.log(`${this.hours} : ${this.minutes} : ${this.seconds}`)
//     }

//     _tick() {
//         if (this.seconds < 59) {
//             this.seconds += 1;
//             this.printTime();
//         }
//         else {
//             if (this.minutes < 59) {
//                 this.seconds = 0;
//                 this.minutes += 1 
//             }
//             else {
//                 if (this.hours < 24) {
//                     this.hours += 1; 
//                     this.minutes = 0; 
//                     this.seconds = 0; 

//                 } 
//                 else {
//                     this.hours = 0; 
//                     this.minutes = 0;
//                     this.seconds = 0;
//                 }
//                 this.printTime();
//             } 
//         }
//     }

// }

// const clock = new Clock();

// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft > 0) {
//         rl.question("Enter a number: ", function(answer) {
//             let num = parseInt(answer);
//             sum += num;
//             console.log(sum);
//             addNumbers(sum, numsLeft - 1, completionCallback);
//         });
        
//     }
//     else {
//         completionCallback(sum);
//         rl.close();

//     }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function askIfGreaterThan(el1, el2, callback){
//     rl.question(`Is ${el1} > ${el2}: `, function(answer) {
//         if (answer === 'yes'){
//             callback(true);
//         }
//         else {
//             callback(false);
//         }
//     })
// } 

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
//     if (i < arr.length - 1){
//         askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
//             if (isGreaterThan){
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp; 
//                 madeAnySwaps = true;
//             }
//             innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
//         })
//     }
//     else if (i === arr.length - 1){
//         outerBubbleSortLoop(madeAnySwaps);
//     }
// }

// function absurdBubbleSort(arr, sortCompletionCallback){
//     function outerBubbleSortLoop(madeAnySwaps){
//         if (madeAnySwaps){
//             innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//         }
//         else{
//             sortCompletionCallback(arr);
//         }
        
//     }
//     outerBubbleSortLoop(true);
// }

// absurdBubbleSort([3, 4, 2], function (arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     rl.close();
// });


// Function.prototype.myBind = function(context) {
//     return () => {
//         this.apply(context)
//     }
// }

// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function () {
//     console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myThrottle = function(interval){
    let tooSoon = false;
    //debugger
    let method = this;
    return function (...args) {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => {
                tooSoon = false
            }, interval);
            method();
        }
    }
}

