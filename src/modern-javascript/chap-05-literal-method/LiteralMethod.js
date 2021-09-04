import React from 'react'

const LiteralMethod = () => {

    // ES6 이전에 존재하던 문자열 메서드들
    const str = "this is a short sentence";
    str.indexOf("short");

    const str = "pizza, orange, cereals";
    str.slice(0, 5);    

    const str = "i ate an apple";
    str.toUpperCase();

    const str = "I ATE AN APPLE";
    str.toLowerCase();


    // ES6 에서 추가된 문자열 메서드들
    const code = "ABCDEFG";
    // startsWith()
    code.startsWith("ABB");
    code.startsWith("abc");
    code.startsWith("ABC");
    code.startsWith("DEF", 3);
    
    // endsWith()
    code.endsWith("def");
    code.endsWith("DEF");
    
    // includes()
    code.includes("abc");
    code.includes("CDE");
    
    // repeat()
    const hello = "Hi";
    console.log(hello.repeat(5));

    return (<></>)
}

export default LiteralMethod