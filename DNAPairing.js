// Array.prototype.push();
// String.prototype.split();



function pairElement(str) {
	var arrStr = str.split("");
	for (var i = 0; i < arrStr.length; i++) {
		switch (arrStr[i]) {
			case 'A': 
				arrStr[i] = [arrStr[i], 'T'];
				break;
			case 'T': 
				arrStr[i] = [arrStr[i], 'A'];
				break;
			case 'C': 
				arrStr[i] = [arrStr[i], 'G'];
				break;
			case 'G': 
				arrStr[i] = [arrStr[i], 'C'];
				break;
		}
	}
  return arrStr;
}

console.log(pairElement("ATA"));