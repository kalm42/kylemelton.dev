import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../../hooks/useIntersect"

const Resume = ({
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
    <div id="resume" ref={ref}>
      <h1>Resume</h1>
      <h2>Work Experience</h2>
      <h3>Kimmel &amp; Associates</h3>
      <p>February 2019 – June 2019</p>
      <h4>Junior Frontend Developer</h4>
      <p>
        Self-assign tasks from project management workflow. Submit pull requests
        for code review by senior developers. Working in a monorepo deploying an
        electron app, and a web app. The codebase is mostly React Typescript
        using both high order components and render props.
      </p>
      <h3>Kimmel &amp; Associates</h3>
      <p>November 2019</p>
      <h4>Intern - Frontend Developer</h4>
      <p>
        Assigned tasks from project management workflow. Created and implemented
        Typescript React components. Wrote end-to-end tests.
      </p>
      <h2>Education</h2>
      <h3>California Baptist University</h3>
      <p>BS Accounting August 2019</p>
      <h2>Certifications</h2>
      <h3>Google Mobile Web Specialist</h3>
      <p>
        Based on extensive job task analyses, candidates earning this
        certification have shown that they have the skills expected of an
        advanced-level mobile web developer, and are capable of writing
        performant and responsive applications for the mobile web.
      </p>
    </div>
  )
}

Resume.propTypes = {
  data: PropTypes.shape({
    threshold: PropTypes.arrayOf(PropTypes.number),
    activeSection: PropTypes.string,
    pageHeight: PropTypes.number,
  }).isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default Resume
