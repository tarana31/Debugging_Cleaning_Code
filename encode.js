
function encode(word) {
    //somewhere to setore the converted caracters
    let result = [];
    //next we loop over each character in the string.
  for(let position in word){
    //and save the charcode to the array
    console.log(position);
  //  result.push(word.charCodeAt(position-1));
    result.push(word.charCodeAt(position));
  }
  // and return that list of codes, separated by colons
  
    console.log(`Inside of encode function `);
    console.log(result);
    
    return result.join(':');
  }
  
  function decode(hash) {
    //split the code by semicolons!
    let arr = hash.split(':');
    // again somewhere to put our codes
    let result = [];
    //loop over the codes
    for(let code of arr){
      //changke the code back to the string character equivalent
      result.push(String.fromCharCode(code));
    }
    return result.join('');
  }
  
  
  let message = "I'm trying to send this secret message.";
  let encodedMessage = encode(message);
  let decodedMessage = decode(encodedMessage);
  
  
  console.log(message);
  console.log(encodedMessage);
  console.log(decodedMessage);
  
  // task to be done
  // Tasks the google doc asked to do
  console.log(encode('dog'));
  console.log(encode('cat'));
  console.log(encode('My name is Groot'));
  console.log(decode('99:97:116'));
  console.log(decode('100:111:103'));
  console.log(decode('77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116'));