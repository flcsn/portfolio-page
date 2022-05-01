import React from 'react'

const Intro = () => {
  return (
    <section className='flex bg-slate-100 min-w-screen h-screen'>
      <div className='flex flex-col m-auto text-center md:gap-3 lg:gap-5'>
        <h1 className='text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-7xl xl:text-9xl'>Hi, I&apos;m Frankie.</h1>
        <h2 className='text-xl text-blue-900 sm:text-3xl md:text-5xl xl:text-7xl'>I&apos;m a full stack developer.</h2>
      </div>
    </section>
  )
}

export default Intro