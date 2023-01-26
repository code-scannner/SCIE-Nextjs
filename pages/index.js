import Head from 'next/head'
import About from '../components/main/About'
import AboutMessage from '../components/main/AboutMessage'
import Contact from '../components/main/Contact/Contact'
import Hero from '../components/main/Hero'
import Sponsors from '../components/main/Sponsors/Sponsors'
import Testimonials from '../components/main/Testimonials/Testimonials'
import Divider from '../components/special/Divider'
import Gallery from '../components/main/Gallery/Gallery'
import StickySocials from '../components/main/Contact/StickySocials'

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
      <StickySocials/>
      <About />
      <Divider />
      <AboutMessage />
      <Divider />
      <Gallery />
      <Divider />
      <Testimonials />
      <Divider marginBottom={0} />
      <Sponsors />
      <Divider marginBottom={0} />
      <Contact heading={true} />
      <Divider />
    </>
  )
}
