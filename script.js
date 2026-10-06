function firstChar(text) {
  // your code here
	 let trimmed = text.trim();
    if(trimmed.length == 0){
        return "";
    }
    else{
        return trimmed.charAt(0);
    }
    // console.log(text.trim());
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
