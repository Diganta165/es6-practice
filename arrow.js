// function doubleIt(num){
//     return num*2;
// }

// const doubleIt = function(num){
//     return num*2;
// }

const doubleIt = num => num*2;

const give5 = () => 5;

const bishal =(x,y) =>{
    const sum = x+y;
    const diff = x-y;
    const res = sum *diff;
    return res;
}

const result = doubleIt(5);
console.log(result);

console.log(give5());

console.log(bishal(10,5));