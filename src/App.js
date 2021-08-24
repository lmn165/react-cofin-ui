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

const App = () => (
  <>
  <Layout>
  <Header/>
  <Navigation/>
  </Layout>
  <Switch>
  <Route exact path='/' component = {Home}/>
  <Redirect from='/home' to = {'/'}/>
  <Route exact path='/course-register' component = {CourseRegister}/>
  <Route exact path='/join' component = {Join}/>
  <Route exact path='/login' component = {Login}/>
  <Route exact path='/online-profile' component = {OnlineProfile}/>
  <Route exact path='/school-status' component = {SchoolStatus}/>
  </Switch></>
);

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

export default App;
