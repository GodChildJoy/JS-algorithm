// ([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return 
// [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]
// test input: [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  arr = collection.filter( obj => {
  	for (var i in source) {
  		console.log(source[i]);
  		console.log(obj[i]);
  		if (source[i] != obj[i]) {
  			return false;
  		}
  		return true;
  	}
  });
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); 

console.log("=====================================");

var obj = {a: 1, b: 2, c: 3};
    
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

console.log("=====================================");

let source1 = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
let source2 = { "a": 1 };

for (var prop in source1) {
	console.log(source1[prop]);
}

for (var prop in source2) {
	console.log(source2[prop]);
}
