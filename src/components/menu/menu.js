import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useIntersect } from "../../hooks/useIntersect"

const Nav = styled.nav`
  width: 150px;
  position: ${props => (props.fixed ? "fixed" : "absolute")};
  right: 60px;
  top: ${props => (props.fixed ? "40px" : "calc(100vh)")};
  background: var(--darkaccent);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    justify-items: center;
  }

  li {
    font-size: var(--font-size-1);
    width: 100%;
    display: grid;
    justify-items: center;
  }

  li.activeItem {
    background: var(--primary);

    a {
      color: var(--darkaccent);

      &:hover {
        color: var(--darkshade);
      }
    }
  }

  a {
    padding: 40px 0;
    color: var(--primary);
    text-decoration: none;
    display: block;
    font-weight: 900;

    &:hover {
      color: var(--lightaccent);
    }
  }
`

const Menu = ({ threshold, scrollPosition }) => {
  // Handle a fixing and unfixing menu
  const [isMenuFixed, setIsMenuFixed] = useState(false)
  const [activeItem, setActiveItem] = useState("aboutme")

  const [ref, entry] = useIntersect({ threshold })

  useEffect(() => {
    if (!entry.target) return

    const { bottom } = entry.boundingClientRect
    if (!isMenuFixed && bottom <= 40) {
      setIsMenuFixed(true)
    }
    if (isMenuFixed && bottom >= 40) {
      setIsMenuFixed(false)
    }
  }, [entry])

  // Hanlde which menu item is active
  const sorted = scrollPosition.sort((a, b) => (a.ratio > b.ratio ? -1 : 1))

  useEffect(() => {
    setActiveItem(sorted[0].id)
  }, [sorted[0].id])

  return (
    <>
      <div className="menu-indicator" ref={ref}>
        <motion.div
          animate={{ y: 10 }}
          transition={{ flip: Infinity, duration: 0.5, ease: "easeInOut" }}
        >
          <svg width="285" height="285" viewBox="0 0 285 285">
            <path d="M136 168a9 9 0 0 0 13 0L282 35a9 9 0 0 0 0-13L268 7a9 9 0 0 0-13 0L142 120 30 7a9 9 0 0 0-13 0L3 22a9 9 0 0 0 0 13l133 133z" />
            <path d="M268 117a9 9 0 0 0-13 0L142 229 30 117a9 9 0 0 0-13 0L3 131a9 9 0 0 0 0 13l133 134a9 9 0 0 0 13 0l133-134a9 9 0 0 0 0-13l-14-14z" />
          </svg>
        </motion.div>
      </div>
      <Nav fixed={isMenuFixed}>
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={activeItem === "aboutme" ? "activeItem" : "inactive"}
          >
            <a href="#aboutme">About Me</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={activeItem === "contactme" ? "activeItem" : "inactive"}
          >
            <a href="#contactme">Contact Me</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={activeItem === "resume" ? "activeItem" : "inactive"}
          >
            <a href="#resume">Resume</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={activeItem === "skills" ? "activeItem" : "inactive"}
          >
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={activeItem === "projects" ? "activeItem" : "inactive"}
          >
            <a href="#projects">Projects</a>
          </motion.li>
        </ul>
      </Nav>
    </>
  )
}

Menu.propTypes = {
  scrollPosition: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      ratio: PropTypes.number,
    })
  ).isRequired,
}

export default Menu
