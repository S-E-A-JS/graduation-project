import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import NavBar from './components/navbar/navBar'
import MainPage from './components/mainPage/mainPage'
import AllProjects from './components/allProjects'
import Analytics from './components/analytics'
import UserAccount from './components/userAccount'
import StartPage from './components/startPage/startPage'
// TODO развернуть json-server
// TODO прописать в DB тестовые 10 проектов
// TODO написать методы обращения к серверу GET - получение, PUT - изменение, POST - создание
function App () {
  return (
    <div className='wrap'>
      <NavBar/>
      <Route path='/'
        component={StartPage}
        exact/>
      <Route path='/main_page'
        component={MainPage}/>
      <Route path='/all_projects'
        component={AllProjects}/>
      <Route path='/analytics'
        component={Analytics}/>
      <Route path='/user_account'
        component={UserAccount}/>
    </div>
  )
}

export default App