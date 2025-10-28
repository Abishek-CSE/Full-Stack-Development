const value=[1,2,3,4,5,6]
let num=value.reduce((a,c)=>a+c,3)
console.log(num);


let brand=["Iphone","Vivo","Android"]
let mobile=brand.reduce((acc,c)=>acc)
console.log(mobile);

let water=[30,40,50,60,70,80,90,100]
let bottle=water.reduce((w,e)=>w+1 , 0)
console.log(bottle);

let laptop=[1,2,3,4,5]
let charger=laptop.reduce((l,c)=>l+c , 0)
console.log(charger)

let laptop1=[1,2,3,4,5]
let charger1=laptop1.reduce((l,c)=>l+c , 10)
console.log(charger1)


 let space=[1,2,3,4,5]
 let spa=space.reduce((w)=>w >=25)
 console.log(spa);
