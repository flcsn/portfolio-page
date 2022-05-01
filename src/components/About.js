import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col bg-blue-900 min-w-screen min-h-screen'>
      <div className='flex-grow h-full p-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-200'>About</h2>
        <p className='text-sm text-slate-200'>
          I take pride in creating things that other people
          can experience and enjoy. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed gravida, lacus eu egestas
          blandit, risus ligula pellentesque nulla, id congue felis
          velit eget neque. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
      </div>
      <div className='flex-grow h-full p-3'>
        <h2 className='text-xl font-semibold tracking-tight text-slate-200'>A Brief History</h2>
        <p className='text-sm text-slate-200'>
          I started my journey into programming with
          Harvard&apos;s Intro to Computer Science (CS50). Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed gravida, lacus eu egestas
          blandit, risus ligula pellentesque nulla, id congue felis
          velit eget neque. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Integer consequat odio eget consequat dapibus.
          Donec auctor urna at risus eleifend, ac cursus massa porta.
        </p>
      </div>
    </section>
  )
}

export default About