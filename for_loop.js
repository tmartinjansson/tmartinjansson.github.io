const numberInput = document.getElementById("number-input");
const submitButton = document.getElementById("submit");
const resultList = document.getElementById("result");

submitButton.addEventListener("click", () => {
    const numberOflistItems = Number(numberInput.value);

    //Tömmer vår <li>  => <li></li>
    resultList.innerHTML = "";

    for(let i = 0; i < numberOflistItems; i++){
        const listItem = document.createElement("li");
        listItem.textContent = "Punkt " + (i+1);
        resultList.appendChild(listItem);
    }
});

// for loop tre olika delar mellan ()
//i är en variabel som skapats i for loop, och i är början, alltså 0
//document.createElement() inbyggd i JS, behövs för att kunna säga till datorn, vad ska vi skapa?
//när vi gör variabeln listItem inuti loopen så skapar vi element, istället för att hämta.