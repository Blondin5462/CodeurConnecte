import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'
import { connect } from 'react-redux'
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{moment.utc(exp.from)}</Moment> -{' '}
        {exp.to === null ? (
          ' Maintenant'
        ) : (
          <Moment format='DD/MM/YYYY'>{moment.utc(exp.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger'
        >
          Supprimer
        </button>
      </td>
    </tr>
  ))

  return (
    <>
      <h2 className='my-2'>Expériences professionnelles</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Entreprise</th>
            <th className='hide-sm'>Poste</th>
            <th className='hide-sm'>Années</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
}

export default connect(
  null,
  { deleteExperience }
)(Experience)
