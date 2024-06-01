import React from 'react'
import Card from '../share/Card'
import {useState, useEffect} from 'react'
import Button from '../share/Button'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const { addNewFeedback, feedbackEdit, updateFeedback, resetFeedbackEdit } = useContext(FeedbackContext)
  useEffect(() => {
    if (feedbackEdit.edit == true) {
      setText(feedbackEdit.item.text)
      setBtnDisabled(false)
    }
  }, [feedbackEdit])  

  const handleTextChange = e => {
    if (e.target.value == '') {
      setMessage(null)
      setBtnDisabled(true)
    } else if (e.target.value.length < 10) {
      setMessage("Text must be at least 10 charaters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const select = (selectedValue) => {
    setRating(selectedValue)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length < 10) return
    const newFeedback = {
      rating,
      text
    }
    if (feedbackEdit.edit === false) {
      addNewFeedback(newFeedback)
    } else {
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }
    setText('')
    setBtnDisabled(true)
    resetFeedbackEdit()
  }

  return (
    <Card>
      <h2>How would you rate our service with us?</h2>
      <RatingSelect select={select} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" value={text} onChange={handleTextChange}/>
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm