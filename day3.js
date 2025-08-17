// ============================================================
// Creative Practice — Loops & Functions (Day 2)
// You now know: console.log, data types, string methods,
// arrays (no map/filter/forEach), objects (assign/create/keys/values),
// if / else if / else, logical operators (&&, ||, !),
// AND: while loops, for loops, functions with parameters.
// ------------------------------------------------------------
// Rules:
// - Prefer while / for loops. Do NOT use map/filter/forEach/reduce.
// - You may use: push/pop/shift/unshift/slice/splice/concat/indexOf/includes/sort
// - Use string methods (trim, toLowerCase, toUpperCase, includes, slice, split, etc.).
// - Keep each solution inside the function body marked with TODO.
// - Use the demo calls at the bottom to test your work.
// ============================================================


// ------------------------------------------------------------
// Task 1 — countVowels(str)
// Return how many vowels are inside str (a, e, i, o, u).
// Make it case-insensitive (e.g., "A" counts). Use a loop, no regex.
// ------------------------------------------------------------
function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    for(let i of str){
        if(i == 'a' ||i == 'e' ||i == 'i' ||i == 'o' ||i == 'u' ){
            count++;
        }
    }
    //another solution
    let vowels = 'aeiou';
    for(let i = 0;i < str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    // Hint: str = str.toLowerCase(); then loop chars and check with 'includes'
    return count/2; // replace
}


// ------------------------------------------------------------
// Task 2 — invertCase(str)
// Build and return a new string where each letter changes case:
// 'Hello' -> 'hELLO'. Use a loop and string methods, not regex.
// ------------------------------------------------------------
function invertCase(str) {
    let result = "";
    for(let i of str){
        if(i === i.toLowerCase() && i !== i.toUpperCase()){
            result += i.toUpperCase();
        }
        else if(i === i.toUpperCase() && i !== i.toLowerCase()){
            result +=i.toLowerCase();
        }
        else{
            result +=i;
        }
    }
    // Hint: for each character: if it's equal to its toUpperCase() but NOT equal
    // to its toLowerCase(), it's likely uppercase (A-Z). Handle others as-is.
    return result; // replace
}


// ------------------------------------------------------------
// Task 3 — uniqueMerge(a, b)
// Merge arrays a and b into a single array without duplicates,
// preserving the order of first appearance. No Set, no map/filter/forEach.
// ------------------------------------------------------------
function uniqueMerge(a, b) {
    let result = [];
    for(let i of a){
        if(!result.includes(i)){
            result.push(i);
        }
    }
    for(let i of b){
        if(!result.includes(i)){
            result.push(i);
        }
    }
    // Hint: start with result = []. Loop a then b; push if not already included.
    return result; // replace
}


// ------------------------------------------------------------
// Task 4 — findFirstIndexDivisibleBy(nums, x, y)
// Return the INDEX of the first number divisible by BOTH x and y.
// If none, return -1. Use a for loop and logical operators.
// ------------------------------------------------------------
function findFirstIndexDivisibleBy(nums, x, y) {
    for(let i of nums){
        if(i % x == 0 && i % y == 0){
            return i;
        }
    }
    return -1; // replace
}


// ------------------------------------------------------------
// Task 5 — allTruthy(values)
// Return true only if EVERY element in 'values' is truthy.
// Use a loop and logical operators (no .every).
// ------------------------------------------------------------
function allTruthy(values) {
    for(let i of values){
        if(!i){
            return false;
        }
    }
    return true; // replace
}


// ------------------------------------------------------------
// Task 6 — pickEveryNth(arr, n)
// Return a NEW array containing items at indices 0, n, 2n, 3n, ...
// Stop when you pass the end of the array. Use a for loop (step by n).
// ------------------------------------------------------------
function pickEveryNth(arr, n) {
    let result = [];
    result.push(arr[0]);
    for(let i = 0;i < n+1;i += n){
        result.push(arr[n])
    }
    return result; // replace
}


// ------------------------------------------------------------
// Task 7 — ticketPrice(customer)
// customer = { age, isStudent (bool), hasCoupon (bool) }
// Rules (in order):
//   1) If age < 6: price = 0
//   2) Else if age <= 18 OR isStudent is true: price = 8
//   3) Else if age >= 65: price = 6
//   4) Else: price = 12
// After that, if hasCoupon is true, subtract 2 (but not below 0).
// Return the final price.
// ------------------------------------------------------------
function ticketPrice(customer) {
let price;
if(customer.age < 6){
    price = 0;
    }
    else if(customer.age <= 18 || customer.isStudent === true){
    price = 8
    }
    else if(customer.age >= 65 ){
    price = 6
    }
    else{
    price = 12;
    }
    if(customer.hasCoupon){
    price = price - 2;
}
    return price; // replace
}


// ------------------------------------------------------------
// Task 8 — normalizeNames(names)
// Given an array of messy names, return a NEW array in the same order
// where each name is trimmed and converted to: First-letter uppercase + rest lowercase.
// Example: "   aMMaR massOUD " -> "Ammar massoud"
// Use loops + basic string methods. No map.
// ------------------------------------------------------------
function normalizeNames(names) {
    let result = [];
    for(let i = 0; i < names.length; i++){
        nam = names[i].trim().toLowerCase();
        let finall =nam[0].toUpperCase() + nam.slice(1);
        result.push(finall);
    }
    // Hint: build result with push. For each name: trim -> split(" ") optional ->
    // lower the string -> uppercase the first character of the first word only is OK.
    return result; // replace
}


// ------------------------------------------------------------
// Task 9 — buildProductCatalog(rawItems)
// rawItems: [{name:"Mouse", brand:"Logi", stock:10}, {name:"SSD", stock:0}, ...]
// Use Object.create to make each product inherit from 'productProto' below.
// productProto provides two methods:
//   - isAvailable(): returns true if this.stock > 0
//   - label(): returns (this.brand || "Generic") + " " + this.name
// Return an array of product instances. Use a loop (no map).
// ------------------------------------------------------------
const productProto = {
    isAvailable: function () { return this.stock > 0; },
    label: function () { return (this.brand || "Generic") + " " + this.name; }
};

function buildProductCatalog(rawItems) {
    let result = [];
    for(let ob of rawItems){
        let product = Object.create(productProto);
        product.name = ob.name;
        product.brand = ob.brand;
        product.stock = ob.stock;
        result.push(product);
    }
    // Hint: for each item, create obj = Object.create(productProto);
    // copy properties (name/brand/stock) into it; push into result.
    return result; // replace
}

// ------------------------------------------------------------
// Task 10 (while challenge) — sumUntilLimit(nums, limit)
// Add numbers from 'nums' in order using a WHILE loop until
// the running sum would EXCEED 'limit' — then stop and return the sum that
// does NOT exceed the limit. Example: nums=[5,7,4], limit=12 => 5+7=12 (stop) -> 12
// ------------------------------------------------------------
function sumUntilLimit(nums, limit) {
    let sum=0;
    let i=0;
    while(i<nums.length){
        if(nums[i]+sum>limit){
            break;
        }
        sum+=nums[i];
        i++;
    }
    return sum; // replace
}
// console.log(scoresReport({ Alice: 17, Bob: 22, Carol: 22, Dan: 9 }));

// ------------------------------------------------------------
// Task 11 (logic puzzle) — safeLogin(user, policy)
// user = { email, password }
// policy = { minLen, mustIncludeNumber (bool), blockWord } // blockWord example: "password"
// Return true if ALL rules pass:
//   - password length >= minLen
//   - if mustIncludeNumber is true, password must contain any digit 0-9
//   - password lowercased DOES NOT include blockWord lowercased
// Use loops, string methods, and logical operators (no regex).
// ------------------------------------------------------------
function safeLogin(user, policy) {
    if(user.password.length<policy.minLen){
        return false;
    }
    if(policy.mustIncludeNumber){
        let istrue = false;
        for(let i of user.password){
            if(Number(i) <= 9 && Number(i) >= 0 ){
                istrue=true;
                break;
            }
        }
        if (!istrue) {
            return false;
        }
    }

    let passLower = user.password.toLowerCase();
    let blockLower = policy.blockWord.toLowerCase();
    if (passLower.includes(blockLower)) {
        return false;
    }
    return true; // replace
}



// ============================================================
// DEMO CALLS (Uncomment to test as you solve)
// ============================================================

console.log("\n--- Task 1 ---");
console.log(countVowels("Ammar Massoud")); // expect > 0

console.log("\n--- Task 2 ---");
console.log(invertCase("HeLLo 123!")); // "hEllO 123!"

console.log("\n--- Task 3 ---");
console.log(uniqueMerge([1,2,3,2],[3,4,1,5])); // [1,2,3,4,5]

console.log("\n--- Task 4 ---");
console.log(findFirstIndexDivisibleBy([2,7,9,10,12,15,22], 3, 5)); // index of 15

console.log("\n--- Task 5 ---");
console.log(allTruthy([1, "x", {}, []])); // true
console.log(allTruthy([1, 0, "x"])); // false

console.log("\n--- Task 6 ---");
console.log(pickEveryNth(["a","b","c","d","e","f"], 2)); // ["a","c","e"]

console.log("\n--- Task 7 ---");
console.log(ticketPrice({ age: 4, isStudent: false, hasCoupon: false }));  // 0
console.log(ticketPrice({ age: 15, isStudent: false, hasCoupon: true }));  // 6
console.log(ticketPrice({ age: 20, isStudent: true, hasCoupon: true }));   // 6
console.log(ticketPrice({ age: 70, isStudent: false, hasCoupon: true }));  // 4
console.log(ticketPrice({ age: 30, isStudent: false, hasCoupon: true }));  // 10

console.log("\n--- Task 8 ---");
console.log(normalizeNames(["   aMMaR massOUD  ", " SARA ", "oMaR"]));

console.log("\n--- Task 9 ---");
const items = [
{ name: "Mouse", brand: "Logi", stock: 10 },
{ name: "SSD", stock: 0 },
{ name: "Keyboard", brand: "KeyCo", stock: 3 },
];
const catalog = buildProductCatalog(items);
console.log(catalog.map(p => ({ label: p.label(), available: p.isAvailable() })));

console.log("\n--- Task 10 ---");
console.log(sumUntilLimit([5, 7, 4], 12)); // 12
console.log(sumUntilLimit([6, 6, 6], 10)); // 6

console.log("\n--- Task 11 ---");
console.log(safeLogin(
{ email: "a@b.com", password: "He11oWorld" },
{ minLen: 8, mustIncludeNumber: true, blockWord: "password" }
)); // true or false depending on rules

// ============================================================
// End — Have fun!
// ============================================================
