//map

let nums = [1, 2, 3];

let doubled = nums.map((v) => {
  return v * 2;
});
console.log(doubled);

let arr = [1, 20, 40, 12, 14, 18, 7];

let ans = arr.reduce((sum, i) => {
  return sum + i;
}, 0);
console.log(ans);

let maxi_in_arr = arr.find((num) => num == 40);
console.log(maxi_in_arr);

let num = 20;
console.log(`Wether ${num} is present in the array`, arr.includes(num));
