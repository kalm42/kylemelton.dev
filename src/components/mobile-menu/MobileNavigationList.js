/* eslint-disable react/no-array-index-key */
import React, { useContext } from "react"
import { motion } from "framer-motion"
import MenuItem from "./MenuItem"
import { MenuContext } from "./MenuContext"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const MenuItems = [
  { url: "#aboutme", title: "About Me" },
  { url: "#contactme", title: "Contact Me" },
  { url: "#resume", title: "Resume" },
  { url: "#skills", title: "Skills" },
  { url: "#projects", title: "Projects" },
]

const MobileNavigationList = () => {
  const ctx = useContext(MenuContext)
  return (
    <motion.ul
      variants={variants}
      className={
        ctx.isMenuOpen ? "mobile-menu__ul--open" : "mobile-menu__ul--close"
      }
    >
      {MenuItems.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </motion.ul>
  )
}

MobileNavigationList.propTypes = {}

export default MobileNavigationList
