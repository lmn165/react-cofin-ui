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

### 화살표 함수를 사용할때는  this 키워드를 조심해야 한다.
+ 화살표 함수에서 this 키워드는 상위 스코프에 상속된다.


### arguments 객체
+ 함수 내부에서 접근할 수 있는 배열 객체이다.
+ 변수 이름이 아니라 키워드이다.