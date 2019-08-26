import React from 'react'
import PropTypes from 'prop-types'

import "./Star.scss"

const Star = ({ on }) => {
  return (
    <div className="star">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.94 47.94">
        <path fill={on ? "var(--primary)" : "var(--lightshade)"} d="M26.285 2.486l5.407 10.956c.376.762 1.103 1.29 1.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.5818 2.5818 0 0 0-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.5846 2.5846 0 0 0-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.5818 2.5818 0 0 0-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757c.841-.122 1.568-.65 1.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z" />
      </svg>
    </div>
  )
}

Star.propTypes = {
  on: PropTypes.bool.isRequired
}

export default Star
