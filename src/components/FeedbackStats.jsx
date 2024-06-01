import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)
  var average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <div>{feedback.length} feedback(s)</div>
      <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array
}

export default FeedbackStats