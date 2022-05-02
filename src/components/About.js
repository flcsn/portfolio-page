import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col bg-blue-900 p-3 sm:p-5 md:p-9 min-w-screen min-h-screen'>
      <div className='flex-grow max-w-screen-lg h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-200 sm:text-3xl md:text-5xl'>About</h2>
        <p className='text-sm text-slate-200 tracking-wide font-light sm:text-lg md:text-xl md:leading-normal'>
          I take pride in creating things that other people
          can experience and enjoy. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed gravida, lacus eu egestas
          blandit, risus ligula pellentesque nulla, id congue felis
          velit eget neque. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
      </div>
      <div className='flex-grow max-w-screen-lg h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-200 sm:text-3xl md:text-5xl'>A Brief History</h2>
        <p className='text-sm text-slate-200 tracking-wide font-light sm:text-lg md:text-xl md:leading-normal'>
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