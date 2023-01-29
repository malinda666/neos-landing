import { FC } from 'react'

const Whatis: FC = () => {
  return (
    <div className='whatis__wrapper'>
      <div className='whatis__inner'>
        <div className='whatis__inner--left'>
          <div className='section__title'>What is neos ai?</div>
          <p className='whatis__inner--left-content'>
            NEOS-AI is an artificial intelligence tool developed to scan and analyze information
            received into a database that assembles all the metadata with its corresponding assets.
            Which essentially was designed to replace human tasks such as sorting, organizing and
            structuring music libraries for distribution with maximum accuracy and efficiency.
          </p>
          <p className='whatis__inner--left-content'>
            Besides data indexing, NEOS-AI is capable of creating curated albums in a split of a
            second. The tool is extremely customizable and can generate albums based on genre, mood,
            artist, tempo and much more. Utilizing user behavior analytics to determine which tracks
            to include on each release, our system assigns the best choice for commercial success in
            music distribution
          </p>
        </div>
        <div className='whatis__inner--right'>
          <div className='whatis__image'>
            <img src='/assets/whatisneos-bg.avif' alt='' className='absolute w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatis
