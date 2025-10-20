// Calculate totals from an array

const numbers = [10, 20, 30, 40];


let total = 0;
for (let num of numbers) {
  total += num;
}
console.log(total);

// Calculate the average
let average = total / numbers.length;
console.log("Average:", average);


