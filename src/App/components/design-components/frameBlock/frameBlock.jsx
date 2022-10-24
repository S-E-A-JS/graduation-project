import React from 'react'
import './frameBlock.css'
import PropTypes from 'prop-types'

const FrameBlock = props => (
  <div className='frame-block'>
    {props.children}
  </div> )

FrameBlock.propTypes = {
  children: PropTypes.object,
}
export default FrameBlock