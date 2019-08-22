import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../../hooks/useIntersect"

const AboutMe = ({
  data: { threshold, activeSection, pageHeight },
  setActiveSection,
}) => {
  if (!pageHeight) return null
  const observerMargin = Math.floor(pageHeight / 2)
  const [ref, entry] = useIntersect({
    threshold,
    rootMargin: `-${
      pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
    }px 0px -${observerMargin}px 0px`,
  })

  useEffect(() => {
    if (!entry.target) return
    if (entry.intersectionRatio > 0) {
      setActiveSection(entry.target.id)
    }
  }, [entry, activeSection, setActiveSection, ref])

  return (
    <div id="aboutme" ref={ref}>
      <h1>About Me</h1>
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
  data: PropTypes.shape({
    threshold: PropTypes.arrayOf(PropTypes.number),
    activeSection: PropTypes.string,
    pageHeight: PropTypes.number,
  }).isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default AboutMe
