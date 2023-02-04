import { FC, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

interface ISectionTitle {
  text: string
  align?: string
}

const SectionTitle: FC<ISectionTitle> = ({ text, align }) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const chars = gsap.utils.selector('.section__title')('span')

    gsap.to(chars, {
      y: '0%',
      ease: 'ease.out',
      stagger: {
        amount: 0.35,
        from: 'start'
      },
      scrollTrigger: {
        trigger: chars,
        start: 'center 80%',
        // end: '+=500px',
        toggleActions: 'play none none none'
      }
    })
  }, [])

  return (
    <div className={['section__title', align].join(' ')}>
      {text.split('').map((char, i) => (
        <span key={i}>{char}</span>
      ))}
    </div>
  )
}

export default SectionTitle
