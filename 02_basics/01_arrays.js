const myArr = [0,1,2,3,4]

const myHeros = ["Shahid", "Raza"]

// Array Method

// myArr.push(10);
// myArr.pop(4);

//myArr.unshift(12);
// myArr.shift();
//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));

//const newArr= myArr.join();
//console.log(newArr);

console.log(myArr);
const newArr= myArr.slice(1, 3);
const newArr1= myArr.splice(0, 5);
console.log("B", newArr);
console.log("C", newArr1);