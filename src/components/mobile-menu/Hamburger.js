import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"

const Button = styled.button`
  background: none;
  border: none;
  position: fixed;
  top: 18px;
  right: 20px;
  z-index: 2;
`

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

const Hamburger = props => {
  const { ctx } = props
  return (
    <Button
      aria-pressed="false"
      aria-expanded="false"
      onClick={ctx.toggleMenu}
      onStateChange={state => ctx.stateChangeHandler(state)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23" fill="transparent">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 20 L 20 2.5" },
          }}
        />
        <Path
          d="M 2 11.25 L 20 11.25"
          variants={{
            closed: { opacity: 1.0 },
            open: { opacity: 0.0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 10 20 L 20 20" },
            open: { d: "M 3 2.5 L 20 20" },
          }}
        />
      </svg>
    </Button>
  )
}

Hamburger.propTypes = {
  ctx: PropTypes.shape({
    toggleMenu: PropTypes.func.isRequired,
    stateChangeHandler: PropTypes.func.isRequired,
  }).isRequired,
}

export default Hamburger
