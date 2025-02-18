console.log(document.getElementById);


//let text = "Kanon";
//document.getElementById("demo").innerHTML;

//hämta sträng från Javascript till html, med p id=demo, i detta fall
text = "Flagstångsmålarpraktikant";  // test som ska synas i .html, vilket den gör via koden nedan, där innerHTML är
// variabeln text
document.getElementById("demo").innerHTML = text.length;
document.getElementById("demo2").innerHTML = text;
