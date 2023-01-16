import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

import Title from 'components/shared/Title'

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const video = gsap.utils.selector('.hero__video')('video')
    gsap.to([video], {
      y: -50,

      ease: 'ease.out',
      scrollTrigger: {
        trigger: video,
        start: 'center center',
        end: '+=500px',
        toggleActions: 'play none none reverse',
        scrub: 1
      }
    })
  }, [])

  return (
    <div className='hero'>
      <div className='hero__title'>
        <Title text1='Neos' text2=' ai' cls='uppercase' />
        <p className=''>
          The artificial intelligence tool that combines music and data analysis through tech.
        </p>
      </div>
      <div className='hero__video'>
        <video src='/assets/sbg.mp4' autoPlay playsInline muted loop controls={false}></video>
      </div>
    </div>
  )
}

export default Hero
