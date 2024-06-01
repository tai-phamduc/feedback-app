import React from 'react'
import PropTypes from 'prop-types'

const Card = ({children, reverse=false}) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.propsType = {
  chilren: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card