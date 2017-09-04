var obj = {a: 1, b: 2, c: 3};
    
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

console.log("=====================================");

let source1 = [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }];
let source2 = { "a": 1 };
let source3 = { "a": 1, "b": 2 };

for (var prop in source1) {
	console.log(prop);
	console.log(source1[prop]);
}

for (var prop in source2) {
	console.log(prop);
	console.log(source2[prop]);
}

console.log("source3 =====================================");

for (var prop in source3) {
	console.log(prop);
	console.log(source3[prop]);
}