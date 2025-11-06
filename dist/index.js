const chineseNewYearDates = [
  "1900-01-31","1901-02-19","1902-02-08","1903-01-29","1904-02-16","1905-02-04","1906-01-25","1907-02-13","1908-02-02","1909-01-22","1910-02-10","1911-01-30",
  "1912-02-18","1913-02-06","1914-01-26","1915-02-14","1916-02-03","1917-01-23","1918-02-11","1919-02-01","1920-02-20","1921-02-08","1922-01-28","1923-02-16",
  "1924-02-05","1925-01-24","1926-02-13","1927-02-02","1928-01-23","1929-02-10","1930-01-29","1931-02-17","1932-02-06","1933-01-26","1934-02-14","1935-02-04",
  "1936-01-24","1937-02-11","1938-01-31","1939-02-19","1940-02-08","1941-01-27","1942-02-15","1943-02-04","1944-01-25","1945-02-13","1946-02-01","1947-01-22",
  "1948-02-10","1949-01-29","1950-02-17","1951-02-06","1952-01-27","1953-02-14","1954-02-03","1955-01-24","1956-02-12","1957-01-31","1958-02-18","1959-02-08",
  "1960-01-28","1961-02-15","1962-02-05","1963-01-25","1964-02-13","1965-02-02","1966-01-21","1967-02-09","1968-01-30","1969-02-17","1970-02-06","1971-01-27",
  "1972-02-15","1973-02-03","1974-01-23","1975-02-11","1976-01-31","1977-02-18","1978-02-07","1979-01-28","1980-02-16","1981-02-05","1982-01-25","1983-02-13",
  "1984-02-02","1985-02-20","1986-02-09","1987-01-29","1988-02-17","1989-02-06","1990-01-27","1991-02-15","1992-02-04","1993-01-23","1994-02-10","1995-01-31",
  "1996-02-19","1997-02-07","1998-01-28","1999-02-16","2000-02-05","2001-01-24","2002-02-12","2003-02-01","2004-01-22","2005-02-09","2006-01-29","2007-02-18",
  "2008-02-07","2009-01-26","2010-02-14","2011-02-03","2012-01-23","2013-02-10","2014-01-31","2015-02-19","2016-02-08","2017-01-28","2018-02-16","2019-02-05",
  "2020-01-25","2021-02-12","2022-02-01","2023-01-22","2024-02-10","2025-01-29","2026-02-17","2027-02-06","2028-01-26","2029-02-13","2030-02-03","2031-01-23",
  "2032-02-11","2033-01-31","2034-02-19","2035-02-08","2036-01-28","2037-02-15","2038-02-04","2039-01-24","2040-02-12",
];

const zodiacAnimals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];


function ymdToNumber(y, m, d) {
  return Number(String(y).padStart(4, "0") + String(m).padStart(2, "0") + String(d).padStart(2, "0"));
}

function parseYMD(str) {
  const [y, m, d] = str.split("-").map(Number);
  return { y, m, d };
}
function getElement(stem) {
  let element = "";
  if (["甲", "乙"].includes(stem)) element = "Wood";
  else if (["丙", "丁"].includes(stem)) element = "Fire";
  else if (["戊", "己"].includes(stem)) element = "Earth";
  else if (["庚", "辛"].includes(stem)) element = "Metal";
  else if (["壬", "癸"].includes(stem)) element = "Water";
  else element = "Unknown"
  return element; 
}

function getYinYang(stem) {
  return stems.indexOf(stem) % 2 === 0 ? "Yang" : "Yin";
}

// Main Class
class ChineseZodiac {
  constructor(year, month, day) {
    if (typeof year !== "number" || typeof month !== "number" || typeof day !== "number") {
      throw new Error("Invalid arguments. Use: new ChineseZodiac(year, month, day)");
    }
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getZodiac() {
    const { year, month, day } = this;

    if (year < 1900 || year > 2040) {
      throw new Error("Year out of supported range (1900-2040).");
    }

    const cnyStr = chineseNewYearDates[year - 1900];
    const { y: cY, m: cM, d: cD } = parseYMD(cnyStr);

    const dateNum = ymdToNumber(year, month, day);
    const cnyNum = ymdToNumber(cY, cM, cD);

    let zodiacYear = year;
    if (dateNum < cnyNum) zodiacYear--;

    const index = (zodiacYear - 1900) % 12;
    return zodiacAnimals[index];
  }

  getZodiacDetails() {
    const { year, month, day } = this;

    const cnyStr = chineseNewYearDates[year - 1900];
    const { y: cY, m: cM, d: cD } = parseYMD(cnyStr);

    const cnyNum = ymdToNumber(cY, cM, cD);
    const dateNum = ymdToNumber(year, month, day);

    let zodiacYear = year;
    if (dateNum < cnyNum) zodiacYear--;

    const date = `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const zodiacAnimal = zodiacAnimals[(zodiacYear - 1900) % 12];
    const offset = zodiacYear - 1984;
    const stem = stems[(offset % 10 + 10) % 10];
    const branch = branches[(offset % 12 + 12) % 12];

    return {
      date: date,
      zodiacAnimal: zodiacAnimal,
      yinYang: getYinYang(stem),
      element: getElement(stem),
      heavenlyStem: stem,
      earthlyBranch: branch
    };
  }

}

module.exports = { ChineseZodiac };
