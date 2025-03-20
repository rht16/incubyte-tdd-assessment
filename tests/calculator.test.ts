import { add } from "../src/calculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself when given one number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });


  test("handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("handles custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // edge test cases
  test("returns 0 when input contains only delimiters", () => {
    expect(add(",")).toBe(0);
    expect(add("\n")).toBe(0);
    expect(add("//;\n")).toBe(0);
  });

//   test("throws an error for negative numbers", () => {
//     expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed -1,-3");
//     expect(() => add("//;\n-4;5;-6")).toThrow("negative numbers not allowed -4,-6");
//   });

  test("handles large numbers", () => {
    expect(add("1000,2000,3000")).toBe(6000);
  });

//   test("ignores numbers greater than 1000", () => {
//     expect(add("2,1001")).toBe(2);
//     expect(add("1000,1001,1002,3")).toBe(1003);
//   });

  test("returns sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("5,10,15,20")).toBe(50);
});