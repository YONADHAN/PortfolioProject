const About = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Text Content */}
          <div className='lg:w-1/2 space-y-6'>
            <div>
              <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
                About Me
              </h1>
              <div className='w-20 h-1 bg-blue-500 mb-6'></div>
            </div>

            <p className='text-lg text-gray-600 leading-relaxed'>
              Hi! My name is{' '}
              <span className='font-semibold text-blue-600'>Yonadhan</span> and
              I am a passionate full-stack developer with expertise in the MERN
              stack. I love creating web applications that are both
              user-friendly and efficient.
            </p>

            <p className='text-lg text-gray-600 leading-relaxed'>
              I have a deep passion for coding and continuously learning new
              technologies to enhance my skills. In my free time, I enjoy
              working on personal projects and contributing to open source
              initiatives.
            </p>

            <p className='text-lg text-gray-600 leading-relaxed'>
              I believe in continuous learning and strive to improve my craft
              every day. I'm always looking for new challenges and opportunities
              to grow as a developer.
            </p>

            {/* Quick Contact */}
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>
                Let's Connect
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm'>
                <div className='flex items-center space-x-2'>
                  <span className='text-blue-500'>📧</span>
                  <span className='hover:cursor-pointer'>
                    yonadhan.mm.dev@gmail.com
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-blue-500'>💼</span>
                  <span
                    className='hover:cursor-pointer'
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/yonadhanmm/',
                        '_blank'
                      )
                    }
                  >
                    linkedin.com/in/yonadhanmm
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-blue-500'>🐙</span>
                  <span
                    className='hover:cursor-pointer'
                    onClick={() => window.open('https://github.com/YONADHAN')}
                  >
                    github.com/yonadhan
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='text-blue-500'>🌐</span>
                  <span>yonadhan.online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className='lg:w-1/2 flex justify-center'>
            <div className='relative'>
              <div className='w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full absolute -top-4 -left-4'></div>
              <img
                src='/images/Yonadhan/Yonadhan Profile Photo.jpeg'
                alt='Yonadhan MM - Full Stack Developer'
                className='w-80 h-80 rounded-full object-cover border-8 border-white shadow-xl relative z-10'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
