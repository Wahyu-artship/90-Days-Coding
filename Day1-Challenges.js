// ============================================
// DAY 1: VARIABLE CHALLENGES
// By: Wahyu
// ============================================

console.log("=== DAY 1 CHALLENGES ===\n");

// --------------------------------------------
// LEVEL 1: Basic Variable Declaration
// --------------------------------------------
console.log("--- LEVEL 1 ---");

const tokenName1 = "Ethereum";
const tokenPrice1 = 3000;
const isActive1 = true;

console.log("Token:", tokenName1);
console.log("Price: $" + tokenPrice1);
console.log("Active:", isActive1);

console.log("\n");

// --------------------------------------------
// LEVEL 2: Update Variables
// --------------------------------------------
console.log("--- LEVEL 2 ---");

let balance2 = 1000;
console.log("Initial balance:", balance2);

balance2 = balance2 + 500;
console.log("After deposit:", balance2);

balance2 = balance2 - 200;
console.log("After withdrawal:", balance2);

console.log("\n");

// --------------------------------------------
// LEVEL 3: Calculate Total Supply
// --------------------------------------------
console.log("--- LEVEL 3 ---");

const holder1Balance3 = 5000;
const holder2Balance3 = 3000;
const holder3Balance3 = 2000;
const totalSupply3 = holder1Balance3 + holder2Balance3 + holder3Balance3;

console.log("Total Supply:", totalSupply3);

console.log("\n");

// --------------------------------------------
// LEVEL 4: String Concatenation
// --------------------------------------------
console.log("--- LEVEL 4 ---");

const firstName4 = "Wahyu";
const lastName4 = "Artship";
const age4 = 21;
const message4 = "My name is " + firstName4 + " " + lastName4 + " and I'm " + age4 + " years old";

console.log(message4);

console.log("\n");

// --------------------------------------------
// LEVEL 5: Wallet Address Formatting
// --------------------------------------------
console.log("--- LEVEL 5 ---");

const fullAddress5 = "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb";
const first6_5 = fullAddress5.slice(0, 6);
const last4_5 = fullAddress5.slice(-4);
const shortAddress5 = first6_5 + "..." + last4_5;

console.log("Full:", fullAddress5);
console.log("Short:", shortAddress5);

console.log("\n");

// --------------------------------------------
// LEVEL 6: Token Value Calculator
// --------------------------------------------
console.log("--- LEVEL 6 ---");

const tokenAmount6 = 100;
const tokenPrice6 = 2.5;
const totalValue6 = tokenAmount6 * tokenPrice6;

console.log(tokenAmount6 + " tokens x $" + tokenPrice6 + " = $" + totalValue6);

console.log("\n");

// --------------------------------------------
// LEVEL 7: Percentage Calculation
// --------------------------------------------
console.log("--- LEVEL 7 ---");

const userTokens7 = 500;
const totalSupply7 = 10000;
const percentage7 = (userTokens7 / totalSupply7) * 100;

console.log("User owns " + percentage7 + "% of total supply");

console.log("\n");

// --------------------------------------------
// LEVEL 8: Gas Cost Calculator
// --------------------------------------------
console.log("--- LEVEL 8 ---");

const gasPrice8 = 50000000000;
const gasUsed8 = 21000;
const gasCostWei8 = gasPrice8 * gasUsed8;
const gasCostEth8 = gasCostWei8 / 1000000000000000000;

console.log("Gas cost in Wei:", gasCostWei8);
console.log("Gas cost in ETH:", gasCostEth8);

console.log("\n");

// --------------------------------------------
// LEVEL 9: Multiple Operations
// --------------------------------------------
console.log("--- LEVEL 9 ---");

let balance9 = 1000;
console.log("Starting:", balance9);

balance9 += 500;
console.log("After deposit 500:", balance9);

balance9 -= 200;
console.log("After withdraw 200:", balance9);

balance9 += 1000;
console.log("After deposit 1000:", balance9);

balance9 -= 300;
console.log("After withdraw 300:", balance9);

console.log("Final balance:", balance9);

console.log("\n");

// --------------------------------------------
// LEVEL 10: Burn & Mint Simulation
// --------------------------------------------
console.log("--- LEVEL 10 ---");

let supply10 = 1000000;
console.log("Initial supply:", supply10);

supply10 -= 50000;
console.log("After burn 50000:", supply10);

supply10 += 20000;
console.log("After mint 20000:", supply10);

supply10 -= 10000;
console.log("After burn 10000:", supply10);

console.log("Final supply:", supply10);

console.log("\n");

// --------------------------------------------
// BONUS LEVEL: Complex Calculation
// --------------------------------------------
console.log("--- BONUS LEVEL ---");

const totalToVest = 12000;
const vestingPeriod = 12;
const cliffMonths = 3;
const tokensPerMonth = totalToVest / vestingPeriod;

console.log("Total to vest:", totalToVest);
console.log("Per month:", tokensPerMonth);

// After 3 months (still in cliff)
const after3Months = 0;
console.log("After 3 months (cliff):", after3Months);

// After 6 months (3 months cliff + 3 months vesting)
const after6Months = (6 - cliffMonths) * tokensPerMonth;
console.log("After 6 months:", after6Months);

// After 12 months (all vested)
const after12Months = totalToVest;
console.log("After 12 months:", after12Months);

console.log("\n");
console.log("✅ ALL CHALLENGES COMPLETE!");
