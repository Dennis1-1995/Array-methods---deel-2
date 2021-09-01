// A
const superheroes = [
{name: "Batman", alter_ego: "Bruce Wayne"}, 
{name: "Superman", alter_ego: "Clark Kent"}, 
{name: "Spiderman", alter_ego: "Peter Parker"}];

function findSpiderMan(hero){
    return hero.find(({name}) => name === 'Spiderman');
}
console.log(findSpiderMan(superheroes));

//===============================================================

// B
const doubleArrayValues = function(numbers){
    let array = numbers.map(x => x*2);
    console.log(array);
}
doubleArrayValues([1, 2, 3]) 
//result should be [2, 4, 6]

//===============================================================

// C

const containsNumberBiggerThan10 = function (arrayNumbers){
    let number10 = arrayNumbers.some(x => x > 10);
    console.log(number10);   
}

containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]) 
// result should be true
containsNumberBiggerThan10([1,2,1,2,1,2])
// result should be false

//===============================================================

// D

const isItalyInTheGreat7 = function (italy){
    let checkItaly = italy.some(x => x === 'Italy');
    console.log(checkItaly);
}

isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// result should be true

//===============================================================

// E

function tenfold(numberArray) {
   result = [];
   numberArray.forEach(function(number) {
      const tenfoldNumber = number * 10;
      result.push(tenfoldNumber);
   });
   return result;
}

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

//===============================================================

// F

function isBelow100(numbers){
    let result = numbers.every(function(number){
        return number < 100;
    })
    return result;
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false

//===============================================================

// G Bonus

function bigSum(sum){
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    let sumTotal = sum.reduce(reducer)
    return sumTotal;
}

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118