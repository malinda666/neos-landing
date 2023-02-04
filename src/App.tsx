import Layout from 'components/layout'
import Section from 'components/shared/Section'

import Hero from 'components/views/Hero'
import Whatis from 'components/views/Whatis'
import Meet from 'components/views/Meet'

const App = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Section cls='light pt-[10vw]'>
        <Whatis />
      </Section>
      <Section>
        <div className='howitworks__wrapper'>
          <div className='section__title'>How does it works</div>
          <div className='howitworks__inner'>
            <p className='howitworks__inner--content'>
              After the compilations are created by our system, all albums shall be submitted
              automatically for digital distribution (streaming/downloads).
            </p>
            <img src='/assets/process.png' alt='process' />
            <p className='howitworks__inner--content'>
              We proudly have an outreach of over 30+ music marketplaces worldwide including
              Spotify, Apple Music, Amazon Music, YouTube and much more.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <Meet />
      </Section>
      {/* <Section>
        <div className=''>Contact</div>
      </Section> */}
    </Layout>
  )
}

export default App
