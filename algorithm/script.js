// // // var nombre
// // // var cpt=0

// // // nombre=prompt('donner un nombre positive')

// // // while (nombre<0 ) {

// // //     alert('il ya une erreur')
// // //     nombre = prompt("donner un nombre positive");
// // //     cpt=cpt+1
// // // }

// // var cpt, number;

// // number = prompt("donner un nombre positive");

// // cpt = 0;

// // while (number < 0 && cpt < 4) {
// //   number = prompt(" erreur!! \n donner un nombre positive ");

// //   cpt = cpt + 1;
// // }

// // if (cpt == 4) {
// //   alert("your account has been blocked try after 24h");
// // } else {
// //   alert("welcome to the dashboard");
// // }

// var i

// for (i=1 ; i<=10  ; i=i+1) {

//   document.write('<br>')
//   document.write('Hi')

// }

// var index =0

// while(index<10)
// {
//   index = index + 1;
//     document.write('<br>')
//   document.write("Hi");
// }

// les boucle correction

// EX5
// var i,number

// number =prompt('donner un nombre')

// for (i=1;i<=10;i++) {

//   document.write('<br>')
//   document.write(number,"x",i,"=",number*i)

// }
// EX6

// var nombre,i,somme;

// somme=0

// nombre=prompt('donner un nombre')

// for(i=1;i<=nombre;i++){

//   somme=somme+i
// }

// document.write(somme)

// EX 7

// var nombre , i , f

// f=1
// nombre=prompt('donner un nombre')

// for(i=1;i<=nombre;i++){
//     f=f*i
// }
// document.write(f)
// var nombre, i, max, position;

// max = 0;

// for(i=1;i<=5;i++){
//    nombre = parseInt(prompt("entrez le nombre numéro" + i));

//    if(nombre>max)
//    {
//      max=nombre
//      position=i
//    }
// }
// document.write("max is : ",max)
// document.write('<br>')
// document.write("position is : ",position);

// part 2

// i = 1;
// while (nombre != 0) {
//   nombre = parseInt(prompt("entrez le nombre numéro" + i));

//   if (nombre > max) {
//     max = nombre;
//     position = i;
//   }

//   i++;
// }

// document.write("max is : ", max);
// document.write("<br>");
// document.write("position is : ", position);
// document.write("<br>");
// document.write("inserting time : ", i - 1);

//---------------------------- min----------------------------

// var min, i, nombre, position;

// i = 1;

// nombre = parseInt(prompt("donner le nombre"));
// min = nombre;

// while (nombre != 0) {
//   if (nombre <= min) {
//     min = nombre;
//     position = i;
//   }

//   nombre = parseInt(prompt("donner le nombre"));

//   i++;
// }

// nombre = parseInt(prompt("donner le nombre"));
// min = nombre;

// for (i = 1; i <= 5; i++) {

//   if (nombre <= min) {
//     min = nombre;
//     position = i;
//   }
//   nombre = parseInt(prompt("donner le nombre"));
// }

// document.write("min is : ", min);
// document.write("<br>");
// document.write("position is : ", position);

// var T, N, i;
// T = [];

// for (i = 0; i <= 5; i++) {
//   T[i] = parseInt(prompt("donner un nombre"));
// }

// document.write(T[0]);
// console.table(T);

var n;
n = prompt("donner un nombre");

console.log(isNaN(n));
