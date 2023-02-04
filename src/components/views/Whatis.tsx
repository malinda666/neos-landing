import { FC, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import SectionTitle from 'components/shared/SectionTitle'

const Whatis: FC = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const paras = gsap.utils.selector('.whatis__inner')('p')

    gsap.to(paras, {
      duration: 0.75,
      y: '0%',
      opacity: 1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.35,
        from: 'start'
      },
      delay: 0.5,
      scrollTrigger: {
        trigger: paras,
        start: 'center 80%'
        // end: '+=500px',
        // toggleActions: 'play none none reverse'
      }
    })
  }, [])

  useEffect(() => {
    const leftSection = document.querySelector('.whatis__inner--left .whatis__inner--left-content')
    const rightSection = document.querySelector('.whatis__inner--right')
    if (!rightSection?.getBoundingClientRect()) return
    if (!leftSection?.getBoundingClientRect()) return

    const rightHeight = rightSection.getBoundingClientRect().height
    const leftHeight = leftSection.getBoundingClientRect().height
    const heightDiff = rightHeight - leftHeight
    // const rightTop = rightSection.getBoundingClientRect().top - window.innerHeight

    const start = `top top+=${(window.innerHeight - leftHeight) / 2}`
    // const end = `bottom top+=${(window.innerHeight - leftHeight) / 2}`
    const end = `bottom+=${heightDiff} bottom-=${(window.innerHeight - leftHeight) / 2}`

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftSection,
        start: start,
        end: end,
        pin: true,
        scrub: true,
        pinType: 'fixed',
        markers: false
      }
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className='whatis__wrapper'>
      <div className='whatis__inner'>
        <div className='whatis__inner--left'>
          <div className='whatis__inner--left-content'>
            <SectionTitle text='What is neos ai?' align='start' />
            <p className=''>
              NEOS-AI is an artificial intelligence tool developed to scan and analyze information
              received into a database that assembles all the metadata with its corresponding
              assets.
            </p>
            <p className=''>
              Which essentially was designed to replace human tasks such as sorting, organizing and
              structuring music libraries for distribution with maximum accuracy and efficiency.
            </p>
            <p className=''>
              Besides data indexing, NEOS-AI is capable of creating curated albums in a split of a
              second. The tool is extremely customizable and can generate albums based on genre,
              mood, artist, tempo and much more.Utilizing user behavior analytics to determine which
              tracks to include on each release, our system assigns the best choice for commercial
              success in music distribution
            </p>
          </div>
        </div>
        <div className='whatis__inner--right'>
          <div className='whatis__inner--right-image'>
            <img src='/assets/whatisneos-bg.avif' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whatis
