import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../../hooks/useIntersect"

const Skills = ({
  data: { threshold, activeSection, pageHeight },
  setActiveSection,
}) => {
  if (!pageHeight) return null
  const observerMargin = Math.floor(pageHeight / 2)
  const rootMargin = `-${
    pageHeight % 2 === 0 ? observerMargin - 1 : observerMargin
  }px 0px -${observerMargin}px 0px`
  const [ref, entry] = useIntersect({
    threshold,
    rootMargin,
  })

  useEffect(() => {
    if (!entry.target) return
    if (entry.intersectionRatio > 0) {
      setActiveSection(entry.target.id)
    }
  }, [entry, activeSection, setActiveSection, ref])

  return (
    <div id="skills" ref={ref}>
      <h1>Skills</h1>
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
  data: PropTypes.shape({
    threshold: PropTypes.arrayOf(PropTypes.number),
    activeSection: PropTypes.string,
    pageHeight: PropTypes.number,
  }).isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default Skills
