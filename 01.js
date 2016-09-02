'use strict';
// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function countsCarsByColor(input){
  let result = {};
  input.forEach(function(car){
    if (result[car.color] === undefined){
      result[car.color] = 1;
    } else { result[car.color] ++ }
  });
  return result
}

console.log(countsCarsByColor(cars));
