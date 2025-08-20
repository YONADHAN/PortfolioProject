const Projects = () => {
  const featuredProject = {
    title: 'OceanOfLaptop',
    description:
      'OceanOfLaptop is a full-stack e-commerce application that allows users to browse and purchase laptops. It features a user-friendly interface, secure payment processing, and an admin panel for managing products and orders.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'www.oceanoflaptops.shop',
      github: 'github.com/YONADHAN/ocean-of-laptops',
      demo: 'www.oceanoflaptops.com/demo',
      video: 'www.youtube.com/watch?v=oceanoflaptop',
    },
  }

  const otherProjects = [
    {
      title: 'Spotify Clone Website',
      subtitle: 'Using Microservices',
      description:
        'A music streaming platform built with microservices architecture',
      technologies: ['React', 'Node.js', 'Docker', 'MongoDB'],
    },
    {
      title: 'Video Chat Application',
      subtitle: 'Using WebRTC',
      description: 'Real-time video communication app with screen sharing',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    },
    {
      title: 'Real-time Chat App',
      subtitle: 'Using Microservices',
      description: 'Scalable messaging platform with real-time features',
      technologies: ['React', 'Socket.io', 'Redis', 'MongoDB'],
    },
    {
      title: 'Canva Clone',
      subtitle: 'Using Microservices',
      description: 'Design tool with collaborative editing capabilities',
      technologies: ['React', 'Canvas API', 'Node.js', 'PostgreSQL'],
    },
  ]

  const staticProjects = [
    {
      title: 'Uber',
      image: '../images/projects/uber.png',
      subtitle: 'Using HTML and CSS',
      description: 'A beautiful clone of uber landing page',
      technologies: ['HTML', 'CSS'],
      link: 'https://yonadhan.github.io/Uber.com/',
    },
    {
      title: 'Blinkit Clone',
      image: '../images/projects/blinkit.png',
      subtitle: 'Using HTML and CSS',
      description: 'A beautiful landing page of blinkit website',
      technologies: ['HTML', 'CSS'],
      link: 'https://yonadhan.github.io/Clone-Blinkit-Website/',
    },
    {
      title: 'Space Website',
      image: '../images/projects/space.png',
      subtitle: 'Using ReactJS',
      description: 'A beautiful landing page of Space website',
      technologies: ['React', 'Tailwind'],
      link: 'https://yonadhan.github.io/spacewebsite/',
    },
    {
      title: 'Swiggy Clone',
      image: '../images/projects/swiggy.png',
      subtitle: 'Using HTML and CSS',
      description: 'A beautiful landing page of Swiggy website',
      technologies: ['HTML', 'CSS'],
      link: 'https://yonadhan.github.io/SwiggyWebsiteClone/',
    },
    {
      title: 'Coffee Website',
      image: '../images/projects/coffee.png',
      subtitle: 'Using AOS animation',
      description: 'A beautiful coffee shop landing page',
      technologies: ['Javascript', 'HTML', 'CSS'],
      link: 'https://yonadhan.github.io/coffee_website/',
    },
  ]

  return (
    <div className='w-full min-h-screen bg-white py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
            My Projects
          </h1>
          <div className='w-20 h-1 bg-blue-500 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development
          </p>
        </div>
        {/* Featured Project */}
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16 shadow-lg'>
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='lg:w-2/3'>
              <div className='flex items-center mb-4'>
                <span className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3'>
                  Featured Project
                </span>
                <h2 className='text-2xl lg:text-3xl font-bold text-gray-800'>
                  {featuredProject.title}
                </h2>
              </div>

              <p className='text-gray-600 mb-6 leading-relaxed'>
                {featuredProject.description}
              </p>

              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-gray-800 mb-3'>
                  Technologies Used
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {featuredProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <a
                  onClick={() =>
                    window.open(`https://${featuredProject.links.live}`)
                  }
                  // href={`https://${featuredProject.links.live}`}
                  className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors'
                >
                  <span>🌐</span>
                  <span>Live Demo</span>
                </a>
                <a
                  onClick={() =>
                    window.open(`https://${featuredProject.links.github}`)
                  }
                  className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors hover:cursor-pointer'
                >
                  <span>🐙</span>
                  <span>GitHub</span>
                </a>
                {/* <a
                  href={`https://${featuredProject.links.video}`}
                  className='flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors'
                >
                  <span>📹</span>
                  <span>Video Demo</span>
                </a> */}
              </div>
            </div>

            <div className='lg:w-1/3'>
              <div className='bg-white rounded-xl p-4 shadow-md h-64 flex items-center justify-center '>
                <img
                  src='/images/projects/oceanoflaptopsimage.jpg?height=200&width=300'
                  alt='OceanOfLaptop Project Screenshot'
                  className='rounded-lg max-w-full max-h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Other Projects Grid
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
            >
              <div className='h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                <img
                  src={`/placeholder.svg?height=200&width=350&query=${project.title.toLowerCase()} project screenshot`}
                  alt={`${project.title} Screenshot`}
                  className='max-w-full max-h-full object-cover'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-blue-600 font-medium mb-3'>
                  {project.subtitle}
                </p>
                <p className='text-gray-600 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <h1 className='text-3xl text-center mb-5 '>Static Websites</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {staticProjects.map((project, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'
            >
              <div className='h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                <img
                  src={`/${project.image ? project.image : ''}`}
                  alt={`${project.title} Screenshot`}
                  className='max-w-full max-h-full object-cover'
                />
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-blue-600 font-medium mb-3'>
                  {project.subtitle}
                </p>

                <p className='text-gray-600 mb-4'>{project.description}</p>
                <p className='text-blue-600 italic mb-3 cursor-pointer'>
                  {project.link ? (
                    <p onClick={() => window.open(project.link)}>
                      {project.title} link
                    </p>
                  ) : (
                    ''
                  )}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-700'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
