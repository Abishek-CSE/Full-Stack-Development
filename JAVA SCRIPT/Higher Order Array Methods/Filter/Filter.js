//Filter Syntax:

//  array.filter((current Value, index, Array)=>{
//      console.log(array)
//  })

let even=[2,4,6]
let filter12= even.filter(()=>{
    console.log(even);
})


let number=[1,2,3,4,5,6,7,8,9,10]
let num = number.filter((n)=>n%2==0)
console.log(num);

let mobile=[12,13,14,15,16,17]
mobile.filter((i)=>{
    console.log(i+1);
})

let laptop_charge=[78,79,80,81]
laptop_charge.filter((c)=>{
    if(c>=80){
        console.log("Charger Percentage",c);
    }
})


let mobile_charger=[60,70,80,90,100]
mobile_charger.filter((m)=>{
    if(m<70){
        console.log("you need to charger",m);
    }
})

const company=["Tata","Apple","Tesla","TCS"]
company.filter((b,i)=>{
    console.log(b,i);
})

let value =[1,2,3,4,5,6,7,8,9]
value.filter((g)=>{
    console.log(g*0);
})

var Brand=["Adidas","Abidas","Abibas"]
Brand.filter((h,j)=>{
    console.log(j);
})


let water_bottle=[0,9,8,7,6,5,4,3,2,1]
water_bottle.filter((p)=>{
    console.log(p-1)
})

let digit=[2,4,6,8,10]
digit.filter((d)=>{
    console.log(d/3);
})


let warder=[20,50,60]
warder.filter((w)=>{
    if(w ==20){
        console.log("Joker Warder");
    }
    else{
        console.log("Warder is not a joker");
    }

})