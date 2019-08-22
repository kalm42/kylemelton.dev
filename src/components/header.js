import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import Hamburger from "./mobile-menu/Hamburger"
import Navigation from "./mobile-menu/Navigation"
import MobileNavigation from "./mobile-menu/MobileNavigation"
import { MenuContext, MenuProvider } from "./mobile-menu/MenuContext"
import "./mobile-menu/mobile-menu.scss"

const MobileHeader = styled.header`
  background: var(--darkshade);
  height: 60px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  z-index: 2;
`

const Title = styled.h1`
  margin: 0;
  padding-left: 20px;
  font-size: var(--font-size-2);
  font-weight: 300;

  a {
    text-decoration: none;
    color: var(--primary);
  }
`

const HamburgerButton = () => {
  const ctx = useContext(MenuContext)
  return <Hamburger ctx={ctx} open={ctx.isMenuOpen ? "open" : "closed"} />
}

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

const Header = ({ siteTitle }) => {
  return (
    <MenuProvider>
      <MobileHeader className="mobile-header">
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        <MobileNavigation>
          <motion.div className="mobile-menu" variants={menu} />
          <Navigation />
          <HamburgerButton />
        </MobileNavigation>
      </MobileHeader>
    </MenuProvider>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
