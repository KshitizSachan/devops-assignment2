
// Kshitiz's Contribution
const kshitiz_add = (a, b) => {
    return a+b
}

//prasad's contribution
const prasad_sub = (a,b) => {
 return a-b
}

//aditya's contribution
const aditya_exp = (a,b) => {
    return a**b
   }

   //siddhant's contribution
const siddhant_findMax = (a,b) => {
    
    if(b>a){
        return b;
    }
    else{
        return a;
    }

}
   

//rounish contribution
function subtract(a, b) {
    return abs(a - b);
}

//priyal's contribution
const priyal_div = (a,b)=>{
    if(b === 0){
        return -1;
    }
    else{
        return a / b;
    }

}

// Sarthak's contribution -> function to return remainder on dividing a from b.
const sarthak_remainder = (a, b) => {
    if (b == 0) {
        return a;
    }
    return a % b;
}


//Ravi's Contribution
const multiply=(a,b) => a*b;

//==========================|| Driver code below ||========================//


const menu = `
Choose an operation:
1. Addition (Kshitiz's Contribution)
2. Subtraction (Prasad's Contribution)
3. Exponentiation (Aditya's Contribution)
4. Find Max (Siddhant's Contribution)
5. Absolute Difference (Rounish's Contribution)
6. Division (Priyal's Contribution)
7. Remainder (Sarthak's Contribution)
8. Multiplication (Ravi's Contribution)
9. Exit
`;

let choice = prompt(menu);
choice = parseInt(choice);

if (choice >= 1 && choice <= 8) {
    // Take input for two numbers
    let a = parseFloat(prompt("Enter the first number (a):"));
    let b = parseFloat(prompt("Enter the second number (b):"));
    
    let result;

    switch (choice) {
        case 1:
            result = kshitiz_add(a, b);
            break;
        case 2:
            result = prasad_sub(a, b);
            break;
        case 3:
            result = aditya_exp(a, b);
            break;
        case 4:
            result = siddhant_findMax(a, b);
            break;
        case 5:
            result = subtract(a, b);  // Rounish's Contribution
            break;
        case 6:
            result = priyal_div(a, b);
            break;
        case 7:
            result = sarthak_remainder(a, b);
            break;
        case 8:
            result = multiply(a, b);
            break;
        default:
            alert("Invalid option!");
    }

    alert(`The result is: ${result}`);
} else if (choice === 9) {
    alert("Exiting the program.");
} else {
    alert("Invalid option, please select a number between 1 and 9.");
}









