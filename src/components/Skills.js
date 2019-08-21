import React from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../hooks/useIntersect"

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 })

const Skills = ({ threshold, updatePosition }) => {
  const [ref, entry] = useIntersect({
    threshold,
  })

  updatePosition("skills", entry.intersectionRatio)

  return (
    <div id="skills" ref={ref}>
      <h1>Skills - {format(entry.intersectionRatio)}</h1>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>SASS</li>
        <li>Apollo</li>
        <li>Nodejs</li>
        <li>Express</li>
        <li>HTML5</li>
        <li>Cascading Style Sheets (CSS)</li>
        <li>Mobile Web Development</li>
        <li>Accessibility</li>
        <li>Progressive Web Apps</li>
        <li>Performance Optimization and Caching</li>
        <li>Testing and Debugging</li>
        <li>Front End Networking</li>
      </ul>
      <h2>Tools</h2>
      <ul>
        <li>Git</li>
        <li>MacOS</li>
        <li>Windows</li>
        <li>Linux</li>
        <li>Visual Studio Code</li>
        <li>Vim</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Adobe XD</li>
        <li>MS Office</li>
        <li>Chrome</li>
        <li>Firefox</li>
        <li>Slack</li>
      </ul>
    </div>
  )
}

Skills.propTypes = {
  threshold: PropTypes.arrayOf(PropTypes.number).isRequired,
  updatePosition: PropTypes.func.isRequired,
}

export default Skills
