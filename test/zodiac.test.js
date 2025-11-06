const { ChineseZodiac } = require("../dist/index");

describe("ChineseZodiac", () => {
  test("1996-02-18 should be Pig (before CNY)", () => {
    const z = new ChineseZodiac(1996, 2, 18);
    expect(z.getZodiac()).toBe("Pig");
  });

  test("1996-02-19 should be Rat (CNY day & after)", () => {
    const z = new ChineseZodiac(1996, 2, 19);
    expect(z.getZodiac()).toBe("Rat");
  });

  test("1996-02-20 should also be Rat", () => {
    const z = new ChineseZodiac(1996, 2, 20);
    expect(z.getZodiac()).toBe("Rat");
  });

  test("getZodiacDetails returns correct structure", () => {
    const z1 = new ChineseZodiac(1996, 2, 18);
    const details1 = z1.getZodiacDetails();
    const z2 = new ChineseZodiac(1996, 2, 19);
    const details2 = z2.getZodiacDetails();

    expect(details1).toMatchObject(
      {
        year: 1996,
        month: 2,
        day: 18,
        zodiacAnimal: "Pig",
        yinYang: "Yin",
        element: "Wood",
        heavenlyStem: "乙",
        earthlyBranch: "亥"
      }
    );

    expect(details2).toMatchObject(
      {
        year: 1996,
        month: 2,
        day: 19,
        zodiacAnimal: "Rat",
        yinYang: "Yang",
        element: "Fire",
        heavenlyStem: "丙",
        earthlyBranch: "子"
      }
    );
  });

  test("throws error if year is out of range", () => {
    expect(() => new ChineseZodiac(1800, 1, 1).getZodiac()).toThrow();
  });

  test("throws error for non-numeric input", () => {
    expect(() => new ChineseZodiac("1996", "02", "19").getZodiac()).toThrow();
  });
});
