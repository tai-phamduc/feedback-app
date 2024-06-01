import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import React from 'react'

const AboutIconLink = () => {
  const aboutLink = {
    pathname: '/about',
    search: '?sort=name',
  }
  return (
    <div className='about-link'>
      <Link to={aboutLink}>
        <FaQuestionCircle size={30}/>
      </Link>
    </div>
  )
}

export default AboutIconLink