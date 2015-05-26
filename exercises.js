//////////////////////////////////////////////////
//////////////////////////////////////////////////
// Person [A] Drives, Person [B] Assists
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:

function forEach(list, callback) {
  var output = [];
  for (i=0; i<list[0]; i++) {

  output.push(callback(i));


  }
  return output;
}



// 2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.


//Reconstruction of .map method

var dotMap = function(array, inputFunction) {
  var dotMapOutput = [];
  forEach(array,callback) {
    dotMapOutput.push(callback(array[i]));
  }
  return dotMapOutput;
};


//Reconstruction of .reduce method

var dotReduce = function(array, inputFunction) {
  valOne = array[0];
   forEach(array,callback){
    var valOne = callback(valOne, array[1 + i]);
  }
  return valOne;
};


//Reconstruction of .filter method

var dotFilter = function(array, inputFunction) {
  filterOutput = [];
   forEach(array,callback){
    if (callback(array[i]) == true) {
      filterOutput.push(array[i]);
  } }
  return filterOutput;
};



// 3. Write a function called pluck that extracts a list of property names:

function pluck(list, propertyName) { /* Do stuff*/ }

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
// => ["moe", "larry", "curly"]


// 4. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.

function find(list, predicate) { /* Do stuff */ }

var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//=> 2
