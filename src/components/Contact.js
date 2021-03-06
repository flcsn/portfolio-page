import React from 'react'

const Contact = () => {
  return (
    <section className='flex px-3 bg-slate-900 text-slate-100 min-w-screen min-h-screen'>
      <div className='flex flex-col gap-5 max-w-xs m-auto p-3 sm:max-w-sm md:max-w-lg'>
        <div className='flex flex-col max-w-md gap-1 mx-auto text-center'>
          <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl'>
            Get in Touch!
          </h2>
          <p className='text-sm font-light sm:text-lg md:text-xl'>
            Questions? Suggestions? Leave a message and I will try to get back to you as soon as possible!
          </p>
        </div>
        <form className='flex flex-col w-full gap-3 justify-between' name='messages' method='POST' netlify>
          <input type="hidden" name="form-name" value="contact" /> { /* To assist Netlify bots */ }
          <div className='flex flex-col gap-1'>
            <label className='text-sm sm:text-lg md:text-xl'>Your Name</label>
            <input
              className='p-2 bg-gray-300 text-blue-900 text-sm sm:text-lg md:text-xl'
              name='name'
              type='text'
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm sm:text-lg md:text-xl'>Email Address</label>
            <input
              className='p-2 bg-gray-300 text-blue-900 text-sm sm:text-lg md:text-xl'
              name='email'
              type='email'
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm sm:text-lg md:text-xl'>Subject</label>
            <input
              className='p-2 bg-gray-300  text-blue-900 text-sm sm:text-lg md:text-xl'
              name='subject'
              type='text'
              required
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm sm:text-lg md:text-xl'>Message</label>
            <textarea
              className='h-40 p-2 bg-gray-300 text-blue-900 text-sm sm:text-lg md:text-xl'
              name='message'
              defaultValue=''
              required
            />
          </div>
          <button
            className='py-2 bg-blue-600 text-slate-100 font-semibold hover:bg-blue-700'
            type='submit'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact