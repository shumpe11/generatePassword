let smallArray = "abcdefghijklmnopqrstuvwxyz";
let largeArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberArray = "1234567890";
let signArray = "!@#%^&*";


function measureLength(){
  let length = document.getElementById("length");
  let number = document.getElementById("font-length");
  number.innerText = length.value
}

function generatePassword(){
  let length = Number(document.getElementById("font-length").innerText);
  let number = document.optionarea.number;
  let small = document.optionarea.small;
  let large = document.optionarea.large;
  let sign = document.optionarea.sign;
  let limit = document.optionarea.limit;
  let proto = "";
  let password = "";


  // let check = [length,small,large,number,sign,limit];
  //
  // for(i=0; i<check.length; i++){
  //   if(check[i].checked === true){
  //
  //   }
  // }
  //
  console.log(length);

  if(number.checked){
    proto = proto.concat(numberArray);
  }
  if(small.checked){
    proto = proto.concat(smallArray);
  }
  if(large.checked){
    proto = proto.concat(largeArray);
  }
  if(sign.checked){
    proto = proto.concat(signArray);
  }

  proto = proto.split('');
  console.log(proto);

  for(i=0; i<length; i++){
    if(limit.checked && i===0 || i === length+1){
      var limited = proto.filter(itemA =>
        !numberArray.concat(signArray).includes(itemA)
      );
      password = password + limited[Math.floor(Math.random() * limited.length)];
    }
    else{
      password = password + proto[Math.floor(Math.random() * proto.length)];
    }
  }

  document.getElementById("password").innerText = password;


}
