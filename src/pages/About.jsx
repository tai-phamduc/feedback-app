import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../share/Card'

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p> 
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </div>
    </Card>
  )
}

export default About