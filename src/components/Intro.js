import React from 'react'

const Intro = () => {
  const scrollToAbout = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  const scrollToContact = () => {
    window.scroll({
      top: window.innerHeight * 4,
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
        <h2 className='opacity-0 animate-[fadeIn_1250ms_ease-in-out_1s_forwards] text-xl text-blue-900 sm:text-3xl md:text-5xl'>
          I can make your websites work!
        </h2>
        <p className='opacity-0 animate-[fadeIn_1s_ease-in-out_2250ms_forwards] text-sm text-blue-900 sm:text-xl md:text-3xl'>
          <span className='italic'>Most</span> of the time.
        </p>
        <div className='flex flex-col justify-center mt-10 gap-1 items-center sm:flex-row sm:gap-3'>
          <button className='opacity-0 animate-[fadeIn_1s_ease-in-out_3s_forwards] px-4 py-2 rounded-xl bg-blue-900 font-semibold text-slate-100 text-sm sm:text-lg hover:bg-opacity-90' onClick={scrollToAbout}>
            Learn More
          </button>
          <button className='opacity-0 animate-[fadeIn_1s_ease-in-out_3500ms_forwards] px-4 py-2 rounded-xl bg-slate-900 font-semibold text-slate-100 text-sm sm:text-lg hover:bg-opacity-90' onClick={scrollToContact}>
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}

export default Intro