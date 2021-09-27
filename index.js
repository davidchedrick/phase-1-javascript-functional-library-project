//determins array or object
function collectionType(collection){
  return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

//     Return  the original, unmodified, collection.
//  Iterates over the collection of elements, passing each element in turn to the callback function.
function myEach(collection, callback){
  const newCollection = collectionType(collection);

  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }
  return collection;
}
myEach([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection
myEach({one: 1, two: 2, three: 3}, alert);
//=> alerts each number value in turn and returns the original collection



// Return value: A new array
// Behavior: Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
function myMap(collection, callback){
  const newCollection = collectionType(collection);
  const newArray = [];

 for (let i = 0; i < newCollection.length; i++) {
    newArray.push(callback(newCollection[i]));
  }
 return newArray;
}
myMap([1, 2, 3], function(num){ return num * 3; });
// => [3, 6, 9]
myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
// => [3, 6, 9]



// Parameter:
// a collection (either an object or an array)
// a callback function
// a starting value for the accumulator (optional)
function myReduce(collection, callback, acc){
  let newCollection = collectionType(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  const len = newCollection.length;

  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  // Return :
  // A single value
  return acc;
}

// Behavior:
// Reduce iterates through a collection of values and boils it down into a single value.
//acc starts at the value that's passed in as an argument, and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.

// The callback is passed three arguments: the current value of acc, the current element/value in our iteration, and a reference to the entire collection.

// Hint: For the case when a start value for the accumulator is not passed in as an argument, think about how you'll need to adjust your function to account for the fact that the first element of the collection has already been accounted for.
myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16

myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6



// Parameters
// a collection (either an object or an array)
// a predicate (a callback function that returns true or false)
function myFind(collection, predicate){
  let newCollection = collectionType(collection);

 for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }
  return undefined;
  // Return value:
  // A single value
}
// Behavior:
// Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.
myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2
myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// => 4


// Parameters
// a collection (either an object or an array)
// a predicate (a callback function that returns true or false)
function myFilter(collection, predicate){
  const newCollection = collectionType(collection);
  const newArray = [];

  for (let i = 0; i < newCollection.length; i++) {
    
    if (predicate(newCollection[i])){
      newArray.push(newCollection[i]);
    }

  }
  return newArray;
 // Return value:
 // An array
}
// Behavior:
// Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array.
myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]
myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; });
// => []



// Parameters:
// a collection (either an object or an array)
function mySize(collection) {
  const newCollection = collectionType(collection);
  // let counter = 0
  // for (let i = 1; i <= newCollection.length; i++){
  //   counter++
  // }
  // return counter
  return newCollection.length
 // Return value:
 // An integer
}
// Behavior:
// Return the number of values in the collection.
mySize({one: 1, two: 2, three: 3});
// => 3
mySize([]);
// => 0