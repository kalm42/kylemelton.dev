import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../../hooks/useIntersect"

import "./ContactMe.scss"
import Twitter from "../social/Twitter"
import GitHub from "../social/Github"
import LinkedIn from "../social/Linkedin"
import Facebook from "../social/Facebook"

const ContactMe = ({
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
    <div id="contactme" ref={ref}>
      <div className="contact-me">
        <h1>Contact Details</h1>
        <div className="contact-me__info">
          <div>
            <p>(951)212-7174</p>
            <p>me@kylemelton.dev</p>
            <p>KyleMelton.dev</p>
          </div>
          <address>
            2184 Channing Way #418
            <br />
            Idaho Falls, ID 83404
          </address>
        </div>
        <div className="contact-me__social">
          <LinkedIn />
          <GitHub />
          <Twitter />
          <Facebook />
        </div>
      </div>
    </div>
  )
}

ContactMe.propTypes = {
  data: PropTypes.shape({
    threshold: PropTypes.arrayOf(PropTypes.number),
    activeSection: PropTypes.string,
    pageHeight: PropTypes.number,
  }).isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default ContactMe
