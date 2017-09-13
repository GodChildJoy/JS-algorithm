function myReplace(str, before, after) {
	// console.log(typeof(before));
	// console.log(before.charAt(0));
	// console.log(before.toUpperCase().charAt(0));

	// // console.log(before.toUpperCase());
	// console.log(after.split('').slice(1, after.length+1).join(''));
	console.log(after.slice(1));
	var afterRe = after.slice(1);

	if (before.charCodeAt(0) === before.toUpperCase().charCodeAt(0)) {
		after = after.charAt(0).toUpperCase() + afterRe;
	} else {
		after = after.charAt(0).toLowerCase() + afterRe;
	}

	var re = new RegExp(before, "g");
	var newStr = str.replace(re, after);
  return newStr;
}

console.log(myReplace("A Jumped quick brown fox jumped over the lazy dog", "Jumped", "leaped"));