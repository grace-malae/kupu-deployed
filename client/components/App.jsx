import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchWords } from '../actions'

import Header from './Header'
import WordOfDay from './WordOfDay'
import Form from './Form'
import Footer from './Footer'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchWords())
  }, [])

  return (
    <>
      <div className='app'>
        <Header />
        <WordOfDay />
        <Form />
        <Footer />
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
