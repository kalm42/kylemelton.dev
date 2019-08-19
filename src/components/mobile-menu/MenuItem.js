import React, { useContext } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { MenuContext } from "./MenuContext"

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 0,
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const MenuItem = ({ item }) => {
  const { url, title } = item
  const ctx = useContext(MenuContext)
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={
        ctx.isMenuOpen ? "mobile-menu--li--open" : "mobile-menu--li--closed"
      }
    >
      <div className="mobile-menu--item">
        <a href={url} onClick={ctx.toggleMenu}>
          {title}
        </a>
      </div>
    </motion.li>
  )
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default MenuItem
