// ASYNC BASICS EXERCISE

//1 
let name1 = `Falcon`;
function falconName() {
  console.log(`Question 1`);
  console.log(name1);
}


function falcon(n, callback) {
  setTimeout(() => {
      name1 = n;
      callback ();
  }, 1000);
}
falcon(`Sam Wilson`, falconName);
falconName();


// 2 
let name2 = "Winter Soldier";

function winterSoldierName() {
  console.log(`Question 2`);
  console.log(name2);
}

function winterSoldier(n) {
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
    name2 = n;
    resolve();
  }, 2000);
});
}
winterSoldier(`Bucky Barnes`)
  .then(winterSoldierName);
winterSoldierName()
  


// 3 Use a promise in the agent13 function (Put the setTimeout inside the function with the resolve and reject parameters that is passed into the Promise). 

//Also, use Async/Await so the value of `Sharon Carter` will display in the terminal/console for the name3 variable when the falconName function is run.


let name3 = "Agent 13";


async function agent13Name() {
  await agent13(`Sharon Carter`);
  console.log(`Question 3`);
  console.log(name3);
}

function agent13(n){
  return new Promise ((resolve, reject) => {
  setTimeout(() => {
  name3 = n;
  resolve();
  }, 3000);
});
}

agent13Name();



// 4  Use Promise.all to display the values set for p1, p2, and p3 in a single array in the console/terminal.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve('First Promise')
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Second Promise')
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Third Promise')
  }, 4000);
});