let fomrs = document.getElementById('form');
let input = document.querySelector("input");
let button = document.getElementById("submit");
const list = document.querySelector("list")

// create an array to store the data

let NameArray = [];

//get the names and store them in the array

fomrs.addEventListener("submit", (event) => {
    event.preventDefault();
    NameArray.push(input.value);
    displayNames();
    input.value = "";
});

// function to display names

function displayNames() {
    list.innerHTML = "";
    NameArray.forEach((name) => {
        list.innerHTML += `<li>${name}</li>`
    })
}
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        NameArray = NameArray.filter((name) => name !== event.target.innerHTML);
        displayNames();
    }
})
const fetchNames = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const Name = await res.json();
    Name.forEach((e) => { NamesArray.push(e.Name);
        displayNames();
    });
}
fetchNames();
