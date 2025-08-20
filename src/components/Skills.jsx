const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: ['JavaScript', 'Python'],
    },
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'RESTful APIs'],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: ['Git', 'AWS', 'Postman', 'Figma'],
    },
    {
      title: 'Architecture',
      icon: '🏗️',
      skills: ['MVC Architecture', 'Clean Architecture', 'RESTful APIs'],
    },
  ]

  const certifications = [
    'Certified JavaScript Developer',
    'Python Programming Certification',
    'React Development Certification',
  ]

  const softSkills = [
    'Communication',
    'Problem Solving',
    'Teamwork',
    'Adaptability',
    'Time Management',
  ]

  return (
    <div className='w-full min-h-screen bg-gray-50 py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            Skills & Expertise
          </h2>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Here are the technologies and skills I've mastered throughout my
            development journey
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6'
            >
              <div className='flex items-center mb-4'>
                <span className='text-2xl mr-3'>{category.icon}</span>
                <h3 className='text-xl font-bold text-gray-800'>
                  {category.title}
                </h3>
              </div>
              <div className='space-y-2'>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className='flex items-center'>
                    <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                    <span className='text-gray-700'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Certifications */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <div className='flex items-center mb-6'>
              <span className='text-2xl mr-3'>🏆</span>
              <h3 className='text-xl font-bold text-gray-800'>
                Certifications
              </h3>
            </div>
            <div className='space-y-3'>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className='flex items-center p-3 bg-blue-50 rounded-lg'
                >
                  <div className='w-2 h-2 bg-blue-500 rounded-full mr-3'></div>
                  <span className='text-gray-700'>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <div className='flex items-center mb-6'>
              <span className='text-2xl mr-3'>🤝</span>
              <h3 className='text-xl font-bold text-gray-800'>Soft Skills</h3>
            </div>
            <div className='grid grid-cols-1 gap-3'>
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className='flex items-center p-3 bg-green-50 rounded-lg'
                >
                  <div className='w-2 h-2 bg-green-500 rounded-full mr-3'></div>
                  <span className='text-gray-700'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Version Control */}
        <div className='mt-8 bg-white rounded-xl shadow-lg p-6'>
          <div className='flex items-center mb-4'>
            <span className='text-2xl mr-3'>📚</span>
            <h3 className='text-xl font-bold text-gray-800'>Version Control</h3>
          </div>
          <div className='flex items-center'>
            <div className='w-2 h-2 bg-purple-500 rounded-full mr-3'></div>
            <span className='text-gray-700'>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
