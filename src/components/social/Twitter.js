import React, { useState } from "react"
import { motion } from "framer-motion"

const Twitter = () => {
  const [isHovered, setHovered] = useState(false)
  return (
    <motion.div
      className="social"
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href="https://twitter.com/kalm42"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 112 112"
        >
          <circle
            cx="56"
            cy="56"
            r="56"
            fill={isHovered ? "#55acee" : "var(--lightaccent)"}
          />
          <path
            d="M90 40l-7 2c3-1 5-4 6-7l-9 3a13 13 0 0 0-23 12c-11 0-21-5-27-14a13 13 0 0 0 4 18l-6-1c0 6 4 12 10 13a13 13 0 0 1-6 0c2 6 7 9 13 10a27 27 0 0 1-20 5c6 4 13 6 21 6a38 38 0 0 0 38-40c2-2 5-4 6-7z"
            fill={isHovered ? "#f1f2f2" : "var(--primary)"}
          />
        </svg>
      </a>
    </motion.div>
  )
}

export default Twitter
