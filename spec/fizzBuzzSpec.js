describe("fizzbuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("knows when a number is divisible", function() {
    it("by 3", function() {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
    it("by 5", function() {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
    it("by 3 and 5", function() {
      expect(fizzBuzz.isDivisibleByBoth(15)).toBe(true);
    });
  });
  describe("knows when a number is not divisible", function() {
    it("by 3", function() {
      expect(fizzBuzz.isDivisibleByThree(1)).toBe(false);
    });
    it("by 5", function() {
      expect(fizzBuzz.isDivisibleByFive(1)).toBe(false);
    });
    it("by 3 and 5", function() {
      expect(fizzBuzz.isDivisibleByBoth(1)).toBe(false);
    });
  });
  describe("when playing, says", function() {
    it("Fizz when a number is divisible by 3", function() {
      expect(fizzBuzz.says(3)).toEqual("Fizz");
    });
    it("Buzz when a number is divisible by 5", function() {
      expect(fizzBuzz.says(5)).toEqual("Buzz");
    });
    it("FizzBuzz when a number is divisible by both", function() {
      expect(fizzBuzz.says(15)).toEqual("FizzBuzz");
    });
    it("the number when not divisible by any", function() {
      expect(fizzBuzz.says(1)).toEqual(1)
    });
  });
});
