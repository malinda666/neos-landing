import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const video = gsap.utils.selector('.hero__video')('video')
    const title = document.querySelector('.hero__title')
    const titles = gsap.utils.selector(title)('span:not(.spacer)')
    const spacers = gsap.utils.selector(title)('.spacer')
    const scroller = gsap.utils.selector('.hero__scroller')('span')

    gsap
      .timeline({ delay: 0.25 })
      .to(
        titles,
        {
          duration: 1.25,
          y: '0%',
          ease: 'power3.out',
          stagger: {
            amount: 0.35,
            from: 'start'
          }
        },
        0
      )
      .to(
        spacers,
        {
          duration: 1.25,
          opacity: 1,
          scaleX: 1,
          ease: 'power3.out',
          stagger: {
            amount: 0.35,
            from: 'start'
          }
        },
        '-=1'
      )
      .to(
        scroller,
        {
          duration: 1.25,
          y: '0%',

          ease: 'power3.out'
        },
        '-=1.8'
      )

    // gsap.to([video], {
    //   y: -50,

    //   ease: 'ease.out',
    //   scrollTrigger: {
    //     trigger: video,
    //     start: 'center center',
    //     end: '+=500px',
    //     toggleActions: 'play none none reverse',
    //     scrub: 1
    //   }
    // })
  }, [])

  return (
    <div className='hero'>
      <h1 className='hero__title'>
        <div className='hero__title--line'>
          <span>Combining</span>
          <span className='spacer'></span>
        </div>
        <div className='hero__title--line'>
          <span className=''>Music</span>
          <span> & </span>
          <span>Data analysis</span>
        </div>
        <div className='hero__title--line'>
          <span className='spacer'></span>
          <span className=''>Through tech.</span>
        </div>
      </h1>

      <div className='hero__video'>
        <video src='/assets/sbg.mp4' autoPlay playsInline muted loop controls={false}></video>
      </div>
      <div className='hero__scroller'>
        <span>Scroll to explore</span>
      </div>
    </div>
  )
}

export default Hero
