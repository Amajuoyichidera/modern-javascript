// function

// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// const toUpper = () => {

// } 

// string concatenation 
// const name = "david";
// const age = "18";

// console.log(`hello it's me ${name} and I'm ${age}`);

// if else statements 
// const age = "18";
// if (age > 20) {
//    console.log("come in buddy");
// } else if (age < 15) {
//     console.log("fuck off");
// } else {
//     console.log("you are not old enough");
// }

// arrays 
// const schedule = ['Wake up', 'Eat', 'film a video', 'watch korean movies'];
// // console.log(schedule[0]);     // to access my first schedule,  index of arrays starts from 0
// schedule.indexOf('Wake up');  // to get the index or number of my item 'wake up
// schedule.push('Bath');    // to add a new item to my schedule, at the end of the old ones
// schedule.pop(); // remove the last item on my schedule
// schedule.shift(); // remove the first item on my schedule
// schedule.unshift('sleep');  // add a new item to my schedule, at the beginning of the old ones
// console.log(schedule);

// const film = schedule.indexOf('film a video');
// console.log(film);
// console.log(schedule[film]);


// const user = {
//     name: 'david',
//     age: 18,
//     married: false,
//     purchases: ['phone', 'car', 'house','laptop'],

//     sayName: function() {
//         console.log(this.name);
//     }
// };
// user.sayName();

// function sayName() {
//     console.log(`my age is ${this}`);
// }
// // console.log(user.purchases);   // to access the purchases of the user


// // if statements
// const men = ["david", "dave", "sam", "james", "joseph"]

// for(name of men) {
//     console.log(`Hello there ${name}`);
//     if (name === "david") {
//         console.log("David How Far");
//         break;
//     }
// }

// // while loops

// let loading = 0;

// while (loading < 100) {
//     console.log("website is still loading...");

//     loading++;
// }

// Dom manipulations

// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// // text.style.backgroundColor = "red";
// changeColor.addEventListener('click', function(){
//     text.classList.toggle("change")
// });

const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function(){
    // create an li
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    // add the input value inside that new li
    newLi.appendChild(liContent);
    // attaching the li to the user list
    userList.appendChild(newLi);
});

// for(user of userList) {
//     user.addEventListener("click", function() {
//         this.style.color = "red";           
//     });
// }