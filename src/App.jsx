import './App.css'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from "./components/Header"
import FeedbackForm  from './components/FeedbackForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={(
                <>
                  <FeedbackForm/>
                  <FeedbackStats/>
                  <FeedbackList/>
                  <AboutIconLink/>
                </>
              )}>
            </Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </FeedbackProvider>
  )
}

export default App
