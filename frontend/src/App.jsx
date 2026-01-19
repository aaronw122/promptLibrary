import { useState, useEffect } from 'react'
import './App.css'
import services from './services/index';
import Prompts from './components/prompts'

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    services
      .getPrompts()
      .then(p => {
        console.log('p', p)
        setPrompts(p)
      })
  }, [])


  return (
    <>
      <h1>Prompt Library</h1>
      <h2>Add a prompt</h2>
      <h2>List of prompts</h2>
      <Prompts prompts={prompts}/>
    </>
  )
}

export default App
