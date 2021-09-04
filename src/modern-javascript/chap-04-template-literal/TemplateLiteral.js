import React from 'react'

const TemplateLiteral = () => {

    // ES5 템플릿 스트링(template string)
    const templateString = () => {
        const name = "Alberto";
        const greeting = 'Hello my name is ' + name;
        
        console.log(greeting);
    }
    
    // ES6 템플릿 리터럴(tmeplate literal)
    const TemplateLiteral = () => {
        const name = "Alberto";
        const greeting = `Hello my name is ${name}`;

        console.log(greeting);
    }


    /**
     * text1 : ES5 에서 여러 줄 문자열 생성 방식
     * text2 : ES6 에서 여러 줄 문자열 생성 방식
     */
    let text1 = "hello, \
    my name is Alberto \
    how are you?\ ";

    let text2 = `hello,
    my name is Alberto
    how are you?`;

    return (<></>)
}

export default TemplateLiteral