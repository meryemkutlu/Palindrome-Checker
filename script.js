const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", countVowel);

function countVowel() {
    let vowelCount = 0;
    let wordVal = word.value.toLowerCase();
     
    for (let i = 0; i < wordVal.length; i++ ) { 
      let letter = wordVal[i];
      if (letter.match(/([a,e,i,o,u])/)) {
        vowelCount++;
      }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

// function palindrome(){
//     const word = document.querySelector(".input-text").value;
//     let len = word.length;

//     let start = word.substring(0, Math.floor(len / 2)).
//     toLowerCase();
//     let end = word.substring(len - Math.floor(len / 2)).
//     toLowerCase();


//     // let flip = end.split("").reverse().join("");
//     let flip = [...end].reverse().join("");
// if(start == flip){
//     result.innerHTML =  `${word.toUpperCase()} is a 
//     palindrome`;
// } else {
//     result.innerHTML =  `${word.toUpperCase()} is NOT
//     palindrome`;
// }
//     //   alert(flip);
//     // alert(start);
   



// }