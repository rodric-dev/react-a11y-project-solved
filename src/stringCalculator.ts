export function add(numbers: string): number {
  // step 1 & 2
  //   if (!numbers) return 0;
  //   return Number(numbers);

  // step 3
//   if (!numbers) return 0;
//   const parts = String(numbers).split(",");
//   if (parts.length !== 2) {
//     throw new Error("Only two numbers are allowed.");
//   }
//   const nums = parts.map((n) => Number(n));
//   return nums.reduce((a, b) => a + b, 0);

// step 4
   if (!numbers) return 0;
  const parts = String(numbers).split(",");
  const nums = parts.map((n) => Number(n));
  return nums.reduce((a, b) => a + b, 0);
}
