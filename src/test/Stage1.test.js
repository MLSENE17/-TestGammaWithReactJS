import response from "../lib/FizzBuzz1";

it("should return 'FIZZ' if the the number passed in is divisible by 3", () => {
    expect(response(3)).toBe("FIZZ");  
    expect(response(6)).toBe("FIZZ");
    expect(response(9)).toBe("FIZZ");
  });
it("should return 'BUZZ' if the the number passed in is divisible by 5", () => {
    expect(response(5)).toBe("BUZZ");  
    expect(response(35)).toBe("BUZZ");
    expect(response(100)).toBe("BUZZ");
});
it("should return 'FIZZBUZZ' if the the number passed in is divisible by 5", () => {
    expect(response(15)).toBe("FIZZBUZZ");  
    expect(response(30)).toBe("FIZZBUZZ");
    expect(response(90)).toBe("FIZZBUZZ");
});
it("should return the numbers passed in that are not divisible by 3 or 5", () => {
    expect(response(17)).toBe(17);
    expect(response(29)).toBe(29);
    expect(response(98)).toBe(98);
});