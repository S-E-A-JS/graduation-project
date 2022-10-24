import React, { useState, useEffect } from 'react'
import './timer.css'

import IconSelector from '../svgSelector'

const Timer = () => {
  const [ time, setTime ] = useState ( 0 )
  const [ timerOn, setTimerOn ] = useState ( false )

  useEffect ( () => {
    let interval = null
    if ( timerOn ) {
      interval = setInterval ( () => {
        setTime ( prevTime => prevTime + 10 )
      }, 10 )
    } else {
      clearInterval ( interval )
    }
    return () => {
      clearInterval ( interval )
    }
  }, [ timerOn ] )

  return (
    <div className='timer-block'>
      <div className='timer-block__container'>
        <div className='timer-block__text'>Таймер</div>
        <div className="timer-block__button_play">
          <button className='timer-block__button_icon'
            onClick={() => setTimerOn ( true )}>
            <IconSelector id='play'/>
          </button>
        </div>
        <div className="timer-block__button_pause">
          <button className='timer-block__button_icon'
            onClick={() => setTimerOn ( false )}>
            <IconSelector id='pause'/>
          </button>
        </div>
        <div className="timer-block__container_output">
          <div className='container_output__hours'>
            {( '0' + Math.floor ( time / 3600000 ) % 60 ).slice ( -2 )}
          </div><span>час.</span>
          <div className='container_output__minutes'>
            {( '0' + Math.floor ( time / 60000 ) % 60 ).slice ( -2 )}
          </div><span>мин.</span>
          <div className='container_output__seconds'>
            {( '0' + Math.floor ( time / 1000 ) % 60 ).slice ( -2 )}
          </div><span>сек.</span>
        </div>
      </div>
    </div>
  )
}

export default Timer