import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}