// Строковое преобразование:
// 	- String(val).
// 	- false становится "false", null – "null", undefined – "undefined" и т.п.
// 	- Для явного преобразования применяется оператор "+", у которого один из аргументов строка.
// 	  В этом случае он приводит к строке и другой аргумент.

// Численное преобразование:
// 	- унарный "+".
// 	- Number(val).
// 	- В мат функциях и выражениях, сравнении данных разных типов(кроме === и !==)

// 	Значение			Преобразуется в...
// 	undefined			NaN
// 	null				0
// 	true / false		1 / 0
// 	Строка				Пробельные символы по краям обрезаются.
// 						Далее, если остаётся пустая строка, то 0,
// 						иначе из непустой строки "считывается" число,
// 						при ошибке результат NaN.

// Логическое преобразование:
//	- происходит в логическом контексте, таком как if(value), и при применении логических операторов.
// 	- Boolean(val) или !!value.
// 	- Все значения, которые интуитивно «пусты» (0, пустая строка, null, undefined и NaN.), 
// 	  становятся false. Остальное, в том числе и любые объекты – true.

// 	Значение			Преобразуется в...
// 	undefined, null		false
// 	Числа				Все true, кроме 0, NaN -- false.
// 	Строки				Все true, кроме пустой строки "" -- false
// 	Объекты				Всегда true

console.log("" + 1 + 0);  // 10
console.log("" - 1 + 0);  // -1
//Оператор "-" работает только с числами,
//так что он сразу приводит "" к 0.
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("$" + 4 + 5); // "$45"
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log("  -9\n" + 5); // " -9\n5"
console.log("  -9\n" - 5); // -14
console.log(5 && 2); // 2
console.log(2 && 5); // 5
console.log(5 || 0); // 5
console.log(0 || 5); // 5
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
//undefined при численном преобразовании становится NaN
console.log(null == "\n0\n"); // false
//При сравнении == с null преобразования не происходит, 
//есть жёсткое правило: null == undefined и только.
console.log(+null == +"\n0\n"); // true