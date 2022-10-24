import React from 'react'
import PropTypes from 'prop-types'
import './svgSelector.css'

const IconSelector = ( { id } ) => {
  switch ( id ) {
  case 'play':
    return (
      <svg width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M31.1643 17.3571L0.271858 33.5426L0.559039 0.634867L31.1643 17.3571Z"
          fill="#F0F0F0"/>
      </svg>

    )
  case 'pause':
    return (
      <svg width="29"
        height="43"
        viewBox="0 0 29 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M4.33008 3.6781V38.6781"
          stroke="#F0F0F0"
          strokeWidth="7"
          strokeLinecap="round"/>
        <path d="M25 4V39"
          stroke="#F0F0F0"
          strokeWidth="7"
          strokeLinecap="round"/>
      </svg>

    )
  case 'edit':
    return (
      <svg width="33"
        height="36"
        viewBox="0 0 33 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M23.4022 1.31969L20.2792 4.72626L28.6673 13.8761L31.7902 10.4696C33.4033 8.70997 33.4033 5.85943 31.7902 4.09984L29.248 1.31969C27.6349 -0.439897 25.0217 -0.439897 23.4086 1.31969H23.4022ZM18.821 6.31693L3.78062 22.7304C3.10958 23.4624 2.6192 24.3703 2.3482 25.3627L0.0640761 33.8299C-0.0972322 34.4281 0.0511715 35.0686 0.451216 35.505C0.85126 35.9414 1.43842 36.1033 1.98042 35.9343L9.74257 33.4428C10.6524 33.1472 11.4847 32.6122 12.1557 31.8802L27.209 15.4668L18.821 6.31693Z"
          fill="#F0F0F0"/>
      </svg>

    )
  case 'delete':
    return (
      <svg width="33"
        height="36"
        viewBox="0 0 33 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M9.95893 1.24453L9.42857 2.25H2.35714C1.05335 2.25 0 3.25547 0 4.5C0 5.74453 1.05335 6.75 2.35714 6.75H30.6429C31.9467 6.75 33 5.74453 33 4.5C33 3.25547 31.9467 2.25 30.6429 2.25H23.5714L23.0411 1.24453C22.6433 0.478125 21.8257 0 20.9344 0H12.0656C11.1743 0 10.3567 0.478125 9.95893 1.24453ZM30.6429 9H2.35714L3.91875 32.8359C4.03661 34.6148 5.58348 36 7.4471 36H25.5529C27.4165 36 28.9634 34.6148 29.0812 32.8359L30.6429 9Z"
          fill="#F0F0F0"/>
      </svg>

    )
  }
}
IconSelector.propTypes = {
  id: PropTypes.string,
}

export default IconSelector