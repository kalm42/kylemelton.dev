import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const MenuItem = ({ data: { id, text, activeSection } }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={activeSection === id ? "active" : "inactive"}
    >
      <a href={`#${id}`}>{text}</a>
    </motion.li>
  )
}

MenuItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    activeSection: PropTypes.string,
  }).isRequired,
}

export default MenuItem
