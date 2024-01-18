import Image from 'next/image'
// import Footer from '../../components/Footer/index'
import Hero from '../app/components/Hero/index'
import Donate from '../app/components/Donate/index'
import Values from '../app/components/Values/index'
import Stats from '../app/components/Stats/index'


// import Home from './Homepage/Homepage'


export default function Home() {
  return (
    <>
    <Hero />
    <Values />
    <Stats />
    <Donate />
    
    </>
  )
}