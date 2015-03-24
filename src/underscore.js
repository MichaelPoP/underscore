var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if (n == null) {
      return array[0];
    } else {
    return _.initial(array, array.length - n);
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if (n == null) {
      return array[array.length - 1];
    } else {
    return _.rest(array, Math.max(0, array.length - n));
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var newArr = [];
    for(var i in array){
      if(newArr.indexOf(array[i]) === -1){
        newArr.push(array[i]);
      }
    }
    return newArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    return _.map(array, _.property(key));
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
   return array.indexOf(target) >= 0; 
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    // var newArr = [];
    if (typeof newArr === "undefined") {
      newArr = [];
    } else {
      newArr = newArr;
    }
    array.forEach(function(elem){
      if (Array.isArray(elem)){
        myFunctions.flatten(elem); 
      } else {
        newArr.push(elem);
      }
    });
    return newArr;
  }
};
module.exports = myFunctions;
