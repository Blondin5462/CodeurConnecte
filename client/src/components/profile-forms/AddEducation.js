import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  })

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    description,
    current
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <>
      <h1 className='large text-primary'>Ajouter votre formation</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Ajoutez n'importe quel établissement où vous avez étudié
      </p>
      <small>* = champ requis</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault()
          addEducation(formData, history)
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Etablissement'
            name='school'
            value={school}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Diplôme ou certification'
            name='degree'
            value={degree}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Domaine'
            name='fieldofstudy'
            value={fieldofstudy}
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
              onChange={() =>
                setFormData({ ...formData, current: !formData.current })}
            />{' '}
            Formation actuelle
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
            placeholder='Description du programme'
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
}

export default connect(null, { addEducation })(AddEducation)
