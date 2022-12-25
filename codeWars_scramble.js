//cd js
// node codeWars
//Задача с Code Wars 2
//Реализуйте функцию scramble(str1, str2), которая возвращает true, если символы параметра str1 можно переставить так, чтобы они соответствовали символам параметра str2.
//Используются только строчные буквы. Знаки препинания или цифры не учитываем. Важна производительность решения.
console.time("function scramble");
function scramble(str1, str2) {
  const charsCount = (str) =>
    str.split("").reduce((total, current) => {
      if (!total[current]) {
        total[current] = 1;
      } else {
        total[current]++;
      }
      return total;
    }, {});

  const str1Chars = charsCount(str1);
  const str2Chars = charsCount(str2);

  return Object.keys(str2Chars).every((c) => str1Chars[c] >= str2Chars[c]);
}

console.log(scramble("rkqodlw", "world")); // true
console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
//Объяснение : для каждого слова составляется объект, имя свойства - отдельная буква, значение свойства - количество этих букв в строке. Далее сравнение количеств.
console.timeEnd("function scramble"); //таймер

//Задача с Code Wars 3
//Напишите функцию, которая при задании URL-адреса в виде строки анализирует только доменное имя и возвращает его в виде строки.
function domainName(url) {
  const domainName = (url) => url.match(/^https?:\/\/([^\/]+)\.co[^\/]+/)[1];
  console.log(domainName(url));
}

domainName("http://google.com"); // "google"
domainName("http://google.co.jp"); // "google"
domainName("https://youtube.com"); // "youtube"
// объяснение : скрипт построен на регулярном выражении и методе match() которые извлекает результат сопоставления строки с регулярным выражением .
