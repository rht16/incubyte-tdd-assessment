

export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2)); // Extract delimiter
      numbers = parts[1]; // Remaining numbers
    }
  
    const numArray = numbers.split(delimiter).map(Number);

    // Handle negatives
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    return numArray
        .filter(num => num <= 1000)
        .reduce((sum, num) => sum + num, 0);
  }