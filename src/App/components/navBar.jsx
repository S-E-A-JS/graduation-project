import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <>
    <div>
      <Link to='/'>Главная</Link>
      <Link to='/all_projects'>Все проекты</Link>
      <Link to='/analytics'>Аналитика</Link>
    </div>
    <div>
      <Link to='/user_account'>Кабинет пользователя</Link>
    </div>
  </> )

export default NavBar