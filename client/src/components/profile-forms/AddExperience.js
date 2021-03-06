import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const { company, title, location, from, to, current, description } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <>
      <h1 className='large text-primary'>Ajouter une expérience</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Ajouter un poste que vous avez eu dans le passé
      </p>
      <small>* = champ requis</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault()
          addExperience(formData, history)
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Titre du poste'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Entreprise'
            name='company'
            value={company}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Lieu'
            name='location'
            value={location}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <h4>De</h4>
          <input type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current })
              }}
            />{' '}
            Travail actuel
          </p>
        </div>
        <div className='form-group'>
          <h4>à</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Description du poste'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Retour
        </Link>
      </form>
    </>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(AddExperience)
