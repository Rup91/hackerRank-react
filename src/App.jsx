import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slides from './Slides'
import {SLIDES_DATA} from './constants';
import FeedbackSystem from './Feedback'; 
import EmployeeValidationForm from './FormValidation';

function App() {
  const [count, setCount] = useState(0)

 

  return (
    <>
      {/* <Slides slides={SLIDES_DATA} /> */}
      {/* <FeedbackSystem /> */}
      <EmployeeValidationForm />

    </>
  )
}

export default App
