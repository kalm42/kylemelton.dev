import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../../hooks/useIntersect"

import BrandedBrushes from '../projects/BrandedBrushes'
import Wedding from "../projects/Wedding"
import Udacity from '../projects/Udacity'
import RickAndMorty from '../projects/RickAndMorty'
import "./Projects.scss"

const Projects = ({
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
    <div id="projects" ref={ref}>
      <div className="projects">
        <h1>Projects</h1>
        <div className="projects__collection">
          <BrandedBrushes />
          <Wedding />
          <Udacity />
          <RickAndMorty />
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  data: PropTypes.shape({
    threshold: PropTypes.arrayOf(PropTypes.number),
    activeSection: PropTypes.string,
    pageHeight: PropTypes.number,
  }).isRequired,
  setActiveSection: PropTypes.func.isRequired,
}

export default Projects
