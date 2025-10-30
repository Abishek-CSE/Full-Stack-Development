const MenuButton = document.getElementById("Menu")
const MenuItems =document.getElementById("menu_items")
MenuButton.addEventListener("click",()=>{
    MenuButton.style.display ="none"
    MenuItems.style.display ="block"
})

//Main Tea
const tea =document.getElementById("tea")
const teaItems =document.getElementById("tea_items")
teaItems.style.display ="none"
tea.addEventListener("click",()=>{
    tea.style.display ="none"
    teaItems.style.display ="block"
})
const boost1 =document.getElementById("boost")
const boostItems =document.getElementById("boost_items")
boostItems.style.display ="none"
boost1.addEventListener("click",()=>{
    boost1.style.display ='none'
    boostItems.style.display ="block"
})

//Main Juice
const juice =document.getElementById("juice");
const JuiceItems = document.getElementById("Juice_items")
JuiceItems.style.display ="none"
juice.addEventListener("click",()=>{
    juice.style.display ="none"
    JuiceItems.style.display ="block"
})

//Main Coffee
const coffee =document.getElementById("coffee")
const coffeeItems =document.getElementById("coffee_items")
coffeeItems.style.display ="none"
coffee.addEventListener("click",()=>{
    coffee.style.display ="none"
    coffeeItems.style.display ="block"
})

//Tea Items
const LemonTea =document.getElementById("Lemon_tea")
const MilkTea =document.getElementById("Milk_tea")
const BlackTea =document.getElementById("Black_tea")
const order = document.getElementById("Order_title")
const orderImage = document.getElementById("order_image");
const paymentButton = document.getElementById("payment")
LemonTea.addEventListener("click",()=>{
    order.textContent =" Lemon Tea ORDER SUCCESSFUL"
    orderImage.src = "Assests/LemonTea.jpg"; 
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    LemonTea.style.display ="none"
})
MilkTea.addEventListener("click",()=>{
    order.textContent ="Milk Tea ORDER SUCCESSFUL"
    orderImage.src ="Assests/NormalTea.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    MilkTea.style.display ='none'
})
BlackTea.addEventListener("click",()=>{
    order.textContent ="Black Tea ORDER SUCCESSFUL"
    orderImage.src ="Assests/BlackTea.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    BlackTea.style.display ="none"
})

//Coffee Items
const ChocolateCoffee = document.getElementById("Chocolate_coffee")
const NormalCoffee = document.getElementById("Normal_coffee")
ChocolateCoffee.addEventListener("click",()=>{
    order.textContent ="Chocolate Coffee ORDER SUCCESSFUL"
    orderImage.src ="Assests/ChocolateCoffee.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    ChocolateCoffee.style.display ="none"
})
NormalCoffee.addEventListener("click",()=>{
    order.textContent =" Coffee ORDER SUCCESSFUL"
    orderImage.src ="Assests/Coffee.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    NormalCoffee.style.display ="none"
})

//Boost Items
const boost = document.getElementById("boostspl")
boost.addEventListener("click",()=>{
    order.textContent =" Special Boost ORDER SUCCESSFUL"
    orderImage.src ="Assests/Boost.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    boost.style.display ='none'
})

//Juice Items
const AppleJuice = document.getElementById("Apple_juice")
const OrangeJuice = document.getElementById("Orange_juice")
const MangoJuice = document.getElementById("Mango_juice")
const GrapeJuice = document.getElementById("Grape_juice")
AppleJuice.addEventListener("click",()=>{
    order.textContent ="Apple Juice ORDER SUCCESSFUL"
    orderImage.src ="Assests/AppleJuice.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    AppleJuice.style.display ="none"
})
OrangeJuice.addEventListener("click",()=>{
    order.textContent =" Orange Juice ORDER SUCCESSFUL"
    orderImage.src ="Assests/OrangeJuice.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    OrangeJuice.style.display ="none"
})
MangoJuice.addEventListener("click",()=>{
    order.textContent =" Mango Juice ORDER SUCCESSFUL"
    orderImage.src ="Assests/MangoJuice.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    MangoJuice.style.display ="none"
})
GrapeJuice.addEventListener("click",()=>{
    order.textContent ="Grape Juice ORDER SUCCESSFUL"
    orderImage.src = "Assests/GrapeJuice.jpg"
    orderImage.style.display = "block";
    paymentButton.style.display = "block"
    GrapeJuice.style.display ="none"
})

const payment = document.getElementById("payment")
payment.addEventListener("click",()=>{
    order.textContent = "PAYMENT SUCCESSFUL! Your order is being prepared. Thank you!"
    alert("Pay Rupees 10")
    
    orderImage.style.display ="none"
})
