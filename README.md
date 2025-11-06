# chinese-zodiac-plus

A more accurate Chinese Zodiac calculation library that considers **month and day**, not just the year.

Unlike many zodiac libraries that only map by Gregorian year, this library checks whether the date is **before or after Chinese New Year**, ensuring the correct zodiac is returned. It also provides **Heavenly Stem (天干), Earthly Branch (地支), Yin/Yang, and Five Elements (五行)** details.

---

## Installation

```bash
npm install chinese-zodiac-plus
````

or

```bash
yarn add chinese-zodiac-plus
```

---

## Usage

### Basic Usage

```js
const { ChineseZodiac } = require("chinese-zodiac-plus");

const z = new ChineseZodiac(1996, 2, 18);
console.log(z.getZodiac()); 
// 'Pig'
```

### Example Around Chinese New Year Shift (1996 CNY was Feb 19)

```js
const { ChineseZodiac } = require("chinese-zodiac-plus");

console.log(new ChineseZodiac(1996, 2, 18).getZodiac());
// Pig (still belongs to 1995 cycle)

console.log(new ChineseZodiac(1996, 2, 19).getZodiac());
// Rat (CNY starts this day)

console.log(new ChineseZodiac(1996, 2, 20).getZodiac());
// Rat
```

---

## Get Full Zodiac Details

```js
const cz = new ChineseZodiac(1996, 2, 20);
console.log(cz.getZodiacDetails());
```

**Returns:**

```json
{
  "date": "1996-02-20",
  "zodiacAnimal": "Rat",
  "yinYang": "Yang",
  "element": "Fire",
  "heavenlyStem": "丙",
  "earthlyBranch": "子"
}
```

| Field           | Meaning                              | Example             |
| --------------- | ------------------------------------ | ------------------- |
| `date`         | The exact date you provided (YYYY-MM-DD) | `1996-02-20`   |
| `zodiacAnimal`  | The 12-year animal cycle             | Rat, Ox, Tiger, ... |
| `yinYang`       | 陰陽 (based on stem)                   | Yang                |
| `element`       | 五行 (Wood, Fire, Earth, Metal, Water) | Fire                |
| `heavenlyStem`  | 天干 (10-cycle)                        | 丙                   |
| `earthlyBranch` | 地支 (12-cycle)                        | 子                   |

---

## Constructor Validation

```js
new ChineseZodiac(year, month, day);
```

| Argument | Type   | Allowed Range |
| -------- | ------ | ------------- |
| `year`   | Number | `1900 - 2040` |
| `month`  | Number | `1 - 12`      |
| `day`    | Number | `1 - 31`      |

If the date is invalid or out of range, an error is thrown.

---

## Why This Library?

Most zodiac libraries use:

```
zodiac = (year - 4) % 12
```

This is **incorrect** for anyone born in **January or early February**.
This library uses real **Chinese New Year dates** from 1900 to 2040 to compute the correct result.

---

## Supported Range

| From | To   |
| ---- | ---- |
| 1900 | 2040 |

Beyond this range, return error (to avoid misleading results).

---

## License

MIT
Author: **Sai Aik Tun**

---

## GitHub

[https://github.com/saiaiktun/chinese-zodiac-plus](https://github.com/saiaiktun/chinese-zodiac-plus)
