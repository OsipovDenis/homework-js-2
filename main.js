// 1 задание
function getSumFromString(str) {
  let num = /\-?\d+(\.\d+)?/ig,
    oper = /[^-\d][^\.,\s,а-яёА-ЯЁ1-9,\.,$,=][^-\d]?/ig, //супер-регулярка
    allNumbers = str.match(num),
    allOpers = str.match(oper),
    result = +allNumbers.shift(),
    opers = {
      "-": function(a) {
        result = result - (a);
      },
      "+": function(a) {
        result = result + a;
      },
      "*": function(a) {
        result = result * a;
      },
      "/": function(a) {
        result = result / a;
      }
    }, i, k, j, n;

  console.log( result );
  console.log( allNumbers );
  console.log( allOpers );

  for (i = 0, k = allNumbers.length; i < k; i++) {

    if (allOpers[i].length !== 1) {

      let arrOfSmthng = allOpers[i].split(" ");

      for (j = 0, n = arrOfSmthng.length; j < n; j++) {

        if (arrOfSmthng[j].length == 1) {

          allOpers[i] = arrOfSmthng[j];

        }

      }

    }

    opers[allOpers[i]]( +allNumbers[i] );
  }

  return result;
}

let str0 = "3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =",
    str1 = "7+7*2=ёжик",
    str6 = "-3.5 землекопа +-4 поросенка *10 рублей - -5.5 $ /5 человек =",
    str7 = "-4 ывпаыва /-4 поросенка +-4 поросенка / -3 поросенка +4 поросенка +-4 поросенка";

console.log( getSumFromString(str0) );
// console.log( getSumFromString(str1) ); // это строка не проходит с моей супер-регуляркой((
console.log( getSumFromString(str6) );
console.log( getSumFromString(str7) );
console.log("__________________________");



// 2 задание
function removeChar(str) {
  let matchPattern = /[^\s,\.,\?,\,,\;,\:,\!]+/gi,
    myArr = str.match(matchPattern),
    i, k, j, p;

  //Проверка на строку без слов ИЛИ одно слово после парсинга.
  if ( myArr == null || myArr.length == 1 ) {
    return str;
  }

  let rule = myArr[0];
  // Проверяем входимость символов самого длинного слова в остальные
  // слова предложения.
  for ( i = 0, k = rule.length; i < k; i++ ) {
    let symbol = new RegExp( rule[i], "i" ),
      counter = 0;

    for ( j = 0, p = myArr.length; j < p; j++ ) {
      if ( symbol.test(myArr[j]) ) {
        counter++;
      }
    }

    if ( counter == myArr.length ) {
      str = str.replace( new RegExp(rule[i], "gi"), "" );
    }
  }

  return str;
}

let str2 = "Чего-с изволите-с?Барин-с!",
  str3 = "!??слово!плов олово$$$!",
  str4 = "!??слово!",
  str5 = "!??";
console.log( removeChar(str2) );
console.log( removeChar(str3) );
console.log( removeChar(str4) );
console.log( removeChar(str5) )
