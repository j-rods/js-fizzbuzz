function FizzBuzz() {
}

FizzBuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0)
}

FizzBuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
}

FizzBuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
}

FizzBuzz.prototype.isDivisibleByBoth = function(number) {
  return this._isDivisibleBy(number, 15);
}

FizzBuzz.prototype.says = function(number) {
  if (this.isDivisibleByBoth(number)) {
    return 'FizzBuzz';
  }
  else if (this.isDivisibleByThree(number)) {
    return 'Fizz';
  }
  else if(this.isDivisibleByFive(number)) {
    return 'Buzz';
  }
  else {
    return number;
  }
}

