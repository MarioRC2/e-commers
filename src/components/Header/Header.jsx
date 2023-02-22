import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (

    <nav className='header'>
      <Link to='/' className='header__logo'>
        <i className='bi bi-tornado header__icon' />
        <p className='header__paragraph<'><label>Torm-Sale</label></p>
      </Link>

      <form className='header__form'>
        <input className='form-control' type='search' placeholder='Search' aria-label='Search' />
      </form>

      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='/' className='header__item-link'>
            Home
          </Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Promociones' className='header__item-link'>
            Promociones
          </Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Signup' className='header__item-link'>
            Signup
          </Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Login' className='header__item-link'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
