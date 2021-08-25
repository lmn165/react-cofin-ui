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

    return(<>
    <BasicButton onClick={dynamicType}>dynamicType</BasicButton>
    <BasicButton onClick={jsonSample}>JSON</BasicButton>
    </>)
}

export default Basic

const BasicButton = styled.button`
    display: block;
    margin: 10px 0;
`