import React from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../hooks/useIntersect"

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 })

const AboutMe = ({ threshold, updatePosition }) => {
  const [ref, entry] = useIntersect({
    threshold,
  })

  updatePosition("aboutme", entry.intersectionRatio)

  return (
    <div id="aboutme" ref={ref}>
      <h1>About Me - {format(entry.intersectionRatio)}</h1>
      <p>
        Californian native who has always liked web work. I started out studying
        to do graphic design but when I got the chance to design websites and
        fell in love with the fluid ever changing nature of a website. I changed
        my learning path and started learning how to make websites. I have been
        a one man show many times so I have enjoyed learning backend work as
        well. I’m relatively new to this and love working in teams so that I can
        learn new techniques for solving the everyday problems that arise. The
        best part of this career is getting to make stuff that works.
      </p>
      {/* Profile Image */}
      <p>
        My name is Kyle Alexander Lafayette Melton, KALM - which I am. My
        friends call me Kyle, or Melton.
      </p>
    </div>
  )
}

AboutMe.propTypes = {
  threshold: PropTypes.arrayOf(PropTypes.number).isRequired,
  updatePosition: PropTypes.func.isRequired,
}

export default AboutMe
