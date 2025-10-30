// Extracting values from Array and Object and they storing the varaiable easily
var director = ["VetriMaaran", "MaariSelvaraj", "KS", "VJS","ManiRatnam","Nelson","Lokesh"];
var [first, second, third, fourth, fifth, sixth,seventh] = director;
const input = document.getElementById("input");
const Director_Details= `First Director: ${first}, Second Director: ${second}, Third Director: ${third}, Foruth Director: ${fourth}, Fifth Director: ${fifth}, Sixth Director: ${sixth} and Final Director: ${seventh}`;

const cricket =["Dhoni","Virat","Rohit"]
var [finisher, king, hitman] = cricket
const player_details =`The Best Finisher:${finisher}
The King of Cricket: ${king}
Hitman: ${hitman} `

const movie = ["Vikram", "Kaithi", "Master"];
const [one, two, three] = movie;
const movie1 =`Top 3 Movies of Lokesh Kanagaraj: ${one}, ${two}, ${three}`

const awards = ["Best Film", "Best Director"];
const [award1, award2, award3 = "Best Music"] = awards;
const future_award = `The first Award${award1}, Second Award: ${award2} Third Award: ${award3}`

input.textContent = Director_Details + player_details + movie1 + future_award 

const user = {name: "Rajini",age: 74,role: "Actor"};
const output ={name,age,role} = user
console.log(name);



