import React from 'react'

import { FaArrowAltCircleDown } from 'react-icons/fa'

const Intro = () => {
  const arrowClick = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <section className='flex bg-slate-100 min-w-screen h-screen'>
      <div className='flex flex-col gap-1 m-auto text-center md:gap-5'>
        <h1 className='opacity-0 animate-[fadeIn_1s_ease-in-out_0s_forwards] text-3xl font-bold tracking-tight text-blue-600 sm:text-5xl md:text-7xl'>
          Hi, I&apos;m Frankie.
        </h1>
        <h2 className='opacity-0 animate-[fadeIn_1s_ease-in-out_1s_forwards] text-xl text-blue-900 sm:text-3xl md:text-5xl'>
          I can make your websites work!
        </h2>
        <p className='opacity-0 animate-[fadeIn_1s_ease-in-out_2250ms_forwards] text-sm text-blue-900 sm:text-lg md:text-3xl'>
          <span className='italic'>Most</span> of the time.
        </p>
        <button className='opacity-0 animate-[fadeIn_1s_ease-in-out_3s_forwards] mt-10 mx-auto h-6 w-6' onClick={arrowClick}>
          <FaArrowAltCircleDown id='downArrow' className='h-full w-full animate-bounce fill-blue-900 hover:fill-blue-600' />
        </button>
      </div>
    </section>
  )
}

export default Intro