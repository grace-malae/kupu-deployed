import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getWords from '../apis/words'

function WordOfDay () {
  // const [word, setWord] = useState(null)
  // const [pronounciation, setPronounciation] = useState(null)
  // const [definition, setDefinition] = useState(null)
  // const wordOfDay = useParams()

  // useEffect(() => {
  //   getWords(wordOfDay.word)
  //     .then(results => {
  //       setWord(results)
  //       setPronounciation(results)
  //       setDefinition(results)
  //       return null
  //     })
  //     .catch(err => console.log(err))
  // })
  return (
    <>
      <div className="container pt-24 md:pt-16 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full p-8 pt-16 md:p-12 mb-2 overflow-auto justify-center lg:items-start">
          <p className="font-bold text-white opacity-75 text-xl md:text-3xl mb-8 text-center md:text-left">Today&apos;s word is...</p>
          {/* <span className="font-bold text-5xl md:text-7xl lg:text-9xl self-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-shadow-2xl">{word[0].word}</span>
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold self-center text-center md:text-left">{pronounciation[0].pronounciation}</h1>
          <h1 className="my-4 text-3xl md:text-5xl font-bold self-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">{definition[0].definition}</h1> */}
          <span className="font-bold text-5xl md:text-7xl lg:text-9xl self-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out text-shadow-2xl">TARI</span>
          <h1 className="my-4 text-2xl md:text-5xl text-white opacity-75 font-bold self-center text-center md:text-left">(tuh-ree)</h1>
          <h1 className="text-center my-4 text-2xl md:text-5xl font-bold self-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">office, study, department</h1>
        </div>
      </div>
    </>
  )
}

export default WordOfDay
