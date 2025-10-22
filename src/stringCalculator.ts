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
  //   if (!numbers) return 0;

  //   let delimiter = /,|\n/;
  //   let nums = numbers;

  //   if (numbers.startsWith("//")) {
  //     const parts = String(numbers).split("\n");
  //     const custom = parts[0].substring(2);
  //     // Escape regex special characters
  //     delimiter = new RegExp(custom.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  //     nums = parts[1];
  //   }

  //   const values = nums.split(delimiter).map((n) => Number(n));
  //   return values.reduce((a, b) => a + b, 0);

  //   Example: add("//;\n1;2;3;4");

  // step 7 (throw error for negative numbers)
  //   if (!numbers) return 0;

  //   let delimiter = /,|\n/;
  //   let nums = numbers;

  //   if (numbers.startsWith("//")) {
  //     const parts = String(numbers).split("\n");
  //     const custom = parts[0].substring(2);
  //     delimiter = new RegExp(custom);
  //     nums = parts[1];
  //   }

  //   const arr = nums.split(delimiter).map((n) => Number(n));
  //   const negatives = arr.filter((n) => n < 0);
  //   if (negatives.length)
  //     throw new Error(`negatives not allowed: ${negatives.join(",")}`);

  //   return arr.reduce((a, b) => a + b, 0);

  //   Example: add("//#\n1#2#-3#4");


  // step-8
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let nums = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const custom = parts[0].substring(2);
    // Escape regex special characters to avoid breaking RegExp
    delimiter = new RegExp(custom.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    nums = parts[1];
  }

  const arr = nums.split(delimiter).map((n) => Number(n));

  const negatives = arr.filter((n) => n < 0);
  if (negatives.length)
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);

  const valid = arr.filter((n) => n <= 1000);
  return valid.reduce((a, b) => a + b, 0);
//   Example : add("1,1001,2,3")

}
