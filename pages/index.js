import Head from 'next/head'
import About from '../components/main/About'
import Contact from '../components/main/Contact/Contact'
import Hero from '../components/main/Hero'
import Sponsors from '../components/main/Sponsors/Sponsors'
import Testimonials from '../components/main/Testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>SCIE | NIT Delhi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="SCIE NIT Delhi,SCIE, NIT Delhi, Entrepreneureship cell, national institute of Technology Delhi, startup cell, delhi, college" />
        <meta name="description" content="SCIE NIT Delhi" />
      </Head>

      <Hero />
      <About />
      <Sponsors />
      <Testimonials />
      <Contact />
    </>
  )
}
