import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const Path = ({ variants, d, transition }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--primary)"
    strokeLinecap="round"
    variants={variants}
    transition={transition}
    d={d}
  />
)

Path.propTypes = {
  variants: PropTypes.shape({
    open: PropTypes.shape({
      d: PropTypes.string,
      opacity: PropTypes.number,
    }),
    closed: PropTypes.shape({
      d: PropTypes.string,
      opacity: PropTypes.number,
    }),
  }).isRequired,
  d: PropTypes.string,
  transition: PropTypes.shape({
    duration: PropTypes.number,
  }),
}

Path.defaultProps = {
  d: "",
  transition: { duration: 0.3 },
}

export default Path
