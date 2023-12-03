// Q1
// var num= window.prompt("enter number : ");
// console.log(window.alert(num));



// Q2
// var num =  window.prompt("enter number : ");
// if(num%3 == 0 && num % 4 ==0){
//     console.log(window.alert("Yes"));
// }
// else{
//     console.log(window.alert("No"));
// }


// Q3
// var num1= window.prompt("enter number 1 : ");
// var num2= window.prompt("enter number 2 : ");

// if(num1 > num2){
//     console.log(window.alert("num1 is the max"));
// }
// else{
//     console.log(window.alert("num2 is the max"));
// }


// Q4
// var num= window.prompt("enter number : ");
// if(num>0){
//     console.log(window.alert("positive"));
// }
// else{
//     console.log(window.alert("negative"));
// }


// Q5
// var num1= window.prompt("enter number 1 : ");
// var num2= window.prompt("enter number 2 : ");
// var num3= window.prompt("enter number 3 : ");

// if(num1 > num2 && num1 > num3 && num2>num3 ){
//     console.log(window.alert("num1 is the max and num3 is the min"));
// }
// else if(num1 > num2 && num1 > num3 && num3>num2 ){
//     console.log(window.alert("num1 is the max and num2 is the min"));
// }
// else if (num2 > num1 && num2 > num3 && num1>num3){
//     console.log(window.alert("num2 is the max and num3 is the min"));
// }
// else if (num2 > num1 && num2 > num3 && num3>num1){
//     console.log(window.alert("num2 is the max and num1 is the min"));
// }
// else if (num3 > num1 && num3 > num2 && num1>num2){
//     console.log(window.alert("num2 is the max and num2 is the min"));
// }
// else {
//     console.log(window.alert("num3 is the max and num1 is the min"));
// }



// Q6
// var num= window.prompt("enter number : ");
// if(num%2==0)
// {
//     console.log(window.alert("even"));
// }
// else{
//     console.log(window.alert("odd"));
// }


// Q7
// var character = window.prompt("enter character : ")
// if(character=="a"|| character=="A" || character=="e" || character=="E" || character=="o" || character=="O" || character=="u" || character=="U" || character=="i" || character=="I")
// {
//     console.log(window.alert("vowel"));
// }
// else{
//     console.log(window.alert("consonant"));
// }


// Q8
// var num= window.prompt("enter number : ");
// for(var i=1;i<=num;i++)
// {
//     console.log(window.alert(i));
// }



// Q9

// var num= window.prompt("enter number : ");
// for(var i=1;i<=12;i++)
// {
//     console.log(window.alert(num*i));
// }


// Q10
// var num= window.prompt("enter number : ");
// for(var i=1;i<=num;i++)
// {
//     if(i%2==0){
//         console.log(window.alert(i));
//     }
    
// }


// Q11

// var num1= window.prompt("enter number 1 : ");
// var num2= window.prompt("enter number 2 : ");

// console.log(window.alert(num1 ** num2))


// Q12

// var mark1= Number(window.prompt("enter mark 1 : ")) ;
// var mark2= Number(window.prompt("enter mark 2 : "));
// var mark3= Number(window.prompt("enter mark 3 : "));
// var mark4= Number(window.prompt("enter mark 4 : "));
// var mark5= Number(window.prompt("enter mark 5 : "));
// var total=(mark1+mark2+mark3+mark4+mark5);
// var average=total/5;
// var percentage=total/500;



// console.log(window.alert(total));
// console.log(window.alert(average));
// console.log(window.alert(percentage*100));



// Q13
// var month= Number( window.prompt("enter number of month : "));

// if ( month==4 || month==6 || month==9 || month==11)
// {
//     console.log(window.alert(30));
// }
// else if (month==2)
// {
//     console.log(window.alert(28));
// }
// else{
//     console.log(window.alert(31));
// }



// Q14

// var mark1= Number(window.prompt("enter mark 1 : ")) ;
// var mark2= Number(window.prompt("enter mark 2 : "));
// var mark3= Number(window.prompt("enter mark 3 : "));
// var mark4= Number(window.prompt("enter mark 4 : "));
// var mark5= Number(window.prompt("enter mark 5 : "));

// var total=(mark1+mark2+mark3+mark4+mark5);
// var percentage=(total/500)*100;


// if(percentage>=90)
// {
//     console.log(window.alert("Grad A"));
// }
// else if(percentage<90 && percentage>=80)
// {
//     console.log(window.alert("Grad B"));
// }
// else if(percentage<80 && percentage>=70)
// {
//     console.log(window.alert("Grad C"));
// }
// else if(percentage<70 && percentage>=60)
// {
//     console.log(window.alert("Grad D"));
// }
// else if(percentage<60 && percentage>=50)
// {
//     console.log(window.alert("Grad E"));
// }
// else 
// {
//     console.log(window.alert("Grad F"));
// }


// Q15

// var month= Number( window.prompt("enter number of month : "));


// switch (month) {
//     case 2:
//         console.log(window.alert(28));
//         break;

//     case 4:
//         console.log(window.alert(30));
//         break;
    
//     case 6:
//         console.log(window.alert(30));
//         break;

//     case 9:
//         console.log(window.alert(30));
//         break;

//     case 11:
//         console.log(window.alert(30));
//         break;

//     default:
//         console.log(window.alert(31));
//         break;
    
//   }


// Q16
// var character = window.prompt("enter character : ")

// switch (character) {
//     case "a":
//         console.log(window.alert("vowel"));
//         break;
//     case "A":
//         console.log(window.alert("vowel"));
//         break;
//     case "e":
//         console.log(window.alert("vowel"));
//         break;
//     case "E":
//         console.log(window.alert("vowel"));
//         break;
//     case "i":
//         console.log(window.alert("vowel"));
//         break;
//     case "I":
//         console.log(window.alert("vowel"));
//         break;
//     case "o":
//         console.log(window.alert("vowel"));
//         break;
//     case "O":
//         console.log(window.alert("vowel"));
//         break;
//     case "u":
//         console.log(window.alert("vowel"));
//         break;
//     case "U":
//         console.log(window.alert("vowel"));
//         break;

//     default:
//         console.log(window.alert("consonant"));
//         break;
    
//   }


// Q17                       ************************wrong*************************

// var num1= Number( window.prompt("enter number 1 : "));
// var num2= Number( window.prompt("enter number 2 : "));

// switch(num1 > num2){
//     case true:
//         console.log(window.alert("num1 is max"));
//         break;
//     case false:
//         console.log(window.alert("num2 is max"));
//         break;
    
// }



// Q18

// var num = Number( window.prompt("enter number: "));

// switch(num%2){
//     case 0:
//         console.log(window.alert("num is even"));
//         break;
//     case 1:
//         console.log(window.alert("num is odd"));
//         break;
    
// }


// Q19                   ************************wrong*****************
// var num = Number( window.prompt("enter number: "));
// switch(num>=0){
//     case true:
//         switch (num == 0)
//         {
//         case true:
//             console.log(window.alert("num is zero"));
//             break;
        
//         default:
//             console.log(window.alert("num is positive"));
//             break;
//         }
//         break;
 
//     case false:
//         console.log(window.alert("num is negative"));
//         break;
    
// }


// Q20

// var num1= Number( window.prompt("enter number 1 : "));
// var operation = window.prompt("enter operation from that (+ , - , / , * , %) : ")
// var num2= Number( window.prompt("enter number 2 : "));


// switch(operation)
// {
//     case "+":
//         console.log(window.alert(num1 + num2));
//                 break;
//     case "-":
//         console.log(window.alert(num1 - num2));
//                 break;
//     case "/":
//         console.log(window.alert(num1 / num2));
//                 break;
//     case "*":
//         console.log(window.alert(num1 * num2));
//                 break;
//     case "%":
//         console.log(window.alert(num1 % num2));
//                 break;
// }