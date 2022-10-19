import React from 'react'
import { Route } from 'react-router-dom'

import NavBar from './components/navBar'
import MainPage from './components/mainPage'
import AllProjects from './components/allProjects'
import Analytics from './components/analytics'
import UserAccount from './components/userAccount'

function App () {
  return (
    <>
      <NavBar/>
      <Route path='/' exact component={MainPage}/>
      <Route path='/all_projects' component={AllProjects}/>
      <Route path='/analytics' component={Analytics}/>
      <Route path='/user_account' component={UserAccount}/>
    </>
  )
}

export default App