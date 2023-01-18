import Layout from 'components/layout'
import Section from 'components/shared/Section'

import Hero from 'components/views/Hero'
import Meet from 'components/views/Meet'

const App = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Section cls='light'>
        <div className='whatis__wrapper'>
          <div className='section__title'>What is neos ai?</div>
          <div className='whatis__inner'>
            <p className='whatis__inner--content'>
              NEOS-AI is an artificial intelligence tool developed to scan and analyze information
              received into a database that assembles all the metadata with its corresponding
              assets. Which essentially was designed to replace human tasks such as sorting,
              organizing and structuring music libraries for distribution with maximum accuracy and
              efficiency.
            </p>
            <p className='whatis__inner--content'>
              Besides data indexing, NEOS-AI is capable of creating curated albums in a split of a
              second. The tool is extremely customizable and can generate albums based on genre,
              mood, artist, tempo and much more. Utilizing user behavior analytics to determine
              which tracks to include on each release, our system assigns the best choice for
              commercial success in music distribution
            </p>
          </div>
        </div>
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
