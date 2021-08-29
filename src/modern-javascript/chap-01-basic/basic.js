import React from 'react'
import styled from 'styled-components'

var man = {} // es5

const Basic = () => {
    const letSample = () => {
        let tom = 'Tom' // es6에서 variable
        const james = 'James' // es6 에서 constant
    }
    const dynamicType = () => {
        let userId = 12;
        console.log(`USER ID is ${userId}`)
        userId = "kim";
        console.log(`USER ID is ${userId}`)
    }

    const jsonSample = () => {
        const car = {
            wheels: 4,
            color: "red",
            drive: function() {
                console.log("wroom wroom")
            }
        };
        console.log(Object.keys(car)[0]);
        console.log(typeof Object.keys(car)[0]);
        car.drive();
    }

    const notationSample = () => {
        const car = {
            wheels: 4,
            color: "red",
            "goes fast": true
        };
        console.log(car.wheels);        // 점 표기법(dot notation)
        console.log(car['goes fast'])   // 대괄호 표기법(bracket notation): 여러 단어로 이루어진 속성은 점 표기법 불가.
    }

    /*
        greeter1 - 기본 함수 표현식 
        greeter2 - 함수 표현식을 이용한 익명함수
        greeter3 - 화살표 함수 (ES6)
    */
    const greeter1 = function greet(name) {
        console.log(`hello ${name}`)
    }
    const greeter2 = function(name) {
        console.log(`hello ${name}`)
    }
    const greeter3 = (name) => {
        console.log(`hello ${name}`)
    }

    return(<>
    <BasicButton onClick={dynamicType}>dynamicType</BasicButton>
    <BasicButton onClick={jsonSample}>JSON</BasicButton>
    <BasicButton onClick={notationSample}>notationSample</BasicButton>
    </>)
}

export default Basic

const BasicButton = styled.button`
    display: block;
    margin: 10px 0;
`