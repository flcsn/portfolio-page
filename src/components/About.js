import React from 'react'
import FrankieLacsonResume from '../assets/FrankieLacsonResume.pdf'

const About = () => {
  return (
    <section className='flex flex-col bg-blue-900 p-3 sm:p-5 md:p-9 min-w-screen min-h-screen'>
      <div className='flex-grow max-w-screen-md h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-100 sm:text-3xl md:text-5xl'>About</h2>
        <p className='text-xs text-slate-300 tracking-wide leading-loose font-light sm:text-base sm:leading-loose md:text-lg md:leading-loose lg:leading-loose'>
          I am a former HR professional who recently decided to transition to a career in web development.
          I love learning new technologies that help me come up with cleaner and more efficient solutions to practical problems,
          but in general, I just enjoy creating applications that work.
          If you would like to know more about my credentials, my resume can be viewed&nbsp;
          <a className='font-semibold hover:underline' href={FrankieLacsonResume} target='_blank' rel='noopener noreferrer'>here (PDF)</a>.
        </p>
        <br/>
        <p className='text-xs text-slate-300 tracking-wide leading-loose font-light sm:text-base sm:leading-loose md:text-lg md:leading-loose lg:leading-loose'>
          When I am not working on a project, I can be found bashing my head against the wall in Elden Ring,
          or trying out a new Fire Emblem game while waiting for the next major FFXIV update.
        </p>
      </div>
      <div className='flex-grow max-w-screen-md h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-100 sm:text-3xl md:text-5xl'>A Brief History</h2>
        <p className='text-xs text-slate-300 tracking-wide leading-loose font-light sm:text-base sm:leading-loose md:text-lg md:leading-loose lg:leading-loose'>
          I started my journey into programming with Harvard&apos;s&nbsp;
          <a className='font-semibold hover:underline' href='https://cs50.harvard.edu' target='_blank' rel='noopener noreferrer'>Intro to Computer Science (CS50)</a>,
          studying part-time back in October 2020.
          Afterwards, to help solidify my understanding of core programming concepts, I worked through University of Helsinki&apos;s&nbsp;
          <a className='font-semibold hover:underline' href='https://java-programming.mooc.fi/' target='_blank' rel='noopener noreferrer'>Java Programming MOOC</a>.
          Towards the end of 2021, I started studying full-time and took up University of Helsinki&apos;s course on modern web development:&nbsp;
          <a className='font-semibold hover:underline' href='https://fullstackopen.com/en/' target='_blank' rel='noopener noreferrer'>Full Stack Open</a>,
           where I learned my current skills in JavaScript and other technologies, particularly React, Express, and MongoDB.
        </p>
      </div>
    </section>
  )
}

export default About