const SearchButton = document.getElementById("button")

SearchButton.addEventListener("click",(e)=>{
    const data = document.getElementById("input").value
    const image = document.getElementById("image")
    const line = document.getElementById("line")
    image.style.display ="block"
    line.textContent=`YOUR SEARCH: ${data}`
    if(data === "Ajith" || data === "ajith" || data === "Thala" || data === "AK"){
        image.src = "Assests/Ajith.jpg"
    }
    else if(data === "Simbu" || data ==="STR" || data ==="Atman" || data === "str"){
        image.src ="Assests/STR.jpg"
    }
    else if(data === "Dhanush"){
        image.src ="Assests/Dhanush.jpg"
    }
    else if(data === "Kamal" || data ==="kamal"){
        image.src ="Assests/Kamal.jpg"
    }
    else if( data ==="Karthik" || data ==="karthik"){
        image.src = "Assests/Karthick.png"
    }
    else if(data === "PR"|| data === "Pradeep" || data === "Pradeep Ranganathan"){
        image.src ="Assests/PR.jpg"
    }
    else if(data === "Superstar" || data ==="Rajini" || data ==="rajini"){
        image.src ="Assests/Rajini.jpg"
    }
    else if(data === "SK" || data ==="sk"){
        image.src ="Assests/SK.jpg"
    }
    else if(data === "Suriya" || data ==="suriya"){
        image.src ="Assests/Suriya.jpg"
    }
    else if(data === "Vijay" || data ==="vijay" || data ==="TVK" || data ==="tvk" || data==="Thalapathy"){
        image.src ="Assests/Vijay.jpg"
    }
    else if(data === "Vikram" || data ==="vikram"){
        image.src ="Assests/Vijram.jpg"
    }
    else if(data === "Vijay Sethupathi" || data ==="VJS" || data ==="vijay sethupathi"){
        image.src ="Assests/VJS.jpg"
    }
    else {
        line.textContent ="YOUR SEARCH IS Not Found"
        image.src =" "
    }
})