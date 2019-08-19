import React, { useContext, useRef } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { MenuContext } from "./MenuContext"

const MobileNavigation = ({ children }) => {
  const ctx = useContext(MenuContext)
  const containerRef = useRef(null)
  return (
    <motion.nav
      initial={false}
      animate={ctx.isMenuOpen ? "open" : "closed"}
      ref={containerRef}
      style={{ height: "60px" }}
    >
      {children}
    </motion.nav>
  )
}

MobileNavigation.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MobileNavigation
