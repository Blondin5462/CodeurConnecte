import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import moment from 'moment'

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark'>{school}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{moment.utc(from)}</Moment> -{' '}
      {!to ? ' Maintenant' : <Moment format='DD/MM/YYYY'>{moment.utc(to)}</Moment>}
    </p>
    <p>
      <strong>Diplôme: </strong> {degree}
    </p>
    <p>
      <strong>Domaine: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
)

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
}

export default ProfileEducation
