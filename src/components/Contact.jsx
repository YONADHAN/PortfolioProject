'use client'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // 🔑 replace with EmailJS Service ID
        import.meta.env.VITE_TEMPLATE_ID, // 🔑 replace with EmailJS Template ID
        formData,
        import.meta.env.VITE_PUBLIC_KEY // 🔑 replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!')
          setFormData({ name: '', email: '', subject: '', message: '' })
        },
        (error) => {
          console.error(error)
          setStatus('❌ Failed to send message. Try again later.')
        }
      )
  }

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'yonadhanmmdev@gmail.com',
      link: 'mailto:yonadhanmmdev@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/yonadhanmm',
      link: 'https://www.linkedin.com/in/yonadhanmm/',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/Yonadhan',
      link: 'https://www.github.com/Yonadhan',
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'yonadhan.online',
      link: 'https://yonadhan.online',
    },
  ]

  return (
    <div className='w-full min-h-screen bg-gray-50 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Get In Touch
          </h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Feel free to reach out to me via email or connect with me on social
            media! I'm always open to discussing new opportunities and
            collaborations.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='bg-white rounded-xl shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='Your Name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors'
                  placeholder='What is this about?'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none'
                  placeholder='Your message here...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                Send Message
              </button>
            </form>

            {status && (
              <p className='mt-4 text-center text-sm text-gray-700'>{status}</p>
            )}
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-white rounded-xl shadow-lg p-8'>
              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Contact Information
              </h3>

              <div className='space-y-4'>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group'
                  >
                    <span className='text-2xl mr-4'>{info.icon}</span>
                    <div>
                      <p className='font-semibold text-gray-800 group-hover:text-blue-600'>
                        {info.label}
                      </p>
                      <p className='text-gray-600 text-sm'>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise
            <div className='bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white'>
              <h3 className='text-xl font-bold mb-4'>
                Quick Response Guaranteed
              </h3>
              <p className='mb-4'>
                I typically respond to emails within 24 hours. For urgent
                matters, feel free to reach out via LinkedIn for faster
                communication.
              </p>
              <div className='flex items-center'>
                <span className='text-2xl mr-2'>⚡</span>
                <span className='font-semibold'>
                  Usually responds in a few hours
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
