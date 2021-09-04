import React from 'react'

const Arguments = () => {

    /**
     * = {} 를 추가해야 인수를 기본적으로 객체로 설정한다.
     * = {} 가 없다면, 인수로 무엇을 전달하든 아래 오류 문구가 출력된다.
     * cannot read property `total` of 'undefined' or 'null'
     */
    function calculatePrice({total = 0, tax = 0.1, tip = 0.05,} = {}){
        return total + (total * tax) + (total * tip);
    }

    const bill = calculatePrice({tip: 0.15, total: 150});
    // 187.5

    return (<></>)
}

export default Arguments