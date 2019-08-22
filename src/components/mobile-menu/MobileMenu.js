import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import HamburgerButton from "./Hamburger"
import MobileNavigationList from "./MobileNavigationList"
import MobileNavigation from "./MobileNavigation"
import { MenuProvider } from "./MenuContext"
import "./mobile-menu.scss"

const menu = {
  open: {
    clipPath: `circle(calc(130vw) at calc(100vw - 50px) 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(23px at calc(100vw - 39px) 29px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const MobileMenu = ({ siteTitle }) => {
  return (
    <MenuProvider>
      <header className="mobile-menu__header">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <MobileNavigation>
          <motion.div className="mobile-menu" variants={menu} />
          <MobileNavigationList />
          <HamburgerButton />
        </MobileNavigation>
      </header>
    </MenuProvider>
  )
}

MobileMenu.propTypes = {
  siteTitle: PropTypes.string,
}

MobileMenu.defaultProps = {
  siteTitle: ``,
}

export default MobileMenu
