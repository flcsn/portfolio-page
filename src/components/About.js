import React from 'react'
import FrankieLacson from '../assets/FrankieLacson.pdf'

const About = () => {
  return (
    <section className='flex flex-col bg-blue-900 p-3 sm:p-5 md:p-9 min-w-screen min-h-screen'>
      <div className='flex-grow max-w-screen-lg h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-200 sm:text-3xl md:text-5xl'>About</h2>
        <p className='text-sm text-slate-200 tracking-wide font-light sm:text-lg md:text-xl md:leading-normal'>
          I am a former HR professional who recently decided to transition to a career in web development.
          As a developer, I take deep pride in building applications that can both address practical problems for clients,
          and lead to satisfying experiences for end users.
          If you would like to know more about my credentials, my resume can be viewed
          <a className='font-semibold' href={FrankieLacson} target='_blank' rel='noopener noreferrer'> here</a> (PDF).
        </p>
        <br/>
        <p className='text-sm text-slate-200 tracking-wide font-light sm:text-lg md:text-xl md:leading-normal'>
          When I am not working on a project, I can be found bashing my head against the wall in Elden Ring,
          or trying out a new Fire Emblem game while waiting for the next major FFXIV update.
        </p>
      </div>
      <div className='flex-grow max-w-screen-lg h-full m-auto'>
        <h2 className='mb-1 md:mb-5 text-xl font-semibold tracking-tight text-slate-200 sm:text-3xl md:text-5xl'>A Brief History</h2>
        <p className='text-sm text-slate-200 tracking-wide font-light sm:text-lg md:text-xl md:leading-normal'>
          I started my journey into programming with Harvard&apos;s
          <a className='font-semibold' href='https://cs50.harvard.edu' target='_blank' rel='noopener noreferrer'> Intro to Computer Science (CS50)</a> back in late-2020.
          To help solidify my understanding of core programming concepts, I worked through University of Helsinki&apos;s
          <a className='font-semibold' href='https://java-programming.mooc.fi/' target='_blank' rel='noopener noreferrer'> Java Programming course</a>.
          Afterwards, I decided to learn about basic data structures and algorithms with Princeton University&apos;s
          <a className='font-semibold' href='https://www.coursera.org/learn/algorithms-part1' target='_blank' rel='noopener noreferrer'> Algorithms</a> course.
          Finally, I took up University of Helsinki&apos;s
          <a className='font-semibold' href='https://fullstackopen.com/en/' target='_blank' rel='noopener noreferrer'> course on modern web development </a>
          where I learned my current skills in JavaScript technologies.
        </p>
      </div>
    </section>
  )
}

export default About