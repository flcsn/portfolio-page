import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <section name='project-main-container' className='flex flex-col gap-5 p-3 bg-slate-200 min-w-screen min-h-screen justify-center'>
      <div name='project-text-container' className='flex flex-col gap-3 max-w-lg mx-auto text-center'>
        <h1 className='text-3xl text-blue-900 tracking-tight'>
          Projects
        </h1>
        <p className='text-blue-900 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          accumsannulla a diam efficitur cursus. Aliquam sit amet libero eu.
        </p>
      </div>
      <div name='projects-container' className='flex gap-10 max-w-full p-3 overflow-x-scroll'>
        <ProjectItem
          title='The Grand Exchange'
          description='Buy and sell things with others in this full stack application.'
          languages={{ node: true, react: true, express: true, mongo: true }}
          demoLink='https://the-grand-exchange.netlify.app/'
          codeLink='https://www.github.com/flcsn/the-grand-exchange'
        />
        <ProjectItem
          title='What&apos;s for Dinner?'
          description='Search for food suggestions with tags and ingredients powered by the Tasty.co API.'
          languages={{ node: true, react: true }}
          demoLink='https://what-s-for-dinner.netlify.app/'
          codeLink='https://github.com/flcsn/whats-for-dinner'
        />
        <ProjectItem
          title='Yet Another To-Do List'
          description='Yet another to-do list project that every aspiring web developer must create.'
          languages={{ node: true, react: true }}
          demoLink='https://yatdl.netlify.app/'
          codeLink='https://github.com/flcsn/yet-another-todo-list'
        />
      </div>
    </section>
  )
}

export default Projects