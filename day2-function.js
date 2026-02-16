// Day 2: FUNCTION
// Time: [16-02-2026]

console.log("=== Day 2 : FUNCTION ===\n");

// BAGIAN 1: Function Dasar

// Function tanpa parameter dan tanpa return
function sayHello() {
    console.log("Hello, Wahyu!");
}

// Panggil Function
sayHello();

// Function dengan 1 parameter
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Panggil dengan beberapa input
greet("Wahyu");
greet("Web3 Enthusiast");
greet("Smart Contract Developer");

// Function dengan 2 parameter
function introduce(name, age) {
    console.log("My name is " + name + " and I am " + age + " years old.");
}

introduce("Wahyu", 21);

// BAGIAN 2: Function dengan return

// Function yang return nilai
function add(a, b) {
    const result = a + b;
    return result;
}

// Simpan hasil ke variable
const sum = add(5, 3);
console.log("5, 3 =", sum);


// Function untuk hitung token value
function calculateTokenValue (amount, price) {
    return amount * price;
}

const value2 = calculateTokenValue(50, 10);
console.log("50 tokens x $10 =$" + value2);


// BAGIAN 3: Arrow Function (Modern Way)

// Cara Lama (function keyword)
function multiply(x, y) {
    return x * y;
}

// Cara Modern (arrow function)
const multiplyArrow = (x, y) => {
    return x * y;
};

// Cara MODERN SUPER SHORT 
const multiplyShort= (x, y) => x * y;

console.log("Function biasa:", multiply(4, 5));
console.log("Arrow function:", multiplyArrow(4, 5));
console.log("Arrow Short:", multiplyShort(4, 5));


// Contoh real: Format address
const formatAddress = (address) => {
    const start = address.slice(0, 6);
    const end = address.slice(-4);
    return start + "..." + end;
};

const fullAddress = "0x65e24dbcc1c7B375C6Fd9Ede8d0e014BFfDb3302";
const shortAddress = formatAddress(fullAddress);
console.log("Full:", fullAddress);
console.log("Short:", shortAddress);


// BAGIAN 4: Real Smart Contract Examples
// --------------------------------------------

// Check if balance is sufficient
const hasSufficientBalance = (balance, amount) => {
    if (balance >= amount) {
        return true;
    } else {
        return false;
    }
};

console.log("Balance 1000, need 500:", hasSufficientBalance(1000, 500));
console.log("Balance 100, need 500:", hasSufficientBalance(100, 500));


// Calculate gas cost
const calculateGas = (gasPrice, gasUsed) => {
    const gasCostWei = gasPrice * gasUsed;
    const gasCostEth = gasCostWei / 1000000000000000000;
    return gasCostEth;
};

const gas = calculateGas(50000000000, 21000);
console.log("Gas cost:", gas, "ETH");


// Burn tokens
function burnTokens(currentSupply, burnAmount) {
    if (burnAmount > currentSupply) {
        console.log("❌ Error: Can't burn more than supply!");
        return currentSupply;
    }
    
    const newSupply = currentSupply - burnAmount;
    console.log("🔥 Burned", burnAmount, "tokens");
    console.log("📊 New supply:", newSupply);
    return newSupply;
}

let supply = 1000000;
supply = burnTokens(supply, 1000);
supply = burnTokens(supply, 500);
supply = burnTokens(supply, 2000000); // This will fail
