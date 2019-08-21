import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

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
  }

  a {
    padding: 40px 0;
    color: var(--lightshade);
    text-decoration: none;
    display: block;

    &:hover {
      color: var(--primary);
    }
  }
`

const Menu = ({active}) => {
  const [isMenuFixed, setIsMenuFixed] = useState(false)
  const menu = useRef(null)

  const watch = entries => {
    const { bottom } = entries[0].boundingClientRect
    if (!isMenuFixed && bottom <= 40) {
      setIsMenuFixed(true)
    }
    if (isMenuFixed && bottom >= 40) {
      setIsMenuFixed(false)
    }
  }

  const observer = new IntersectionObserver(watch, {
    threshold: new Array(101)
      .fill(0)
      .map((v, i) => Number((i * 0.01).toFixed(2))),
  })

  useEffect(() => {
    observer.observe(menu.current)
  })

  return (
    <>
      <div className="menu-indicator" ref={menu}>
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
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#aboutme">About Me</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#contactme">Contact Me</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#resume">Resume</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#skills">Skills</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a href="#projects">Projects</a>
          </motion.li>
        </ul>
      </Nav>
    </>
  )
}

export default Menu
