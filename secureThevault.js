// The combination of the lock is 10 - 40 - 39
// I must use a different calculation to produce each number

// First calculation will use *
const firstNum = 5 * 2

// Second calculation will use /
const secondNum = 80 / 2

// Third calculation will use + 
const thirdNum = 21 + 18

// Now I need to create a string message for the user to read in order to open the vault

// This will be the second part of my string
const vaultString = "you have been chosen to open an important vault. Here is the secret combination:";

// I will concatenate this variable in a console log to form a complete string.
console.log('You have received this message because ' + vaultString + ' ' + firstNum + ' ' + secondNum + ' ' + thirdNum);

// I must now create a variable with the message I wish to display in the broswer.
const secretMessage = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${firstNum}, ${secondNum}, ${thirdNum}`;

// expected output: You have received this message because you have been chosen to open an important vault. Here is the secret combination: 10, 40, 39
alert(secretMessage);
