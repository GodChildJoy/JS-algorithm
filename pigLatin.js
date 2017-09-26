// string.split() convert string to array
// string.substr(begin, length) just cut string
// string.slice(begin, end);
// array.push(ele);
// arrar.indexOf();
// string.indexOf();

function translatePigLatin(str) {
  let vowel = "aeiou";
  
  	if (vowel.indexOf(str.charAt(0)) !== -1) {
  		return str = str + 'way';
  	} 
    else {
      for (let i = 0; i<str.length; i++) {
    		if (vowel.indexOf(str[i]) !== -1 ) {
  	  		console.log(i);
          return str = str.slice(i) + str.substr(0, i) + 'ay';
  	  	}
      }
  	}
}

console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));

//solution2
function translatePigLatin(str) {
  return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}
