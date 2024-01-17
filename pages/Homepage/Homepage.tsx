import Image from 'next/image'
// import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import Hero from '../../components/Hero/index'
import Donate from '../../components/Donate/index'
import Values from '../../components/Values/index'


const Home = () =>  {
  return (
    <>
    {/* <Header /> */}

    <Hero />
    <Values />
    <Donate />
    
    <Footer />
    </>
  )
}

export default Home;