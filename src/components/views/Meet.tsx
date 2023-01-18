import { FC, useState } from 'react'

const Meet: FC = () => {
  const [isPlaying, setPlaying] = useState(false)

  const startPlaying = () => {
    setPlaying(true)
  }

  return (
    <div className='meet__wrapper'>
      <div className='section__title meet__title'>Meet neos ai</div>
      <div className='meet__video--wrapper'>
        <div className='meet__video--wrapper-controls'>
          <span>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='Play_1'>
                <path d='M6.562,21.94a2.5,2.5,0,0,1-2.5-2.5V4.56A2.5,2.5,0,0,1,7.978,2.5L18.855,9.939a2.5,2.5,0,0,1,0,4.12L7.977,21.5A2.5,2.5,0,0,1,6.562,21.94Zm0-18.884a1.494,1.494,0,0,0-.7.177,1.477,1.477,0,0,0-.8,1.327V19.439a1.5,1.5,0,0,0,2.35,1.235l10.877-7.44a1.5,1.5,0,0,0,0-2.471L7.413,3.326A1.491,1.491,0,0,0,6.564,3.056Z'></path>
              </g>
            </svg>
          </span>
          <div className='thumb'>
            <img src='/assets/video-thumb.jpg' alt='' />
          </div>
        </div>
        <video
          src='/assets/neos.mp4'
          autoPlay={false}
          playsInline
          muted={false}
          loop={false}
          controls={true}></video>
      </div>
    </div>
  )
}

export default Meet
