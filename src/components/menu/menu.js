/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useIntersect } from "../../hooks/useIntersect"
import MenuItem from "./MenuItem"

import "./menu.scss"

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

  li.active {
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

const Menu = ({ threshold, activeSection }) => {
  const [isMenuFixed, setIsMenuFixed] = useState(false)
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

  const MenuItems = [
    { id: "aboutme", text: "About Me", activeSection },
    { id: "contactme", text: "Contact Me", activeSection },
    { id: "resume", text: "Resume", activeSection },
    { id: "skills", text: "Skills", activeSection },
    { id: "projects", text: "Projects", activeSection },
  ]

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
      <div className="menu__nav">
        <Nav fixed={isMenuFixed}>
          <ul>
            {MenuItems.map((item, index) => (
              <MenuItem data={item} key={index} />
            ))}
          </ul>
        </Nav>
      </div>
    </>
  )
}

Menu.propTypes = {
  threshold: PropTypes.arrayOf(PropTypes.number).isRequired,
  activeSection: PropTypes.string.isRequired,
}

export default Menu
