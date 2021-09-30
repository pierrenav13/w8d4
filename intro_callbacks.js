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

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Enter a number: ", function(answer) {
            let num = parseInt(answer);
            sum += num;
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
        
    }
    else {
        completionCallback(sum);
        rl.close();

    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));