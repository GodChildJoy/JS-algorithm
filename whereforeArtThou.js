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

  arr = 
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
