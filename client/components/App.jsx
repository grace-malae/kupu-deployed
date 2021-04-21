import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWords } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchWords())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>Fullstack Boilerplate - with Words!</h1>
        <ul>
          {props.words.map(word => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    words: globalState.words
  }
}

export default connect(mapStateToProps)(App)
