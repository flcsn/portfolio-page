import React from 'react'

import ProjectItem from './ProjectItem'
import TheGrandExchangeImg from '../assets/the-grand-exchange.png'
import WhatsForDinnerImg from '../assets/whats-for-dinner.png'
import YetAnotherTodoListImg from '../assets/yet-another-todo-list.png'

const Projects = () => {
  return (
    <section name='project-main-container' className='flex flex-col gap-7 p-3 bg-slate-200 min-w-screen min-h-screen justify-center'>
      <div name='project-text-container' className='flex flex-col gap-3 max-w-screen-md mx-auto text-center'>
        <h1 className='text-3xl text-blue-900 tracking-tight sm:text-5xl md:text-7xl'>
          Projects
        </h1>
        <p className='text-blue-900 text-sm sm:text-lg md:text-xl'>
          Displayed below are my most recent solo projects in reverse-order:
          A simple to-do list, a frontend application utilizing a 3rd-party API, and a fully functional e-commerce website.
          My GitHub profile can be found&nbsp;
          <a className='font-semibold hover:underline' href='https://www.github.com/flcsn' target='_blank' rel='noopener noreferrer'>
            here
          </a>.
        </p>
      </div>
      <div name='projects-container' className='flex gap-10 max-w-full mx-auto p-3 overflow-x-auto'>
        <ProjectItem
          title='The Grand Exchange'
          image={TheGrandExchangeImg}
          description='Buy and sell products with others in this e-commerce website.'
          languages={{ node: true, react: true, express: true, mongo: true }}
          demoLink='https://the-grand-exchange.vercel.app/'
          codeLink='https://www.github.com/flcsn/the-grand-exchange'
        />
        <ProjectItem
          title='What&apos;s for Dinner?'
          image={WhatsForDinnerImg}
          description='Look for meal suggestions based on selected ingredients and tags. Powered by the Tasty.co API.'
          languages={{ node: true, react: true }}
          demoLink='https://what-s-for-dinner.vercel.app/'
          codeLink='https://github.com/flcsn/whats-for-dinner'
        />
        <ProjectItem
          title='Yet Another To-Do List'
          image={YetAnotherTodoListImg}
          description='Yet another to-do list project that every aspiring web developer must create.'
          languages={{ node: true, react: true }}
          demoLink='https://yatdl.vercel.app/'
          codeLink='https://github.com/flcsn/yet-another-todo-list'
        />
      </div>
    </section>
  )
}

export default Projects