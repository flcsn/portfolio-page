import React from 'react'

const ProjectItem = ({ title, description, languages, demoLink, codeLink }) => {
  console.log(languages)
  return (
    <div name='project-box' className='flex-shrink-0 flex flex-col gap-3 p-3 h-96 w-60 bg-violet-100 border border-black rounded'>
      <div name='project-image' className='w-full h-32 bg-gray-400 border rounded'>

      </div>
      <div name='project-text' className='flex flex-col gap-1 flex-grow text-center'>
        <h3 className='text-lg font-semibold tracking-tight'>
          {title}
        </h3>
        <p className='text-sm font-light'>
          {description}
        </p>
      </div>
      <div name='dev-icons' className='flex gap-3 justify-center'>
        { languages.node && <img className='w-9 h-9' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' /> }
        { languages.react && <img className='w-9 h-9' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' /> }
        { languages.express && <img className='w-9 h-9' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg' /> }
        { languages.mongo && <img className='w-9 h-9' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' /> }
      </div>
      <div name='links' className='flex flex-col text-center text-slate-200 gap-1'>
        <div className='w-full p-1 bg-blue-600 font-semibold hover:bg-blue-700'>
          <a href={demoLink} target='_blank' rel='noopener noreferrer'>Live Demo</a>
        </div>
        <div className='w-full p-1 bg-slate-800 font-light tracking-wide text-slate-200 hover:bg-slate-900'>
          <a href={codeLink} target='_blank' rel='noopener noreferrer'>Link to Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem