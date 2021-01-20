


function guessRightNumber() {

    let counter = 1;
    while (counter <= 3) {
        min = 1;
        max = 10;
        let correctAns = Math.floor(Math.random() * (max - min) + min + 1);

        console.log("Correct Number: ", correctAns);

        let userNumber = prompt("Please enter your number from 0 to 10 > ")
        console.log("My guess is: " + userNumber);


        if (userNumber > correctAns) {
            alert('Correct answer is greater!')
        } else if (userNumber < correctAns) {
            alert('Correct answer is smaller!')
        } else if (userNumber == correctAns) {
            alert("You Win!")
            return
        }
        counter++;
        if (counter == 4) {
            alert('You lose!')
            return
        }

    }

}





// function guessRightNumber() {

//     let counter = 1;
//     while (counter <= 3) {
//         let correctAns = Math.floor(Math.random() * 4)

//         console.log("Correct Number: ", correctAns);

//         let userNumber = prompt("Please enter your number from 0 to 10 > ")
//         console.log("My guess is: " + userNumber);


//         if (userNumber > correctAns) {
//             alert('Correct answer is greater!')
//         } else if (userNumber < correctAns) {
//             alert('Correct answer is smaller!')
//         } else if (userNumber == correctAns) {
//             alert("You Win!")
//             return
//         }
//         counter++;
//         if (counter == 4) {
//             alert('You lose!')
//         }

//     }

// }


