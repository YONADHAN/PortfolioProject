'use client'

import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // Handle newsletter subscription
      console.log('Subscribed:', email)
      setIsSubscribed(true)
      setEmail('')

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yonadhan-mm-1b/',
      icon: '💼',
    },
    {
      name: 'GitHub',
      url: 'https://www.Github.com/Yonadhan',
      icon: '🐙',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yonadhan',
      icon: '🐦',
    },
    {
      name: 'Email',
      url: 'mailto:yonadhanmm@gmail.com',
      icon: '📧',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '#resume' },
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Section */}
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold mb-4 text-blue-400'>
              Yonadhan Mathew
            </h3>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Full-stack developer passionate about creating efficient and
              user-friendly web applications. Always learning and exploring new
              technologies to deliver exceptional digital experiences.
            </p>

            {/* Newsletter Subscription */}
            <div className='bg-gray-800 rounded-lg p-6'>
              <h4 className='text-lg font-semibold mb-3'>Stay Updated</h4>
              <p className='text-gray-400 text-sm mb-4'>
                Get notified about my latest projects and articles.
              </p>

              {isSubscribed ? (
                <div className='flex items-center text-green-400'>
                  <span className='mr-2'>✅</span>
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className='flex flex-col sm:flex-row gap-3'
                >
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    required
                    className='flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400'
                  />
                  <button
                    type='submit'
                    className='px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300'
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-300'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Connect With Me</h4>
            <div className='space-y-3'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300'
                >
                  <span className='mr-3 text-lg'>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-6xl mx-auto px-6 py-6'>
          <div className='flex flex-col sm:flex-row justify-between items-center'>
            <p className='text-gray-400 text-sm mb-4 sm:mb-0'>
              &copy; 2025 Yonadhan Mathew. All rights reserved.
            </p>

            <div className='flex items-center space-x-6'>
              <a
                href='#'
                className='text-gray-400 hover:text-white text-sm transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white text-sm transition-colors'
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
