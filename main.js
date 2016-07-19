// 1 задание
function getSumFromString(str) {
  let num = /\d+(\.\d+)?/g,
    oper = /[-+*\/]/g,
    allNumbers = str.match( num ),
    allOpers = str.match( oper ),
    summ = +allNumbers.shift(),
    opers = {
      "-": function(a) {
        summ = summ - a;
      },
      "+": function(a) {
        summ = summ + a;
      },
      "*": function(a) {
        summ = summ * a;
      },
      "/": function(a) {
        summ = summ / a;
      }
    };

  for (let i = 0, k = allNumbers.length; i < k; i++) {
    opers[allOpers[i]](+allNumbers[i]);
  }
  return summ;
}

let str0 = "3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =",
    str1 = "7+7*2=ёжик";

console.log( getSumFromString(str0) );
console.log( getSumFromString(str1) );
console.log("__________________________");



// 2 задание
function removeChar(str) {
  let matchPattern = /[^\s,\.,\?,\,,\;,\:,\!]+/gi,
    myArr = str.match( matchPattern ),
    i, k, j, p;

  //Проверка на строку без слов ИЛИ одно слово после парсинга.
  if( myArr == null || myArr.length == 1 ) {
    return str;
  }

  // Берём самое длинное слово
  let rule = myArr[0];
  for (i = 1, k = myArr.length; i < k; i++) {
    if (rule.length < myArr[i].length) {
      rule = myArr[i];
    }
  }
  // Проверяем входимость символов самого длинного слова в остальные
  // слова предложения.
  for ( i = 0, k = rule.length; i < k; i++ ) {
    let symbol= new RegExp( rule[i], "i" ),
        counter = 0;

    for ( j = 0, p = myArr.length; j < p; j++ ) {
      if ( symbol.test(myArr[j]) ) {
        counter++;
      }
    }

    if( counter == myArr.length ){
      str = str.replace( new RegExp( rule[i], "gi" ), "" );
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
