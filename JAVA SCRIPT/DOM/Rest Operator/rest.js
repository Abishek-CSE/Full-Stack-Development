
// Rest Operator Using in Function
function sum(...inputValues){
    ans =0
    for(i=0;i<inputValues.length;i++){
        ans =ans + inputValues[i]
    }
    console.log(ans);
}
sum(1,2,3,4,5,6,7,8,9,0)

// Rest ParaMeters
const number =[78,56,998,0,23,156]
 const max = Math.max(number)
 console.log(max);
 const number1 =[78,56,998,0,23,156]
 const max1 = Math.max(...number)
 console.log(max1);
 