const Resume = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Download My Resume
          </h1>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Get a comprehensive overview of my skills, experience, and
            qualifications in a downloadable format.
          </p>
        </div>

        <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
          <div className='text-center mb-8'>
            <div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <span className='text-4xl'>📄</span>
            </div>

            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
              Professional Resume
            </h2>
            <p className='text-gray-600 mb-8'>
              Click the button below to download my complete resume with
              detailed information about my experience, projects, and technical
              skills.
            </p>

            <a
              href='/resume.pdf'
              download='Yonadhan_M.M._Resume.pdf'
              className='inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <span className='mr-3 text-xl'>⬇️</span>
              Download Resume
            </a>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>✅</span>
              </div>
              <h3 className='font-semibold text-gray-800 mb-2'>Updated</h3>
              <p className='text-sm text-gray-600'>
                Always current with latest projects and skills
              </p>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>📊</span>
              </div>
              <h3 className='font-semibold text-gray-800 mb-2'>Detailed</h3>
              <p className='text-sm text-gray-600'>
                Comprehensive overview of experience and skills
              </p>
            </div>

            <div className='text-center p-6 bg-gray-50 rounded-xl'>
              <div className='w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎯</span>
              </div>
              <h3 className='font-semibold text-gray-800 mb-2'>Professional</h3>
              <p className='text-sm text-gray-600'>
                Formatted for ATS and recruiter-friendly
              </p>
            </div>
          </div>

          <div className='mt-12 p-6 bg-blue-50 rounded-xl'>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              What's Included:
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>Professional Summary</span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>Technical Skills</span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>Project Portfolio</span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>
                  Education & Certifications
                </span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>Work Experience</span>
              </div>
              <div className='flex items-center'>
                <span className='text-blue-500 mr-2'>•</span>
                <span className='text-gray-700'>Contact Information</span>
              </div>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <p className='text-gray-600 mb-4'>
              Feel free to reach out if you have any questions or need further
              information!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='#contact'
                className='px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300'
              >
                Contact Me
              </a>
              <a
                href='mailto:yonadhanmm@gmail.com'
                className='px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300'
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
