const arr=[1,2,3,4,,5,6,7,8]
let even=arr.find((n)=>n%2 !==0)
console.log(even);

const value = [1,2,3,4,5]
let number = value.find((r)=>r <= 4)
console.log(number)

const water = [9,8,7,6,5]
let bottle = water.find((w,i)=>w+i)
console.log(bottle);

const chair = [9,8,7,6,5,0]
let sofa = chair.find((w,i)=>w == 5)
console.log(sofa);

const bed =["A","B","C","D","E","F"]
let alp=bed.find((a)=>a <= "E")
console.log(alp);

const box=[1,2,3,4,5,6,7,8]
let board =box.find((bo)=>bo <=10)
console.log(board);