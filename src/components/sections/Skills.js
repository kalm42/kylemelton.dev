import React, { useEffect } from "react"
import PropTypes from "prop-types"

import { useIntersect } from "../../hooks/useIntersect"
import Star from '../Star'
import "./Skills.scss"

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
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill__set">
          <h2>Languages</h2>
          <ul>
            <li>
              JavaScript
              <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>
              React
              <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>
              TypeScript
              <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Gatsby
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>GraphQL
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>SASS
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Apollo
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Nodejs
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Express
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>HTML5
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Cascading Style Sheets (CSS)
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Mobile Web Development
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Accessibility
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Progressive Web Apps
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Performance Optimization and Caching
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Testing and Debugging
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Front End Networking
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
          </ul>
        </div>
        <div className="skill__set">
          <h2>Tools</h2>
          <ul>
            <li>Git
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>MacOS
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Windows
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Linux
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Visual Studio Code
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Vim
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Photoshop
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Illustrator
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Adobe XD
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>MS Office
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Chrome
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Firefox
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
            <li>Slack
            <span className="skill_rank">
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
                <Star on={true} />
              </span>
            </li>
          </ul>
        </div>
      </div>
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
