// function

function toUpper(text) {
    const upperCased = text.toUpperCase();
    console.log(upperCased);
}

const toUpper = () => {

} 

// string concatenation 
const name = "david";
// const age = "18";

console.log(`hello it's me ${name} and I'm ${age}`);

// if else statements 
const age = "18";
if (age > 20) {
   console.log("come in buddy");
} else if (age < 15) {
    console.log("fuck off");
} else {
    console.log("you are not old enough");
}

// arrays 
const schedule = ['Wake up', 'Eat', 'film a video', 'watch korean movies'];
// console.log(schedule[0]);     // to access my first schedule,  index of arrays starts from 0
schedule.indexOf('Wake up');  // to get the index or number of my item 'wake up
schedule.push('Bath');    // to add a new item to my schedule, at the end of the old ones
schedule.pop(); // remove the last item on my schedule
schedule.shift(); // remove the first item on my schedule
schedule.unshift('sleep');  // add a new item to my schedule, at the beginning of the old ones
console.log(schedule);

const film = schedule.indexOf('film a video');
console.log(film);
console.log(schedule[film]);
