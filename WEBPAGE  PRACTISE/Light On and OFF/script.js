const button = document.getElementById("button")
const button2 = document.getElementById("button2")
button.addEventListener("click",()=>{
    document.body.style.background = "black"
    button.style.display ="none"
    button2.style.display = 'block'
})
button2.addEventListener("click",()=>{
    document.body.style.background = "White"
    button2.style.display ="none"
    button.style.display ='block'
})