import { FC, ReactNode } from 'react'

interface ISection {
  children: ReactNode
  cls?: string
}

const Section: FC<ISection> = ({ children, cls }) => {
  return <section className={['section', cls].join(' ')}>{children}</section>
}

export default Section
