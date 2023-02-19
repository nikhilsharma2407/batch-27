// const axios = require("axios");

const myPromise = new Promise(res => res("promise data"));
const url = "https://jsonplaceholder.typicode.com/users/1";

setTimeout(() => {
    console.log("timeout");
}, 0);
fetch(url).then(data => data.json())
    .then(userData => {
        console.log("Network response", userData)
    })

console.log("first");
myPromise.then(data => console.log(data));
console.log("second");
console.log("third");

console.clear()
const networkPromise = fetch(url);
networkPromise.then(data => {
    console.log(data);
    data.json().then(userData => {
        console.log({ userData })
        console.log(`Hello ${userData.username}`);
    })
})

// const networkPromise = axios.get(url);
// networkPromise.then(({ data }) => {
//     console.log(data);
// })

const promise = new Promise((resolve, reject) => {
    resolve({ username: "nikhil" });
    // reject("Please login to continue!!!")
});

// // async await
// const asyncFn = async()=>{
//     try {
//         const data = await networkPromise;
//         const userData = await data.json();
//         console.log(userData);
//         console.log(`Hello ${userData.username}`);
//     } catch (error) {
//         console.log(error);
//     }
//     // same as promise.then(data=>console.log(data))

// };
// asyncFn();

(async () => {
    try {
        const data = await networkPromise;
        const userData = await data.json();
        console.log(userData);
        console.log(`Hello ${userData.username}`);
    } catch (error) {
        console.log(error);
    }
})();

// same as
// networkPromise.then(data=>{
//     console.log(data);
//     data.json().then(userData=>{
//         console.log({userData})
//         // console.log(`Hello ${userData.username}`);
//     })
// })



console.log(promise);
promise.then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => {
        console.log("finally");
    });


// IIFE Immediately invoked function expression


const fn = () => console.log("hello world!!!");
fn();