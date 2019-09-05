import React, { useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const GitHub = ({ href }) => {
  const [isHovered, setHovered] = useState(false)
  return (
    <motion.div
      className="social"
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.9 }}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 439 439"
        >
          <path
            d="M409 115a218 218 0 0 0-300-80 218 218 0 0 0-67 319c28 38 64 64 108 79 5 1 9 0 11-2 3-3 4-5 4-9a6590 6590 0 0 0 0-41l-7 2-16 1-20-2c-6-2-13-5-19-9-6-5-10-10-12-18l-3-6-9-15c-4-5-8-9-12-11l-2-1a21 21 0 0 1-7-7c0-2 0-3 2-4l8-1 6 1 14 7c5 4 10 8 14 15s9 13 15 17c7 4 13 7 19 7l16-2 13-4c2-13 7-23 14-30-11-1-20-2-29-5-9-2-18-6-27-11a77 77 0 0 1-38-49c-4-12-6-27-6-43 0-23 8-42 23-59-7-17-6-36 2-58 5-2 14 0 24 4a172 172 0 0 1 36 19 202 202 0 0 1 110 0l11-7c7-5 16-9 26-13s18-5 23-3c9 22 10 41 3 58 15 17 22 36 22 59 0 16-2 31-6 43-4 13-9 23-15 30-6 8-14 14-23 19s-18 9-27 11c-8 3-18 4-29 5 10 9 15 22 15 41v60c0 4 1 6 3 9 3 2 7 3 12 2 44-15 80-41 108-79 28-39 42-82 42-129 0-40-10-77-30-110z"
            fill={isHovered ? "#000" : "var(--lightaccent)"}
          />
        </svg>
      </a>
    </motion.div>
  )
}

GitHub.propTypes = {
  href: PropTypes.string,
}

GitHub.defaultProps = {
  href: "https://github.com/kalm42",
}

export default GitHub
