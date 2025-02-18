//let text = "Kanon";
//document.getElementById("demo").innerHTML;

//hämta sträng från Javascript till html, med p id=demo, i detta fall


//split delar upp strängen i varje karaktär för sig, reverse ändrar ordninsföljden, join bygger ihop igen
let text = "Flagstångsmålarpraktikant"; 
let result = text.split("").reverse().join("");
document.getElementById("demo").innerHTML = result;
document.getElementById("demo2").innerHTML = text;

console.log(result);


