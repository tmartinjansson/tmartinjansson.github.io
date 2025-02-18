//the reduce() method
//The reduce() method takes a user-defined callback function as its first required argument.
// The function gets called on each element in the array.

//Arrays are NOT Constants. The keyword const is a little misleading.
// It does NOT define a constant array. It defines a constant reference to an array.

//create an array
const myArray = [5, 10, 20, 40, 80, 160]

//use reduce() method to find the sum
let sum = myArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

document.getElementById("demo2").innerHTML = myArray;    
document.getElementById("demo").innerHTML = sum.valueOf();    

//reduce is the first argument of the function. as I understand it, you reduce the element currentValue, and store it in the accumulator.
//The way that I understand it, you repeat this with all but the final elements, and they all get stored in accumulator.
//But I'm not sure that the explanation for the code says that it does. So I'm not 100% sure that I understand
//the actual code here.

//Now you have element 1-penultimate in the accumulator. add then upp with currentValue which is the final element.
//0 is the initialValue, and I believe that you need that one for syntax-reasons

//It was difficult to manage to get the .html page to display the sum of the Array, but I managed!
//I also managed to code a line to display what the actual values of the sum is!

console.log(myArray);




