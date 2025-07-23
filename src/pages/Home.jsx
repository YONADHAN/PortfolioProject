import Navbar from '../components/Navbar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Resume from '../components/Resume'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='pt-16'>
        {' '}
        {/* Add padding-top to account for fixed navbar */}
        <section id='about'>
          <About />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='education'>
          <Education />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <section id='resume'>
          <Resume />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
