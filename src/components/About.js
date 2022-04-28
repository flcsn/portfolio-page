import React from 'react'

const About = () => {
  return (
    <div className='flex bg-blue-900 w-screen h-screen'>
      <div className='flex flex-col'>
        <div className='h-full p-3'>
          <h2 className='text-xl font-semibold tracking-tight text-slate-200'>About</h2>
          <p className='text-sm text-slate-200'>
            I take pride in creating things that other people
            can experience and enjoy.
          </p>
        </div>
        <div className='h-full p-3'>
          <h2 className='text-xl font-semibold tracking-tight text-slate-200'>A Brief History</h2>
          <p className='text-sm text-slate-200'>
            I started my journey into programming with
            Harvard&apos;s Intro to Computer Science (CS50)
          </p>
        </div>
      </div>
    </div>
  )
}

export default About