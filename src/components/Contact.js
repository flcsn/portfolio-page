import React from 'react'

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const info = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value
    }
    console.log('submitted the following information:', info)
  }

  return (
    <section className='flex bg-slate-900 text-slate-100 min-w-screen min-h-screen'>
      <div className='flex flex-col h-auto w-72 gap-3 m-auto p-3 border border-slate-100 rounded'>
        <h2 className='text-xl mx-auto mb-3 font-semibold'>
          Contact Me!
        </h2>
        <form className='flex flex-col gap-3 w-full h-full justify-between' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-1'>
            <label>Your Name</label>
            <input
              className='w-full bg-gray-300 text-blue-900 p-2 text-sm'
              name='name'
              type='text'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Email Address</label>
            <input
              className='w-full bg-gray-300 text-blue-900 p-2 text-sm'
              name='email'
              type='email'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Subject</label>
            <input
              className='w-full bg-gray-300  text-blue-900 p-2 text-sm'
              name='subject'
              type='text'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label>Message</label>
            <textarea
              className='w-full bg-gray-300 text-blue-900 p-2 text-sm'
              name='message'
              defaultValue=''
            />
          </div>
          <button
            className='w-full py-2 bg-blue-600 text-slate-100 font-semibold hover:bg-blue-700'
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