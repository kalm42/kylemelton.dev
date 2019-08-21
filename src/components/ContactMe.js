import React from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../hooks/useIntersect"

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 })

const ContactMe = ({ threshold, updatePosition }) => {
  const [ref, entry] = useIntersect({
    threshold,
  })

  updatePosition("contactme", entry.intersectionRatio)

  return (
    <div id="contactme" ref={ref}>
      <h1>Contact Details - {format(entry.intersectionRatio)}</h1>
      <p>(951)212-7174</p>
      <p>me@kylemelton.dev</p>
      <p>KyleMelton.dev</p>
      <address>
        2184 Channing Way #418
        <br />
        Idaho Falls, ID 83404
      </address>
    </div>
  )
}

ContactMe.propTypes = {
  threshold: PropTypes.arrayOf(PropTypes.number).isRequired,
  updatePosition: PropTypes.func.isRequired,
}

export default ContactMe
