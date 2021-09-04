### 화살표 함수는 명시적인 반환을 생략한다.
+ ES6
```
const greeting = name => `hello ${name}`;
```

+ ES5
```
const oldFunction = function(name) {
    return "hello" + name;
};
```