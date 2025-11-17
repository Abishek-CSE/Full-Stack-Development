function bmicalculator(){
    let UserWeight =prompt("Enter your Weight in kg")
    let UserHeight =prompt("Enter your Height in cm")

    let Weight =parseFloat(UserWeight)
    let HeightCM = parseFloat(UserHeight)
    let height = HeightCM / 100
    let BMI =Weight / (height*height) 
    document.getElementById("result").innerHTML=`Your BMI is ${BMI.toFixed(2)}`
}