# JS에서의 기본적인 문자열 메소드
### indexOf()
+ 문자열에서 지정된 값이 처음 나타나는 위치를 반환한다.
```
const str = "this is a short sentence";
str.indexOf("short");
// 10
```

### slice()
+ 문자열의 지정된 부분을 새 문자열로 변환한다.
```
const str = "pizza, orange, cereals";
str.slice(0, 5);
// "pizza"
```

### toUpperCase()
+ 문자열 내의 모든 문자를 대문자로 바꾼다.
```
const str = "i ate an apple";
str.toUpperCase();
// "I ATE AN APPLE"
```

### toLowerCase()
+ 문자열 내의 모든 문자를 대문자로 바꾼다.
```
const str = "I ATE AN APPLE";
str.toLowerCase();
// "i ate an apple"
```
추가 정보: [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/reference/Global_objects/string)


## ES6 에서 추가된 문자열 메소드(4개)
### strtsWith()
+ 매개변수로 받은 값으로 문자열이 시작하는지 확인한다.
```
const code = "ABCDEFG";

code.startsWith("ABB");
// false

code.startsWith("abc");
// false (대소문자 구분)

code.startsWith("ABC");
// true

code.startsWith("DEF", 3);
// true (매개변수를 추가하여 검사 시작점 지정 가능)
```

### endsWith()
+ 매개변수로 받은 값으로 문자열이 끝나는지 확인한다.
```
const code = "ABCDEFG";

code.endsWith("def");
// false (대소문자 구분)

code.endsWith("DEF");
// true
```

### includes()
+ 매개변수로 받은 값이 문자열에 포함되는지 확인한다.
```
const code = "ABCDEFG";

code.includes("abc");
// false (대소문자 구분)

code.includes("CDE");
// true
```

### repeat()
+ 문자열을 반복하며 횟수를 인수로 받는다.
```
const hello = "Hi";
console.log(hello.repeat(5));
// HiHiHiHiHi
```