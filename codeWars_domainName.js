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
