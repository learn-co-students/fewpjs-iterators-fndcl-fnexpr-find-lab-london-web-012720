const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(arraySB) {
  debugger;
  let hi = arraySB.find(function(s) {
    return s["result"] === "W";
  });
  if (hi != undefined) {
    return hi["year"];
  } else {
    return hi;
  }
}
