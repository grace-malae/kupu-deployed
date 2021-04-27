import React from 'react'
// import React, { useRef } from 'react'

export default function Form () {
  // const formRef = useRef()

  // function handleFormClick () {
  //   formRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <>
      {/* <div className="flex self-center justify-center items-center w-full md:my-12 pt-4 pb-12">
        <button className="w-2/3 md:w-1/3 py-8 self-center bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold rounded-lg focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="button" onClick={handleFormClick}>Sign Up</button>
      </div> */}
      <div className="pt-4 flex flex-col w-full justify-center lg:items-start overflow-auto">
        <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center self-center md:text-left">Daily
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"> Te Reo</span> words in your inbox!</h1>
        <p className="leading-normal text-blue-300 text-base md:text-2xl mb-8 text-center self-center md:text-left">Enter your details below to recieve daily te reo words.</p>
        <form className="bg-gray-900 opacity-75 w-full mt-6 md:w-4/5 lg:w-3/5 shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 self-center">
          <div className="mb-4">
            <div className="flex flex-wrap mb-8 mt-8">
              <label className="block text-blue-300 py-2 font-bold mb-2 md:w-1/5 " htmlFor="firstName">First Name</label>
              <input className="shadow appearance-none border rounded w-full md:w-4/5 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" id="firstName" type="text" placeholder="Kahu" />
            </div>
            <div className="flex flex-wrap mb-8 mt-8">
              <label className="block text-blue-300 py-2 font-bold mb-2 md:w-1/5" htmlFor="emailAddress">Email</label>
              <input className="shadow appearance-none border rounded w-full md:w-4/5 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" id="emailAddress" type="text" placeholder="kahu@email.co.nz" />
            </div>
            <div className="flex flex-wrap mb-8 mt-8">
              <label className="block text-blue-300 py-2 font-bold mb-2 md:w-1/5" htmlFor="birthday">Birthday</label>
              <input className="shadow appearance-none border rounded w-full md:w-4/5 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" id="birthday" type="date" />
            </div>
            <div className="flex flex-wrap mb-8 mt-8">
              <label className="block text-blue-300 py-2 font-bold mb-2 md:w-1/5" htmlFor="ethnicity">Ethnicity</label>
              <select className="shadow appearance-none border rounded w-full md:w-4/5 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" name="ethnicity" id="ethnicity">
                <option value="" disabled selected>Select...</option>
                <option value="Māori">Māori</option>
                <option value="Pacific Islander">Pacific Islander</option>
                <option value="NZ European">NZ European</option>
                <option value="European">European</option>
                <option value="Asian">Asian</option>
                <option value="American">American</option>
                <option value="Other">Other</option>

              </select>
            </div>
            <div className="flex flex-wrap mb-8 mt-8">
              <label className="block text-blue-300 py-2 font-bold mb-2 md:w-1/5" htmlFor="where">I am...</label>
              <select className="shadow appearance-none border rounded w-full md:w-4/5 p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out" name="where" id="where">
                <option value="" disabled selected>Select...</option>
                <option value="Living in New Zealand and was born in New Zealand">Living in New Zealand and was born in New Zealand</option>
                <option value="Living in New Zealand but was born overseas">Living in New Zealand but was born overseas</option>
                <option value="Living overseas but was born in New Zealand">Living overseas but was born in New Zealand</option>
                <option value="Living overseas and was born outside of New Zealand">Living overseas and was born outside of New Zealand</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <button className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="button">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
