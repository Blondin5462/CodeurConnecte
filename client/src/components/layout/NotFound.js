import React, { Fragment } from 'react'

const NotFound = () => {
  return (
    <>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Page Non trouvé
      </h1>
      <p className='large'>Désolé, cette page n'existe pas</p>
    </>
  )
}

export default NotFound
