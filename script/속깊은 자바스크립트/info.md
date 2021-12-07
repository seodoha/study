자바스크립트 중요 키워드 정리

# scope

현재 접근 가능한 변수들이 결정되는 방법.

렉시컬 스코프(Lexical Scope)

스코프가 생성되는 부분
\- function
\- catch
\- with

<br>
# closure
<br>
주로 상태 유지, 전역 변수의 사용 억제, 정보의 은닉 등에 활용.
<br>
* private 함수와 private 변수 만드는 방법은?

IIFE 함수를 사용한 Closure에서 return 되는 값을 제외한 변수나 정의한 함수는 외부에서 호출할 수 없다. (정보의 은닉화)
<br>
```
// 모듈패턴
var counter = (function() {
      var privateCounter = 0;
      function changeBy(val) {
        privateCounter += val;
      }
      return {
        increment: function() {
          changeBy(1);
        },
        decrement: function() {
          changeBy(-1);
        },
        value: function() {
          return privateCounter;
        }
      };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1
```

위의 예제처럼 외부에서는 privateCounter 변수와 changeBy 함수를 참조할 수 없다.

# IIFE (Immediately Invoked Function Expression) 즉시실행함수

즉시 실행되는 함수.
<br>
* 주로 사용되는 이유
    * 전역 스코프를 오염시키지 않기 위해서 사용. (불필요한 전역 변수와 함수를 생성하지 않음)
    * closure와 함께 private data를 사용할 수 있음.

> function() {}과 같이 작성되면, 자바스크립트 엔진은 이것을 함수 선언문(statement)로 인지한다.
> 선언문은 엔진에서 지시하고 사라지기 때문에 값으로 남지 않음.
> 따라서, ()와 같이 괄호로 묶어주면 이것을 '함수 표현식'으로 인지. (()로 묶어주는 것 외에, 연산자를 앞에 붙여줄 경우에도 즉시 실행되지만, 보통은 괄호로 묶는 방법을 사용한다.)
> IIFE앞에 세미콜론을 붙여, ASI(자동 세미콜론 삽입) 처리가 되지 않았을 상황을 방지한다.

<br>
# hoisting

호이스팅이란 모든 선언문이 해당 Scope의 선두로 옮겨진 것처럼 동작하는 특성이다. 실제로 그렇게 작동하는 것은 아니다.
<br>
# Global 변수

* window와 global의 상관관계는?

> 글로벌 객체는 자기 자신을 정의하는 속성을 가지고 있으며, HTML DOM에서는 'window' 속성이 global 객체 그 자신이다.
> 즉, window 객체는 global 객체. window 객체는 global 객체이기도 하므로, global 변수로 선언된 모든 변수들을 window 객체가 속성으로 가지게 됨

```
<script> 
    var myGlobal = "am i in window?";
    alert(myGlobal);
    alert(window.myGlobal + " Yes you are!"); 
</script>
```

* global 변수의 문제점
    * 암묵적 결합
        * 전역 변수를 사용한 의도는 전역, 즉 어디서든 참조하고 할당할 수 있는 변수이므로, 어디서든 그 변수를 변경할수 있는 위험이 있다.
    * 긴 생명 주기
        * 전역 변수는 생명 주기가 길다. 메모리 리소스도 오랜 기간 소비한다.
    * 네임스페이스 오염
        * 다른 파일 내에서 동일한 이름으로 전역 변수나 전역 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과 가져올 수 있음.
* global 사용 억제 방법
    * IIFE (즉시실행함수)
    * 모듈패턴 (클로저)
    * ES6 모듈

<br>
# this가 결정되는 방법은?

* 기본 바인딩 (전역 객체)

```
console.log(test); // undefined

function dosomething() {
    this.test = "가을";
    console.log(this);
}

dosomething();

console.log(this.test); // "가을"
```

* 암시적 바인딩

어떤 객체를 통해 함수가 호출된다면 그 객체가 바로 this의 context 객체가 됨.
<br>
```
function test() {
    console.log(this.a);
}

var obj = {
    a: 20,
    func1: test,
    func2: function() {
        console.log(this.a);
    }
};

obj.func1(); // 20
obj.func2(); // 20
```
<br>
```
var b = 100;

function test() {
    console.log(this.b);
}

var obj = {
    a: 20,
    func1: test,
    func2: function() {
        console.log(this.b);
    }
};

obj.func1(); // undefined
obj.func2(); // undefined

var gFunc1 = obj.func1;
gFunc1(); // 100
```

위의 경우 gFunc1()을 호출했을 시 100이 나왔다.
이유는 전역 스코프에서 생성한 변수는 전역 객체에 등록된다. 즉, gFunc1()은 window.gFunc1()와 같으므로 context는 global이다.
<br>
* 명시적 바인딩 : 다른 객체 대신 메소드를 호출하는데 사용된다. 이 메서드를 사용하여 함수의 this 객체를 원래 context에서 thisObj로 지정된 새로운 객체로 변경할 수 있다. (call, apply, bind가 있다.)
    * call과 apply의 차이점은 두번째 인자로 배열로 받는지, 안받는지 차이다.
    * bind 메서드는 call과 apply와 다르게

# Prototype

* 상속을 구현하는 방법은?

<br>
<br>
