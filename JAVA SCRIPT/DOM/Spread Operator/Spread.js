// Array
let CurrentActor =["Ak","Vijay"]
let legend = ['Kamal','Rajini']
let Actors =[...legend,...CurrentActor,'SK','STR']
console.log(Actors);

let MS =["Bison","Asuran"]
let VM =["Arasan",'VadaChennai']
let movies =[...VM,...MS]
console.log(movies);

let director =['VetriMaaran','Mariselvaraj','Pa.Ranjith']
let upcoming_actor =["Harish",'ManiKandan','PR']
let Cinema =[...CurrentActor,...legend,...MS,...VM,...director,...upcoming_actor]
console.log(Cinema);


// String
let str = 'ARASAN'
let movie =[...str]
console.log(movie);


// object
let studentDetails ={FirstName: "Vetri",SecondName:"Maaran"}
let Upcoming ={movie:"Arasan",age:45}
let VetriMaaran ={...studentDetails,...Upcoming}
console.log(VetriMaaran);




 