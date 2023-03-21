function findWords(str, dogNames) {
  let foundMatch = false;
  for (let i = 0; i < dogNames.length; i++) {
    if (str.toLowerCase().includes(dogNames[i].toLowerCase())) {
      console.log("Matched " + dogNames[i]);
      foundMatch = true;
    }
  }
  if (!foundMatch) {
    console.log("No Matches");
  }
}


console.log(findWords("Hello Max, my name is Dog, and I have purple eyes!",["Max","HAS","PuRple","dog"]))

function replaceEvens(arr){
    let l2 = []
    for (let i = 0 ; i<arr.length; i++){
        if (i%2 ==1){ l2.push(arr[i])}
    
        else l2.push('even index')
    }

    return l2

}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))