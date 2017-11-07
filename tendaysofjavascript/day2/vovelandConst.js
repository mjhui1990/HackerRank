function vowelsAndConsonants(s) {
    let constarray = [];
    let line = s.split("");
    for (let value of line) {
      if ( value == "a" || value == "e" || value == "i" || value == "o" || value == "u") {
        console.log(value);
      }else {
          constarray.push(value)
      }
}for (let values of constarray) {
    console.log(values);
}
}

//give a string S print out all vovels then print out all constnants