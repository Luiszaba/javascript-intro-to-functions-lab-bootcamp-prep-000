function shout(hello) {
 return hello.toUpperCase();
}

function whiper(hello) {
  return hello.toLowerCase();
}

function logShout(hello){
  console.log(hello.toUpperCase());
}

function logwhisper(hello) {
  console.log(hello.toLowerCase());
}

function sayHiToGrandma(hello) {
  if (hello.toLowerCase() === hello); {
    return "I can't hear you!";
  }

  if (hello.toUpperCase() === hello); {
    return "YES INDEED";
  }
  
  if (hello === "I love you, grandma."); {
    return "I love you, too.";
  }
}
