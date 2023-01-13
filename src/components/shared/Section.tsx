import { FC, ReactNode } from 'react'

interface ISection {
  children: ReactNode
  cls?: string
}

const Section: FC<ISection> = ({ children, cls }) => {
  return (
    <div
      className={['relative w-full flex items-center justify-center min-h-screen', cls].join(' ')}>
      {children}
    </div>
  )
}

export default Section
