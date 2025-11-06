# chinese-zodiac-plus

Accurate Chinese Zodiac calculator based on **real Chinese Lunar New Year dates**.  
Unlike many libraries that only check the **birth year**, this library correctly handles birthdays in **January and February**, where zodiac may belong to the **previous lunar year**.

For example:

| Birthday | Correct Zodiac | Why |
|--------|--------|------|
| 1996-02-18 | Pig | Before Chinese New Year (1996-02-19) |
| 1996-02-19 | Rat | On/after Chinese New Year |

This library uses verified Chinese New Year dates from **1900 to 2030**.

---

## Install

```bash
npm install chinese-zodiac-plus
````

or

```bash
yarn add chinese-zodiac-plus
```

---

## Usage (CommonJS)

```js
const { getZodiac } = require("chinese-zodiac-plus");

console.log(getZodiac(1996, 2, 18)); // "Pig"
console.log(getZodiac(1996, 2, 19)); // "Rat"
console.log(getZodiac(2000, 10, 10)); // "Dragon"
```

---

## Usage (ES Module / TypeScript)

```ts
import { getZodiac } from "chinese-zodiac-plus";

console.log(getZodiac(1996, 2, 18)); // "Pig"
console.log(getZodiac(1996, 2, 19)); // "Rat"
console.log(getZodiac(2000, 10, 10)); // "Dragon"
```

Type definitions are included automatically.

---

## API

### `getZodiac(year, month, day)`

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| `year`    | number | Birth year (e.g., 1996) |
| `month`   | number | Month (1–12)            |
| `day`     | number | Day (1–31)              |

#### Returns

A string representing the zodiac animal:

```
"Rat" | "Ox" | "Tiger" | "Rabbit" | "Dragon" | "Snake" |
"Horse" | "Goat" | "Monkey" | "Rooster" | "Dog" | "Pig"
```

#### Throws Error

If the year is **out of supported range**:

```
Error: Year out of supported range (1900–2030).
```

---

## Why This Library?

- ✅ Correct for birthdays near Lunar New Year
- ✅ Works for real-world horoscope apps, astrology charts, and profile features
- ✅ Includes TypeScript types
- ✅ No external API calls
- ✅ Very small and dependency-free

---

## Supported Range

| From | To   |
| ---- | ---- |
| 1900 | 2030 |

Beyond this range, return error (to avoid misleading results).

---

## License

MIT
Author: **Sai Aik Tun**

---

## GitHub

[https://github.com/saiaiktun/chinese-zodiac-plus](https://github.com/saiaiktun/chinese-zodiac-plus)
