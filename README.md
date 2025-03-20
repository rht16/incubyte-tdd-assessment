## String Calculator

This is a simple string calculator function that takes a string of numbers and returns their sum.

### Usage

```javascript
import { add } from "./calculator";

console.log(add(""));          // 0
console.log(add("1"));         // 1
console.log(add("1,2,3"));     // 6
console.log(add("1\n2,3"));    // 6
console.log(add("//;\n1;2;3")); // 6
console.log(add("//-\n1-2-3")); // 6
console.log(add("2,1001"));    // 2 (ignores numbers > 1000)
console.log(add("-1,2,-3"));   // Throws Error: "negative numbers not allowed -1,-3"
```

## Installation

To use this project, first clone the repository and install dependencies:

```sh
git clone https://github.com/rht16/incubyte-tdd-assessment.git
cd incubyte-tdd-assessment
npm install
```

## RUN

To run the test please run the command

```sh
npm test
```
<img width="686" alt="Screenshot 2025-03-20 at 8 39 19 PM" src="https://github.com/user-attachments/assets/d2ab03c1-2a65-45a0-845a-97831e4869ee" />
