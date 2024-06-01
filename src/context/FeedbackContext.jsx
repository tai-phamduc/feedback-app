import { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      "id": 1,
      "rating": 10,
      "text": "This is feedback item 1 coming from the backend"
    },
    {
      "id": 2,
      "rating": 8,
      "text": "This is feedback item 2 coming from the backend"
    },
    {
      "text": "Updated all packages to latest",
      "rating": 7,
      "id": 4
    }
  ])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const addNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const editFeedback = (item) => {
    setFeedbackEdit({item: item, edit: true})
  }
  const updateFeedback = (id, updatedFeedback) => {
    setFeedback(feedback.map(item => item.id == id ? {...item, ...updatedFeedback} : item))
  }
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }
  const resetFeedbackEdit = () => {
    setFeedbackEdit({item: {}, edit: false})
  }
  return (
    <FeedbackContext.Provider value={{feedback, addNewFeedback, editFeedback, deleteFeedback, feedbackEdit, updateFeedback, resetFeedbackEdit}}>
      {children}
    </FeedbackContext.Provider>
  )
}

export {FeedbackProvider}

export default FeedbackContext