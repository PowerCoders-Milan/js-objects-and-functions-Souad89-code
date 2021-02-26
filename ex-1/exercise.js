// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function sentence(noun, verb, adverb, adjective) {
    return noun + verb + adverb + adjective;
  }
/*console.log(sentence("Giulia ", "is ", "really ", "beautiful "));*/
let noun = prompt("please insert the noun!");
let verb = prompt("please insert the verb!");
let adverb = prompt("please insert the adverb!");
let adjective = prompt("please insert the adjective!");
window.alert(sentence(noun +" " , verb +" " , adverb +" " , adjective + "."));
