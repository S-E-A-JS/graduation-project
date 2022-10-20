import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

import Underline from '../design-components/underline'

const NavBar = () => {
  const pageNames = {
    main: { name: 'Главная', path: '/main_page' },
    allProjects: { name: 'Все проекты', path: '/all_projects' },
    analytics: { name: 'Аналитика', path: '/analytics' },
  }
  const [ selectpage, setSelectPage ] = useState ( pageNames.main.path )
  const handleSwitchUnderline = pageName => {
    setSelectPage ( pageName )
  }

  return (
    <div className="navbar">
      <div className='navbar__list'>
        {Object.keys ( pageNames ).map ( pageName => (
          <Link className='navbar__text'
            key={pageName}
            onClick={() => handleSwitchUnderline ( pageNames[pageName].name )}
            to={pageNames[pageName].path}>{pageNames[pageName].name}
            {pageNames[pageName].name === selectpage
              ? <Underline/>
              : null}
          </Link>
        ) )}
      </div>
      <div>
        <Link className='navbar_user-account'
          to='/user_account'>Кабинет пользователя</Link>
      </div>
    </div>
  )
}

export default NavBar