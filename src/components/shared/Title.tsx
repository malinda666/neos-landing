import { FC } from 'react'

interface ITitle {
  text1: string
  text2?: string
  cls?: string
}

const Title: FC<ITitle> = ({ text1, text2, cls }) => {
  return (
    <h1 className={['title', cls].join(' ')}>
      {text1.split('').map((char, i) => (
        <span className='title__line--1' key={i}>
          {char}
        </span>
      ))}
      {text2
        ? text2.split('').map((char, i) => (
            <span className='title__line--2' key={i}>
              {char}
            </span>
          ))
        : null}
    </h1>
  )
}

export default Title
