const Education = () => {
  const educationData = [
    {
      institution: 'Packapeer Academy',
      degree: 'Web Development Bootcamp',
      year: '2025',
      type: 'Bootcamp',
      icon: '💻',
    },
    {
      institution: 'TKM College Of Engineering Kollam',
      degree:
        'Bachelor of Technology in Electronics and Communication Engineering',
      university: 'Dr. APJ Abdul Kalam Technical University',
      year: '2024',
      type: "Bachelor's Degree",
      icon: '🎓',
    },
    {
      institution: 'SBHSS Changanacherry',
      degree: 'Higher Secondary Education',
      university: 'Board Of Higher Secondary Education',
      year: '2019',
      type: 'Higher Secondary',
      icon: '📚',
    },
    {
      institution: 'SSL',
      degree: 'Secondary School Leaving Certificate',
      university: 'Board of Public Examinations',
      year: '2017',
      type: 'Secondary Education',
      icon: '🏫',
    },
  ]

  return (
    <div className='w-full min-h-screen bg-white py-20 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Education
          </h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            My educational journey that shaped my technical foundation and
            problem-solving skills
          </p>
        </div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200'></div>

          <div className='space-y-12'>
            {educationData.map((edu, index) => (
              <div key={index} className='relative flex items-start'>
                {/* Timeline dot */}
                <div className='absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg'></div>

                {/* Content */}
                <div className='ml-16 bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full'>
                  <div className='flex items-start justify-between flex-wrap gap-4'>
                    <div className='flex-1'>
                      <div className='flex items-center mb-2'>
                        <span className='text-2xl mr-3'>{edu.icon}</span>
                        <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                          {edu.type}
                        </span>
                      </div>

                      <h3 className='text-xl font-bold text-gray-800 mb-2'>
                        {edu.degree}
                      </h3>

                      <p className='text-lg font-semibold text-blue-600 mb-1'>
                        {edu.institution}
                      </p>

                      {edu.university && (
                        <p className='text-gray-600 mb-2'>{edu.university}</p>
                      )}
                    </div>

                    <div className='text-right'>
                      <span className='bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold'>
                        {edu.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className='mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Continuous Learning
            </h3>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Beyond formal education, I'm committed to continuous learning
              through online courses, workshops, and hands-on projects to stay
              updated with the latest technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
