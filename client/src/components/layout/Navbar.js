import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/serpent' onClick={() => window.location.replace('/serpent')}>Snake</Link>
      </li>
      <li>
        <Link to='/profiles' onClick={() => window.location.replace('/profiles')}>Codeurs</Link>
      </li>
      <li>
        <Link to='/posts' onClick={() => window.location.replace('/posts')}>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard' onClick={() => window.location.replace('/dashboard')}>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Tableau de bord</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Déconnexion</span>
        </a>
      </li>
    </ul>
  )

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles' onClick={() => window.location.replace('/profiles')}>Codeurs</Link>
      </li>
      <li>
        <Link to='/register' onClick={() => window.location.replace('/register')}>S'inscrire</Link>
      </li>
      <li>
        <Link to='/login' onClick={() => window.location.replace('/login')}>Connexion</Link>
      </li>
    </ul>
  )

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          @CodeurConnecté@
        </Link>
      </h1>
      {!loading && (
        <>{isAuthenticated ? authLinks : guestLinks}</>
      )}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logout }
)(Navbar)
