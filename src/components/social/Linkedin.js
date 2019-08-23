import React, { useState } from "react"
import { motion } from "framer-motion"

const LinkedIn = () => {
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
        href="https://www.linkedin.com/in/kalm42/"
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
            fill={isHovered ? "#007ab9" : "var(--lightaccent)"}
          />
          <path
            d="M90 61v23H76V62c0-5-2-9-7-9-3 0-5 3-6 5l-1 3v23H49V43h13v6c2-3 5-7 12-7 9 0 16 6 16 19zM35 24c-5 0-8 3-8 7s3 7 7 7h1c4 0 7-3 7-7s-3-7-7-7zm-7 60h13V43H28v41z"
            fill={isHovered ? "#f1f2f2" : "var(--primary)"}
          />
        </svg>
      </a>
    </motion.div>
  )
}

export default LinkedIn
