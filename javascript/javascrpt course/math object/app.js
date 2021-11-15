// const num1 = 100;
// const num2 = 30;

// let result;

// // simple math with numbers

// result = num1 + num2;
// result = num1 * num2;
// result = num1 - num2;
// result = num1 / num2;
// result = num1 % num2;

// // math object

// result = Math.max(3, 3, 1, 3, 22, 5, 4);
// result = Math.min(3, 3, 1, 3, 22, 5, 4);
// result = parseInt(Math.random() * 10);
// console.log(result);

// exercice

// generate random number

// let random = parseInt(Math.random() * 10);
// console.log(random);

// let number;

// number = parseInt(prompt("enter a number between 1 and 6"));

// for (let i = 1; i < 5; i++) {
//   // submit a number by user

//   // compare both numbers
//   if (number == random) {
//     alert("good job");
//     break
//   } else {
//     number = parseInt(prompt("try again"));
//   }
// }

// // user have 5 retrying

// // using while

// let i,chance
// i=1
// while (i<5) {
//    if (number == random) {
//     alert("good job");
//     break
//   } else {
//     chance=5-i
//     number = parseInt(prompt("you have "+chance+" chance"));
//   }
//   i++
// }

// Exercice 8
// Ecrivez un algorithme permettant à l’utilisateur de saisir un nombre quelconque de valeurs,
//  qui devront être stockées dans un tableau. L’utilisateur doit donc commencer par entrer le nombre de valeurs qu’il compte saisir.
//  Il effectuera ensuite cette saisie. Enfin, une fois la saisie terminée, le programme affichera le nombre de valeurs négatives et le nombre de valeurs positives.
let repetition,number,numbers,positive,negative,zero

numbers=[]
positive=0
negative=0
zero=0
// user define the loop repetition
repetition = parseInt(prompt("how many number u want to insert"));

for (let i = 0; i < repetition; i++) {
  // insert numbers
    number=parseInt(prompt('give me the number'))
    // add the number in the table
     numbers.push(number)
     // find the (positive,negative,null) numbers
     if(number<0)
     {
       negative++
     }
     else if(number>0){
       positive++
     }
     else{
       zero++
     }

}

document.write(numbers)
document.write("<br>")
document.write("positive numbers is "+positive)
document.write("<br>");
document.write("negative numbers is "+negative);
document.write("<br>");
document.write("null numbers is " + zero);



