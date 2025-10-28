// For Loop Syntax:
// for(initialization; condition; increment/decrement){
         // Printing Statement;
//}
//1
for(let i =1; i<=10; i++){
    console.log(i);
}
//2
for(let j= 1; j>=10;j++){
    console.log(j);
}
//3
for(let even =1; even<=10;even++){
    console.log(even *2);
}
//4
for(let add=1; add<=10;add++){
    console.log(add +1);
}
//5
for(let dec=1; dec>=10; dec--){
    console.log(dec);
}
//6
for(let mul=1; mul<=10;mul++){
    console.log(mul-12);
}
//7
for(let even_num =1;even_num <=10;even_num++){
    if(even_num%2 == 0){
        console.log("Even Numver",even_num);
    }
    else{
        console.log("Odd Number",even_num);
    }
}
//8
for(let number =1; number <=10; number++){
    if(number %2 ==0){
        console.log(number);
    }
}
//9
for(let odd_num =1;odd_num<=10;odd_num++){
    if(odd_num%2 != 0){
        console.log("Odd Number",odd_num);
    }
}
//10
for(let value =1; value>=10; value++){
    console.log("Infinite times",value)
}
//11
let age =18;
if(age<=18){
    for(let i =1;i<=10;i++){
        console.log("Accepted");
    }
}
else{
    console.log("Rejected");
}
//12
for(let joint=1;joint<=10;joint++){
    for(let bone=5; bone == joint;bone++){
        console.log("Same", bone,joint);
    }
}
//13
for(let rocket=1;rocket <=10;rocket--){
    console.log(rocket);
}