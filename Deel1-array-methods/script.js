// Opdracht A:
const addTheWordCool = function(array){
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// Opdracht B: 
const amountOfElementsInArray = function (array) {
    return array.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

// 3

// Opdracht C:
// const selectBelgiumFromBenelux = function (array) {
//     return array[0];
// }

// of

// const selectBelgiumFromBenelux = function (array) {
//     return array.slice(0,1);
// }

// of 

const selectBelgiumFromBenelux = function (array) {
    return array.shift();
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 

  //array begint bij cijfer 0 te tellen.

// Opdracht D:

const lastElementInArray = function (array) {
    return array.pop();
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// resultaat: "Schildpad"

// Opdracht E:
 
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
// const impeachTrumpSlice = function(array) {
//    const newArray = array.slice(1,4);
//    console.log("New array:", newArray, "De onaangetaste array", array);
//    return newArray;
// }

const impeachTrumpSplice = function(array) {
    const removedElement = array.splice(0,1);
    console.log("removed element:", removedElement, "De gemuteerde veriant");
    return array;
}

// console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// opdracht F: 
const stringsTogether = function (array) {
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

// Opdracht G:

const combineArrays = function (array1, array2) {
    return array1.concat(array2);
}

console.log(combineArrays([1,2,3], [4,5,6]));
console.log(combineArrays(["kwik", "kwek", "& kwak"], [2, 5, 10]));
// resultaat: [1,2,3,4,5,6]