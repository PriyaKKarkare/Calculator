
const arr = ["nisha", "devi", "anu", "dipa"];
let input = document.getElementById("hello");
let index = 0;
// let buttons = document.querySelectorAll('button');
// console.log("karkare-----------", input, buttons);

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
//         console.log("priya------", e);

//         if (e.target.innerHTML == "=") {
//             console.log("pk---------------", e.target.innerHTML);

//             string = eval(string);
//             input.value = string;
//         }
//         else if (e.target.innerHTML === "AC") {
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTML === "DEL") {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         }
//         else {
//             string += e.target.innerHTML;
//             input.value = string;

//         }
//     })
// })

// input.onclick = () => {
//     // arr.addEventListener("click", (e) => {
//     input.innerHTML = "hi"
// }


// Function that will be called on click
// function handleClick(name) {
//     alert("You clicked: " + name);
//     // You can also do other actions here like updating the DOM
//     document.getElementById('nameContainer').innerText = "You clicked: " + name;
// }

// arr.forEach(name => {
//     const button = document.createElement('hello');
//     button.innerText = name;
//     button.onclick = () => handleClick(name);
//     document.body.appendChild(button);
// });

input.addEventListener("click", function () {
    console.log("ooooo------", (index + 1), arr.length, index < arr.length);

    // if (index < arr.length) {
    input.textContent = arr[index]; // Update the text to the current name
    index = (index + 1) % arr.length;
    // index++; // Move to the next name
    // }
});