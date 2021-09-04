import React from 'react'

const ArrowFunction = () => {

    /**
    * person1 : 일반 함수에서의 this
    * person2 : 화살표 함수에서의 this
    */
    const person1 = {
        age:10,
        grow: function(){
            this.age++;
            console.log(this.age);
        },
    };

    person1.grow();
    // 11

    const person2 = {
        age: 10,
        grow: () => {
            // 오류: 여기서 this 는 Window 객체를 가리킴
            this.age++;
            console.log(this.age);
        },
    };

    person2.grow();





    /**
     * example : 일반 함수에서의 arguments 객체 접근
     * showWinner : 화살표 함수에서의 arguments 객체 접근
     * errorExample : 화살표 함수에서 잘못된 arguments 객체 접근
     */

    function example() {
        console.log(arguments[0]);
    }

    example(1, 2, 3);
    // 1


    const showWinner = (...args) => {
        const winner = args[0];
        console.log(`${winner} was the winner`);
    };

    showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell");
    // Usain Bolt was the winner
    
    
    
    const errorExample = () => {
        const winner = arguments[0];
        console.log(`${winner} was the winner`);
    };
    
    showWinner("Usain Bolt", "Justin Gatlin", "Asafa Powell");
    // ReferenceError: arguments is not defined

    return(<></>)
}

export default ArrowFunction