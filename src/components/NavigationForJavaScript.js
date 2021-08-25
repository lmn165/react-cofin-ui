import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavigationForJavaScript = () => (
<>
<Nav1 class="navi">
    <NavList>
        <NavItem><Link to='/basic'>basic</Link></NavItem>
        <NavItem><Link to='/arrow-function'>arrow-function</Link></NavItem>
        <NavItem><Link to='/arguments'>arguments</Link></NavItem>
        <NavItem><Link to='/template-literal'>template-literal</Link></NavItem>
        <NavItem><Link to='/literal-method'>literal-method</Link></NavItem>
        <NavItem><Link to='/array-method'>array-method</Link></NavItem>
        <NavItem><Link to='/spread-operator-rest-parameter'>spread-operator-rest-parameter</Link></NavItem>
        <NavItem><Link to='/object-literal'>object-literal</Link></NavItem>
        <NavItem><Link to='/symbol'>symbol</Link></NavItem>
    </NavList>
</Nav1>
<Nav2>
    <NavList>
        <NavItem><Link to='/class'>class</Link></NavItem>
        <NavItem><Link to='/promise'>promise</Link></NavItem>
        <NavItem><Link to='/generator'>generator</Link></NavItem>
        <NavItem><Link to='/proxy'>proxy</Link></NavItem>
        <NavItem><Link to='/set-map'>set-map</Link></NavItem>
        <NavItem><Link to='/array'>array</Link></NavItem>
        <NavItem><Link to='/es2017'>es2017</Link></NavItem>
        <NavItem><Link to='/async-await'>async-await</Link></NavItem>
        <NavItem><Link to='/es2018'>es2018</Link></NavItem>
        <NavItem><Link to='/es2019'>es2019</Link></NavItem>
        <NavItem><Link to='/es2020'>es2020</Link></NavItem>
        <NavItem><Link to='/typescript'>typescript</Link></NavItem>
    </NavList>
</Nav2>
</>
)

export default NavigationForJavaScript

const Nav1 = styled.div`
    width: 100%;
    height: 30px;
`
const Nav2 = styled.div`
    width: 100%;
    height: 30px;
    border-bottom: 1px solid green
`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
    padding: 0 auto;
`

const NavItem = styled.li`
    width: auto;
    margin-left: 14px;
    margin-top: 5px;
    display: flex;
    font-size: 1.3vh;
`