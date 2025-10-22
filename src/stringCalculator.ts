export function add(numbers: string): number {
  // step 1 & 2 (empty string returns 0 and single number returns itself)
  //   if (!numbers) return 0;
  //   return Number(numbers);

  // step 3 (handle two commaseparated numbers)
  //   if (!numbers) return 0;
  //   const parts = String(numbers).split(",");
  //   if (parts.length !== 2) {
  //     throw new Error("Only two numbers are allowed.");
  //   }
  //   const nums = parts.map((n) => Number(n));
  //   return nums.reduce((a, b) => a + b, 0);

  // step 4 (handle unknown number of inputs)
  //   if (!numbers) return 0;
  //   const parts = String(numbers).split(",");
  //   const nums = parts.map((n) => Number(n));
  //   return nums.reduce((a, b) => a + b, 0);

  // step 5 (support newline as delimiter)
  //   if (!numbers) return 0;
  //   const parts = String(numbers).split(/,|\n/);
  //   const nums = parts.map((n) => Number(n));
  //   return nums.reduce((a, b) => a + b, 0);
  //   Example : "5\n10\n15" , "1\n2,3"


  // step 6 (support custom delimiter //;\n syntax)
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let nums = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const custom = parts[0].substring(2);
    // Escape regex special characters
    delimiter = new RegExp(custom.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    nums = parts[1];
  }

  const values = nums.split(delimiter).map((n) => Number(n));
  return values.reduce((a, b) => a + b, 0);

//   Example: add("//;\n1;2;3;4");
  
}
