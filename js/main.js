//============ Exercise #1 ============//
/*
Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" 
Expected output
Given arr: ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr: ["even index","Baseball","even index","Goku","even index","Rodger"]
*/

const testArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// console.log(arr)

function replaceEvens(arr){
    for(let i=0; i<arr.length; i++){
      console.log(i)
        if(i%2 == 0){
            arr.splice(i,1,"even index")
           
}
}
return arr
}
console.log(replaceEvens(testArr))


// replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])
// let Splice = (arr) =>{
//     return arr.Splice(arr[i]%2 == 0) 
//     }

    

//============ Exercise #2 ============//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Taco Bell",
    burgers:"Shake Shack",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let favFood = (aperson) => {
    for(let i=0; i<Object.keys(aperson).length; i++){
        console.log(Object.keys(aperson)[i])
        console.log(Object.values(aperson)[i])
    }
}
favFood(person)

// if(Array.isArray(Object.values(person)[i])){
// }