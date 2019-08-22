import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Path from "./Path"
import { MenuContext } from "./MenuContext"

const Button = styled.button`
  background: none;
  border: none;
  position: fixed;
  top: 18px;
  right: 20px;
  z-index: 2;
`

const HamburgerButton = () => {
  const ctx = useContext(MenuContext)
  return <Hamburger ctx={ctx} open={ctx.isMenuOpen ? "open" : "closed"} />
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

export default HamburgerButton
