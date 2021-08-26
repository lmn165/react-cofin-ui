import React, {component} from 'react';
import styled from 'styled-components';

const Header = () => (
    <Container>
        <Element>
            <ShortCut>로그인/회원가입</ShortCut>
            <Logo>
            <img
                width="100%"
                height="100%"
                src="https://t1.daumcdn.net/cfile/tistory/99CD014B5BD01FA412"
                alt="logo"/>
            </Logo>
            <Search><Title>React Blog</Title></Search>
        </Element>
    </Container>
)

export default Header

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 80%;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`

const Logo = styled.div`
    order: 2;
    width: 20%;
    height: 80px;
`

const Search = styled.div`
    order: 3;
    width: 80%;
    height: 80px;
    background-color: #78ffd6;
    text-align: center;
`
const Title = styled.h1`
    // font-size: 1.5em;
`