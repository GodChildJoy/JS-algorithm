// compare objects are the same reference https://gist.github.com/nicbell/6081098
// answers: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-wherefore-art-thou/16092
// ([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return 
// [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
// test input: [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }

  /*
  	this on won't work because if find one match source will return,
  	won't check the after prop of source
  	eg: 
   */
  // arr = collection.filter( obj => {
  // 	for (var i in source) {
  // 		if (source[i] == obj[i]) {
  // 			return true;
  // 		}
  // 		return false;
  // 	}
  // });
 

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  var keys = Object.keys(source);

  return collection.filter( obj => {
  	/* solution1 */
  	// return keys.every(function (key) {
  	// 	// callback function statements
  	// 	return obj.hasOwnProperty(key) && obj[key] === source[key];
  	// });

  	/* solution2 */
  	// note: map() do the calulation for each element, 
  	// but filter() will filter out elements return ture value
  	// therefore need reduce to put return true && ture together 
  	return keys.map(function(key) {
  		console.log("Inside map function statement");
  		console.log(obj.hasOwnProperty(key));
  		console.log(obj[key] === source[key]);
  		// return two boolean value return from following statement
  		return obj.hasOwnProperty(key) && obj[key] === source[key];
  	}).reduce(function(a, b) {
  		// a is result of obj.hasOwnProperty(key)
  		// b is result of obj[key] === source[key]
  		console.log("Inside reduce function statement");
  		console.log(a);
  		console.log(b);
  		// reduce both condition inside map function return true
       return a && b;
    });
  });

}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
