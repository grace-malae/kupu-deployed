import React from 'react'
import { connect } from 'react-redux'

function WordOfDay (props) {
  console.log(props)
  return (
    <>
      <div className="container pt-24 md:pt-30 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full p-12 mb-12 overflow-auto justify-center lg:items-start">
          <p className="font-bold text-white opacity-75 text-xl md:text-3xl mb-8 text-center md:text-left">Today&apos;s word is...</p>
          {props.words.map(word => (
            <div key={word.id}>
              <span className="font-bold text-5xl md:text-7xl lg:text-9xl self-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-shadow-2xl">{word.word}</span>
              <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold self-center text-center md:text-left">{word.pronounciation}</h1>
              <h1 className="my-4 text-3xl md:text-5xl font-bold self-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">{word.definition}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    words: globalState.words
  }
}

export default connect(mapStateToProps)(WordOfDay)
