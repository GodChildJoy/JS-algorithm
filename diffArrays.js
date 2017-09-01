/**
 * To forgotful JOY:
 * arr1 or arr2 are objects for calling those 
 * existing methods like: filter, concat and indexOf extra
 * different with pure function definition, 
 * please notify the differnce of calling function and function definitions
 * !!!!!!! : )))))
 */


let arr1 = [1,2,3];
let arr2 = [2,3,4];

// es6
let difference = arr1.filter(x => arr2.indexOf(x) == -1)
                 .concat(arr2.filter(x => arr1.indexOf(x) == -1));
                 console.log(difference);

// es5, Yoho!
let difference1 = arr1.filter(function(x){ return arr2.indexOf(x) == -1; })
					  .concat(arr2.filter(function(x){ return arr1.indexOf(x) == -1; }));

console.log(difference1);