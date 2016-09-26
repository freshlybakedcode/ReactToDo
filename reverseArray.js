var toBeReversed = ["a", "b", "c", "d", "e"];

function reverse(arr) {
  for (i=0; i<arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
}

console.log(`Before: ${toBeReversed}`)
reverse(toBeReversed);
console.log(`After: ${toBeReversed}`)
