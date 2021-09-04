## 0장
### variable 은 값을 담기 위한 공간이다.
### var 대신 let을 사용하는 이유
+ var 는 전역이고 let 은 지역이다.
+ let 과 const 는 선언된 위치에 해당하는 블록 스코프를 갖는다.

### ES6 예약어 (*로 표시된 단어에 새로운 ECMAScript5)
```
abstract	arguments	boolean	break	byte
case	catch	char	class*	const
continue	debugger	default	delete	do
double	else	enum*	eval	export*
extends*	false	final	finally	float
for	function	goto	if	implements
import*	in	instanceof	int	interface
let	long	native	new	null
package	private	protected	public	return
short	static	super*	switch	synchronized
this	throw	throws	transient	true
try	typeof	var	void	volatile
while	with	yield
```
출처: [JavaScript 예약어](http://www.w3bai.com/ko/js/js_reserved.html)

### SWE 에서 정의하는 표기법 (소프트웨어공학-Software Engineering)
1. PascalCase : 객체 선언형
2. camlCase : Java, JavaScript 변수 선언형
3. snake_case : Pytyon 변수 선언형
4. kebob-case : Linux CLI

## JavaScript 는 Dynamic Language 이다.
#### Static Language 는 Data Type 이 고정적이다
#### Dynamic Language 는 Data Type 이 가변적이다
#### JavaScript 는 weak-typed language 이다.

## JavaScript 는 총 7개의 type 이 존재한다.
#### 1. string
#### 2. number
#### 3. boolean
#### 4. null
#### 5. undefined
#### 6. symbol
#### 7. JSON {}

### 빈 객체(JSON) 생성 방법
```
const car = new Object();   // 고전 방식
const car = {}              // Object literal (오브젝트 리터럴)
```

### 항등 연산자, 완전 항등 연산자
1. 항등 연산자(equality, '==') : 비교 시, 자동 형 변환이 일어난다.
2. 완전 항등 연산자(strict equality, '===') : 비교 시, 타입과 객체 모두 비교..

### typeof 자료형 확인 (js 에서는 배열은 object 타입이다.)

### Strict mode(스트릭트 모드) 는 실수로 Window 객체를 참조하는 것을 방지한다. -> 에러 방지가 목적이다.


## 1장
### let vs cosnt
+ 공통점: 블록 스코프에 종속된다 (지역 변수)
+ 차이점: let은 값의 재할당이 가능하지만, const는 값의 재할당이 불가능하다.
    - const로 선언된 변수가 불변의 의미를 갖는 것은 아니다.
    - const에 객체가 담겼다면, 변수 전체를 재할당하는 것이 아니라 그 속성 중 하나만 재할당 가능하다.
    - ex) const 객체
    ```
        const person = {
            name: 'Alberto'
            age: 25
        };
        person.age = 26;
        console.log(person.age); // log: 26
    ```

### TDZ_Temporal Dead Zone(일시적 비활성 구역)
+ var 는 정의되기 전에 접근할 수 있다. (값의 접근은 불가능)
    - undefined 출력
+ let, const 는 정의하기 전에 접근이 불가능하다.
    - TDZ에 접근하게 되면 Reference Error를 출력한다.
    - 코드 디버깅이 더 쉽다.

### var, let, const 사용 규칙
#### 마티아스 바인스(Mathias Bynes)
1. 기본적으로 const를 사용
2. 재할당이 필요한 경우에만 let 사용
3. var는 ES6 에서 절대 사용하지 않음!