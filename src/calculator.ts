export function add(numbers: string): number {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numString = numbers;

  // Custom delimiter handling
  if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      delimiter = parseDelimiter(parts[0].substring(2)); // Extract custom delimiter
      numString = parts[1] || ""; // Remaining numbers
  }

  const numArray = numString.split(delimiter).map(Number);

  // Handle negatives
  const negatives = numArray.filter(num => num < 0);
  if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray
      .filter(num => num <= 1000) // Ignore numbers > 1000
      .reduce((sum, num) => sum + num, 0);
}

// Function to parse delimiters safely
function parseDelimiter(delimiterString: string): RegExp {
  if (delimiterString.startsWith("[")) {
      // Handle multiple or multi-character delimiters
      const delimiters = delimiterString.match(/\[([^\]]+)]/g)?.map(d => d.slice(1, -1)) || [];
      const escapedDelimiters = delimiters.map(d => escapeRegExp(d)).join("|");
      return new RegExp(escapedDelimiters);
  }
  return new RegExp(escapeRegExp(delimiterString)); // Escape special characters
}

// Function to escape special regex characters
function escapeRegExp(delimiter: string): string {
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}