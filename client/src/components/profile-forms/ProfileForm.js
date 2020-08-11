import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'

const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
}

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState)

  const [displaySocialInputs, toggleSocialInputs] = useState(false)

  useEffect(() => {
    if (!profile) getCurrentProfile()
    if (!loading && profile) {
      const profileData = { ...initialState }
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key]
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key]
      }
      if (Array.isArray(profileData.skills)) { profileData.skills = profileData.skills.join(', ') }
      setFormData(profileData)
    }
  }, [loading, getCurrentProfile, profile])

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    createProfile(formData, history, !!profile)
  }

  return (
    <>
      <h1 className='large text-primary'>Editer votre Profil</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Ajouter des changements à votre profil
      </p>
      <small>* = champ requis</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <select name='status' value={status} onChange={onChange}>
            <option>* Selectionner un statut professionnel</option>
            <option value='Developpeur'>Developpeur</option>
            <option value='Developpeur Junior'>Developpeur Junior</option>
            <option value='Developpeur Senior'>Developpeur Senior</option>
            <option value='Manager'>Manager</option>
            <option value='Etudiant ou Apprentis'>Etudiant ou Apprentis</option>
            <option value='Formateur'>Formateur ou Enseignant</option>
            <option value='Interne'>Interne</option>
            <option value='Autre'>Autre</option>
          </select>
          <small className='form-text'>
          Donnez-nous une idée d'où vous en êtes dans votre carrière
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Entreprise'
            name='company'
            value={company}
            onChange={onChange}
          />
          <small className='form-text'>
          Peut être votre propre entreprise ou celle pour laquelle vous travaillez
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Site web'
            name='website'
            value={website}
            onChange={onChange}
          />
          <small className='form-text'>
          Peut être le vôtre ou un site Web d'entreprise
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Lieu'
            name='location'
            value={location}
            onChange={onChange}
          />
          <small className='form-text'>
          Ville et Région suggérés (par exemple Nancy, Meurthe-et-Moselle)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Compétences'
            name='skills'
            value={skills}
            onChange={onChange}
          />
          <small className='form-text'>
          Veuillez utiliser des valeurs séparées par des virgules (par exemple, HTML, CSS, JavaScript, PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder="Nom d'utilisateur sur Github"
            name='githubusername'
            value={githubusername}
            onChange={onChange}
          />
          <small className='form-text'>
          Si vous voulez votre dernier repos et un lien Github, incluez votre Nom d'utilisateur
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Une courte biographie de vous-même'
            name='bio'
            value={bio}
            onChange={onChange}
          />
          <small className='form-text'>Parlez-nous un peu de vous</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Ajouter des liens de réseaux sociaux
          </button>
          <span>Optionnel</span>
        </div>

        {displaySocialInputs && (
          <>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={onChange}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={onChange}
              />
            </div>
          </>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Retour
        </Link>
      </form>
    </>
  )
}

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
)
