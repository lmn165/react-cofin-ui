import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
// import './App.css';
import { CourseRegister, Join, Login, OnlineProfile, SchoolStatus, NavigationForJavaScript, CofinMap } from 'components/index'
import { Header, Navigation } from 'Layout/index'
import styled from 'styled-components'
import { Basic, ArrowFunction, Arguments, TemplateLiteral, LiteralMethod, Destructuring, Loop, 
  ArrayMethod, SpreadOperatorRestParameter, ObjectLiteral, Symbol, Class, Promise, Generator,
  Proxy, SetMap, Array, Es2017, AsyncAwait, Es2018, Es2019, Es2020, Typescript } from 'modern-javascript/index'
import { HomePage } from "pages/index";

const App = () => (
  <>
  <Layout>
  <Header/>
  <Navigation/>
  <NavigationForJavaScript/>
  </Layout>
  <Switch>
  <Route exact path='/' component = {HomePage}/>
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

  <Route exact path='/cofin-map' component = { CofinMap }/>
  </Switch></>
);

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;
