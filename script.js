function firstNonRepeatedChar(str) {
 // Write your code here
	let count =1;
	for(let i=0;i<str.lenght;i++){
		if(str[i]== str[i+1]){
			count++;
		}else {
			return null;
		}
		
	}
	
}
firstNonRepeatedChar();
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 