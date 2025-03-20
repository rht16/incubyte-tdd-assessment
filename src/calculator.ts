

export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = new RegExp(parts[0].substring(2)); // Extract delimiter
      numbers = parts[1]; // Remaining numbers
    }
  
    const numArray = numbers.split(delimiter).map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
  }