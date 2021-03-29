// // Opdracht A: Find method
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
function findSpiderMan(superheroes) {
    return superheroes.name === "Spiderman";
}

console.log(superheroes.find(findSpiderMan));

// Opdracht B: ForEach method of een level hoger de map method. 

// ForEach method 
const doubleArrayValues = function (array) { 
    let times2 = [];
    array.forEach(n => {
        times2.push(n * 2);
    });
    return times2;
};
console.log(doubleArrayValues([1, 2, 3]));

// of

// Map method 
// const doubleArrayValues = function (array) {
//     const times2 = array.map(n => n * 2);
//     return times2;
// };
// const result = doubleArrayValues([1,2,3]);
// console.log(result);

// Opdracht C:
// Some method
const containsNumberBiggerThan10 = function (array) {
    return array.some(number => {
        return number > 10; 
    });
};
console.log("There is a number bigger than 10:",containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
console.log("There is a number bigger than 10:",containsNumberBiggerThan10([1, 5, 8, 9, 4, 3, 6]));

//Opdracht D: 
// includes method
const isItalyInTheGreat7 = function (array) {
    return array.includes("Italy");
}
console.log("Is Italy in The Great 7", isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])); 

//Opdracht E: 
//ForEach Method
const tenfold = function (array) {
    let timesTen = [];
    array.forEach(n => {
        timesTen.push(n * 10);        
    });
    return timesTen;
}
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// of 

// Map Method 
// const tenfold = function (array) {
//     const timesTen = array.map(n => n * 10);
//     return timesTen;
// }
// console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// Opdracht F:
// Every Method 
const isBelow100 = function (array) {
    return array.every(n => {
        return n < 100; 
    });
}
console.log("All numbers are below 100:", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]));
console.log("All numbers are below 100:", isBelow100([1, 56, 23, 76, 12, 97, 21, 53, 13, 4, 6, 89, 77, 66, 3]));

// Opdracht G: 
// const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234].reduce((accumulator, currentValue) => accumulator + currentValue);

// console.log(bigSum);

//of 

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(bigSum.reduce(reducer));

