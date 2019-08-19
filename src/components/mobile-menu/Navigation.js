/* eslint-disable react/no-array-index-key */
import React from "react"
import { motion } from "framer-motion"
import MenuItem from "./MenuItem"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const MenuItems = [
  { url: "#about-me", title: "About Me" },
  { url: "#contact-me", title: "Contact Me" },
  { url: "#resume", title: "Resume" },
  { url: "#skills", title: "Skills" },
  { url: "#projects", title: "Projects" },
]

const Navigation = () => (
  <motion.ul variants={variants} className="mobile-menu--ul">
    {MenuItems.map((item, i) => (
      <MenuItem item={item} key={i} />
    ))}
  </motion.ul>
)

Navigation.propTypes = {}

export default Navigation
