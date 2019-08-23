import React, { useState } from "react"
import { motion } from "framer-motion"

const Facebook = () => {
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
        href="https://www.facebook.com/kalm42"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 409 409"
        >
          <path
            d="M354 0H55C25 0 0 25 0 55v299c0 30 25 55 55 55h147l1-146h-38c-5 0-9-4-9-9v-47c0-5 4-9 8-9h38v-46c0-53 33-81 80-81h38c5 0 9 4 9 9v39c0 5-4 9-9 9h-23c-26 0-31 12-31 30v40h56c6 0 10 4 9 10l-5 47c-1 4-5 8-9 8h-51v146h88c30 0 55-25 55-55V55c0-30-25-55-55-55z"
            fill={isHovered ? "#475993" : "var(--lightaccent)"}
          />
        </svg>
      </a>
    </motion.div>
  )
}

export default Facebook
