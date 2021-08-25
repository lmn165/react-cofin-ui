import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
// import './App.css';
import Home from './components/Home'
import CourseRegister from './components/CourseRegister'
import Join from './components/Join'
import Login from './components/Login'
import OnlineProfile from'./components/OnlineProfile'
import SchoolStatus from './components/SchoolStatus'
import Navigation from './Layout/Navigation'
import styled from 'styled-components'
import Header from './Layout/Header'
import NavigationForJavaScript from './components/NavigationForJavaScript'
import Basic from './modern-javascript/chap-01-basic/Basic'
import ArrowFunction from './modern-javascript/chap-02-arrow-function/ArrowFunction'
import Arguments from './modern-javascript/chap-03-arguments/Arguments'
import TemplateLiteral from './modern-javascript/chap-04-template-literal/TemplateLiteral'
import LiteralMethod from './modern-javascript/chap-05-literal-method/LiteralMethod'
import Destructuring from './modern-javascript/chap-06-destructuring/Destructuring'
import Loop from './modern-javascript/chap-07-loop/Loop'
import ArrayMethod from './modern-javascript/chap-08-array-method/ArrayMethod'
import SpreadOperatorRestParameter from './modern-javascript/chap-09-spread-operator-rest-parameter/SpreadOperatorRestParameter'
import ObjectLiteral from './modern-javascript/chap-10-object-literal/ObjectLiteral'
import Symbol from './modern-javascript/chap-11-symbol/Symbol'
import Class from './modern-javascript/chap-12-class/Class'
import Promise from './modern-javascript/chap-13-promise/Promise'
import Generator from './modern-javascript/chap-14-generator/Generator'
import Proxy from './modern-javascript/chap-15-proxy/Proxy'
import SetMap from './modern-javascript/chap-16-set-map/SetMap'
import Array from './modern-javascript/chap-17-array/Array'
import Es2017 from './modern-javascript/chap-18-es2017/Es2017'
import AsyncAwait from './modern-javascript/chap-19-async-await/AsyncAwait'
import Es2018 from './modern-javascript/chap-20-es2018/Es2018'
import Es2019 from './modern-javascript/chap-21-es2019/Es2019'
import Es2020 from './modern-javascript/chap-22-es2020/Es2020'
import Typescript from './modern-javascript/chap-23-typescript/Typescript'

import ConfinMap from './components/CofinMap'

const App = () => (
  <>
  <Layout>
  <Header/>
  <Navigation/>
  <NavigationForJavaScript/>
  </Layout>
  <Switch>
  <Route exact path='/' component = {Home}/>
  <Redirect from='/home' to = {'/'}/>
  <Route exact path='/course-register' component = {CourseRegister}/>
  <Route exact path='/join' component = {Join}/>
  <Route exact path='/login' component = {Login}/>
  <Route exact path='/online-profile' component = {OnlineProfile}/>
  <Route exact path='/school-status' component = {SchoolStatus}/>

  <Route exact path='/basic' component = { Basic }/>
  <Route exact path='/arrow-function' component = { ArrowFunction }/>
  <Route exact path='/arguments' component = { Arguments }/>
  <Route exact path='/template-literal' component = { TemplateLiteral }/>
  <Route exact path='/literal-method' component = { LiteralMethod }/>
  <Route exact path='/destructuring' component = { Destructuring }/>
  <Route exact path='/loop' component = { Loop }/>
  <Route exact path='/array-method' component = { ArrayMethod }/>
  <Route exact path='/spread-operator-rest-parameter' component = { SpreadOperatorRestParameter }/>
  <Route exact path='/object-literal' component = { ObjectLiteral }/>
  <Route exact path='/symbol' component = { Symbol }/>
  <Route exact path='/class' component = { Class }/>
  <Route exact path='/promise' component = { Promise }/>
  <Route exact path='/generator' component = { Generator }/>
  <Route exact path='/proxy' component = { Proxy }/>
  <Route exact path='/set-map' component = { SetMap }/>
  <Route exact path='/array' component = { Array }/>
  <Route exact path='/es2017' component = { Es2017 }/>
  <Route exact path='/async-await' component = { AsyncAwait }/>
  <Route exact path='/es2018' component = { Es2018 }/>
  <Route exact path='/es2019' component = { Es2019 }/>
  <Route exact path='/es2020' component = { Es2020 }/>
  <Route exact path='/typescript' component = { Typescript }/>

  <Route exact path='/cofin-map' component = { ConfinMap }/>
  </Switch></>
);

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;
