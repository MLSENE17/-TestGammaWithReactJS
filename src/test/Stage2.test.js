import response2 from "../lib/FizzBuzz2";


it("should return 'FIZZ' if the the number passed in is divisible by 3", () => {
    expect(response2(3)).toBe("FIZZ");  
    expect(response2(6)).toBe("FIZZ");
    expect(response2(9)).toBe("FIZZ");
  });
it("should return 'FIZZ' if the the number passed in is divisible by 3  or if it has a 3 in it", () => {
    expect(response2(3)).toBe("FIZZ");  
    expect(response2(13)).toBe("FIZZ");
    expect(response2(43)).toBe("FIZZ");
  });
it("should return 'BUZZ' if the the number passed in is divisible by 5  or if it has a 5 in it", () => {
    expect(response2(5)).toBe("BUZZ");  
    expect(response2(51)).toBe("BUZZ");
    expect(response2(59)).toBe("BUZZ");
});

it("should return 'FIZZBUZZ' if the the number passed in is divisible by (3 or 5) or if has a (3 and 5) in it  ", () => {
    expect(response2(15)).toBe("FIZZBUZZ");  
    expect(response2(35)).toBe("FIZZBUZZ");
    expect(response2(90)).toBe("FIZZBUZZ");
});

it("should return the numbers passed in that are not divisible by (3 or 5) or if hasn't a (3 and 5) in it  ", () => {
    expect(response2(17)).toBe(17);
    expect(response2(29)).toBe(29);
    expect(response2(98)).toBe(98);
});