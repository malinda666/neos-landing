import { FC, useEffect, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'

import { useUI } from 'ctx/UIContext'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  const ui = useUI()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical', // vertical, horizontal
      gestureDirection: 'vertical', // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    //get scroll value
    lenis.on('scroll', (values: any) => {
      if (values) {
        ui.updateScroll(values.scroll)
      }
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='relative w-full mx-auto'>
      <div className='layout-bg' />
      <div className='layout'>{children}</div>
      <footer className='fixed z-[-2] inset-0 flex flex-col items-center justify-end bg-gray-200 text-black'>
        <div className=''>Copyright © NEOS-AI / EMUQ tech - 2020. All Rights Reserved</div>
        <div className=''>About | FAQ | Login | Sign up</div>
      </footer>
    </div>
  )
}

export default Layout
