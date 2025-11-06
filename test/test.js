const assert = require("assert");
const { getZodiac } = require("../dist/index");

// Valid tests (already present)

// 1996 Chinese New Year = Feb 19
assert.strictEqual(getZodiac(1996, 2, 18), "Pig");
assert.strictEqual(getZodiac(1996, 2, 19), "Rat");

// 1992 Chinese New Year = Feb 4
assert.strictEqual(getZodiac(1992, 2, 3), "Goat");
assert.strictEqual(getZodiac(1992, 2, 4), "Monkey");

// Regular date
assert.strictEqual(getZodiac(2000, 10, 10), "Dragon");


// Error tests
assert.throws(
  () => getZodiac("1996", 2, 19),
  /Invalid arguments/,
  "Should throw when year is not a number"
);

assert.throws(
  () => getZodiac(2024, "02", 10),
  /Invalid arguments/,
  "Should throw when month is not a number"
);

assert.throws(
  () => getZodiac(2024, 2, "10"),
  /Invalid arguments/,
  "Should throw when day is not a number"
);

assert.throws(
  () => getZodiac(1800, 5, 5),
  /Year out of supported range/,
  "Should throw for unsupported year < 1900"
);

assert.throws(
  () => getZodiac(3000, 5, 5),
  /Year out of supported range/,
  "Should throw for unsupported year > 2030"
);

console.log("✅ All tests passed!");
