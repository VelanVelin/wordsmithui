import React from 'react'
import PropTypes from 'prop-types'


const Sentence = ({ onClick, selected, text }) => (
    <li
      onClick={onClick}>
      {text}
    </li>
  )
  
  Sentence.propTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    reversed: PropTypes.string
  }
  
  export default Sentence