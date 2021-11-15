
// //----------------------------exercice 1------------------------

// // Ecrire un programme javascript qui demande l’âge d’un enfant à l’utilisateur. Ensuite, il l’informe de sa catégorie :
// // "Poussin" de 6 à 7 ans
// // "Pupille" de 8 à 9 ans
// // "Minime" de 10 à 11 ans
// // "Cadet" après 12 ans

// //write your code here

// var age = parseInt(prompt('insert your age')) 

// if(age>=12)
// {
//     document.write('cadet')
// }
// if(age>=10)
// {
//     document.write("Minim")
    
// }
// if(age>=8)
// {
//     document.write('Pupille')
// }
// if(age>=6)
// {
//     document.write('Poussin')

// }















// //----------------------------exercice 2------------------------
// // Ecrire un programme javascript qui demande un nombre compris entre 10 et 20, jusqu’à ce que la réponse convienne. En cas de réponse supérieure à 20, on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.

// //write your code here

// var n=parseInt(prompt('insert the number between 10 and 20'))
// while(n<10  || n>20)
// {
//     if(n<10)
//     {
//         n=parseInt(prompt('insert the number at least > 10'))
//     }
//     else if(n>20)
//     {
//         n=parseInt(prompt('insert the number at least < 20'))

//     }
// }










// //----------------------------exercice 3------------------------
// // Ecrire un programme javascript qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.

// //write your code here

//   let n=parseInt(prompt('insert the number'))
// for (let i = 1; i <= 10; i++) {
//     document.write('<br>')
//     document.write(n+i)
// }



// //----------------------------exercice 4------------------------
// // Ecrire programme javascript qui demande un nombre de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1+2+3+4+5


// //write your code here


// let x=parseInt(prompt('insert the number'))
// let somme=0

// for (let i = 0; i <=x; i++) {
//     somme=somme+i 
// }
//  document.write(somme)


// //----------------------------exercice 5------------------------
// // Ecrire un programme javascript qui demande un nombre de départ, et qui calcule sa factorielle.
// // NB : la factorielle de 8, notée 8 !, vaut
// // 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8

// //write your code here



// let f=parseInt(prompt('insert the number'))
// let somme=1

// for (let i = 2; i <=f; i++) {
//     somme=somme*i 
// }
//  document.write(somme)





// //----------------------------exercice  insérer dans un tableau 6------------------------

// // Ecrire un un programme javascript qui demande successivement 20 nombres à l’utilisateur, et qui lui dise ensuite quel était le plus grand parmi ces 20 nombres :
// // Entrez le nombre numéro 1 : 12
// // Entrez le nombre numéro 2 : 14
// // etc.
// // Entrez le nombre numéro 20 : 6
// // Le plus grand de ces nombres est  : 14
// // Modifiez ensuite l’algorithme pour que le programme affiche de surcroît en quelle position avait été saisie ce nombre :
// // C’était le nombre numéro 2

// //write your code here
// var nombre
// var numbers=[]
// var max=0
// var position
// for (let i = 0; i <10; i++) {
//     nombre=parseInt(prompt('insert the number'+i+1))
//     numbers.push(nombre)
//     if(numbers[i]>max)
//     {
//         max=numbers[i]
//         position=i
//     }

// }

// document.write('le max est : '+max)
// document.write('la position est : '+position)




// // PART2
// // Réécrire le programme précédent, mais cette fois-ci on ne connaît pas d’avance combien l’utilisateur souhaite saisir de nombres. La saisie des nombres s’arrête lorsque l’utilisateur entre un zéro.

// //write your code here


// var nombre
// var numbers=[]
// var max=0
// var position
// for (let i = 0; nomber!=0; i++) {
//     nombre=parseInt(prompt('insert the number'+i+1))
//     numbers.push(nombre)
//     if(numbers[i]>max)
//     {
//         max=numbers[i]
//         position=i
//     }

// }
// document.write('le max est : '+max)
// document.write('la position est : '+position)












// //----------------------------exercice 7------------------------

// // écrivez un programme javascript qui nous permet de définir 2 nombres puis la commande invite nous montre le menu contenant le message suivant
// // choisir un numéro
// // 1: pour la division
// // 2: pour la somme
// // 3: pour multiplier
// // 4: pour soustraction

// //write your code here

// let number1=parseInt(prompt('insert the first number'))
// let number2=parseInt(prompt('insert the second number'))

// let choix=parseInt(prompt('choisir l\'operation \n 1 :  pour la division \n 2: pour la somme \n 3: pour multiplier \n 4: pour soustraction'))

// if(choix==1)
// {
//     let result=number1/number2
//     document.write(result)
// }
// if(choix==2)
// {
//     let result=number1+number2
//     document.write(result)

// }
// if(choix==3)
// {
//     let result=number1*number2
//     document.write(result)

// }
// if(choix==4)
// {
//     let result=number1-number2
//     document.write(result)

// }








// //----------------------------exercice 8------------------------
// // Un programme pour trouver les années que le 1er janvier est un dimanche entre 2014 et 2050.

// //write your code here






// for (let année = 2014; année <=2050; année++) {
//     var date=new Date(année,00,01)
//     if(date.getDay()==0)
//     {
//         document.write('<br>')
//         document.write('le 1er janvier est un dimanche pour l\'année : '+année)
//     }
    
// }



// //----------------------------exercice 9------------------------
// // Écrivez un programme JavaScript où le programme prend un entier aléatoire
// //  entre 1 et 10, l'utilisateur est alors invité à entrer un nombre de 
// // supposition. Si l'entrée utilisateur correspond à un numéro de supposition, le programme affichera
// //  un message "Good Work" sinon affichera un message "Not matched"

// //write your code here


// var random= Math.floor(Math.random()*10) 

// var number =parseInt(prompt('donner un nombre entre 1 et 10'))
// if(random==number)
// {
//     document.write('good work')
// }
// else{
//     document.write('not match')
// }




// //----------------------------exercice 10------------------------

// //écrire un programme qui permet à l'utilisateur d'insérer un nombre de secondes 
// // puis de savoir combien d'heures et de minutes et de secondes de ce nombre

// //write your code here


// var seconds=parseInt(prompt('insert the seconds')) //3661
// var hours
// var minuts
// var second
// hours=Math.floor(seconds/3600)
//  // 3661/3600=1.0169 and with math.floor it will be 1
//minuts=Math.floor(seconds%3600/60)
//  //3661%3600= 61/60=1.1212 and with math.floor ti will be 1
// second=Math.floor(seconds-(hours*3600)-(minuts*60))
// //  3661-(1*3600)-(1*60)=3661-3600-60=1

// console.log(hours+':h',minuts+':m',second+':s')











