import Layout from 'components/layout'
import Section from 'components/shared/Section'

import Hero from 'components/views/Hero'

const App = () => {
  return (
    <Layout>
      <Section>
        <Hero />
      </Section>
      <Section>
        <div className=''>What is neos ai</div>
        <div className=''>
          <p className=''>
            NEOS-AI is an artificial intelligence tool developed to scan and analyze information
            received into a database that assembles all the metadata with its corresponding assets.
            Which essentially was designed to replace human tasks such as sorting, organizing and
            structuring music libraries for distribution with maximum accuracy and efficiency.
          </p>
          <p className=''>
            Besides data indexing, NEOS-AI is capable of creating curated albums in a split of a
            second. The tool is extremely customizable and can generate albums based on genre, mood,
            artist, tempo and much more. Utilizing user behavior analytics to determine which tracks
            to include on each release, our system assigns the best choice for commercial success in
            music distribution
          </p>
        </div>
      </Section>
      <Section>
        <div className=''>How does it works</div>
        <div className=''>
          <p className=''>
            After the compilations are created by our system, all albums shall be submitted
            automatically for digital distribution (streaming/downloads).
          </p>
          <img src='/assets/process.png' alt='process' />
          <p className=''>
            We proudly have an outreach of over 30+ music marketplaces worldwide including Spotify,
            Apple Music, Amazon Music, YouTube and much more.
          </p>
        </div>
      </Section>
      <Section>
        <div className=''>Meet neos ai</div>
        <div className=''>
          <video src='/assets/sbg.mp4' autoPlay playsInline muted loop controls={false}></video>
        </div>
      </Section>
      {/* <Section>
        <div className=''>Contact</div>
      </Section> */}
    </Layout>
  )
}

export default App
