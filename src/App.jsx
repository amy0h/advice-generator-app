import React from 'react'
import './App.css'

function App() {

  const [advice, setAdvice] = React.useState('')

  React.useEffect(function() {
    fetchData()
  }, [])

  function fetchData() {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data.slip))
  }

  return (
    <main>
      <p className='advice-title'>Advice #{advice.id}</p>
      <p className='advice-content'>{advice.advice}</p>
      <img src='./src/images/pattern-divider-mobile.svg' alt='' className='divider mobile' />
      <img src='./src/images/pattern-divider-desktop.svg' alt='' className='divider desktop' />
      <div className='button-container'>
        <button onClick={fetchData}>
          <img src='./src/images/icon-dice.svg' alt=''/>
        </button>
      </div>
    </main>
  )
}

export default App
