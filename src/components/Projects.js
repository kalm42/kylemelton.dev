import React from "react"
import PropTypes from "prop-types"
import { useIntersect } from "../hooks/useIntersect"

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 })

const Projects = ({ threshold, updatePosition }) => {
  const [ref, entry] = useIntersect({
    threshold,
  })

  updatePosition("projects", entry.intersectionRatio)

  return (
    <div id="projects" ref={ref}>
      <h1>Projects - {format(entry.intersectionRatio)}</h1>
      <div>
        {/* Project Image */}
        <p>
          Aliquip veniam cillum quis esse aliquip. Officia commodo ad fugiat
          labore reprehenderit. Dolor ipsum adipisicing cupidatat non enim dolor
          eu deserunt ad tempor officia.
        </p>
        <p>
          Minim ullamco aute fugiat duis proident. Et et cillum consectetur
          mollit ea. Incididunt eu eu veniam eiusmod ex exercitation consequat
          pariatur aute quis fugiat consequat fugiat enim. Tempor ullamco nisi
          exercitation ut. Non sint aliqua eu elit. Esse velit fugiat ut sit est
          non nostrud nostrud veniam est. Sit dolore incididunt anim esse
          deserunt nisi.
        </p>
        <p>
          Adipisicing enim nisi voluptate ea ut sunt tempor consectetur veniam
          labore est. Commodo ex occaecat ut sunt duis amet veniam eiusmod quis
          officia. Magna commodo ad nulla ut veniam labore nostrud anim esse.
          Magna proident est consectetur duis proident ut aliquip enim est esse
          nostrud ea exercitation.
        </p>
        <p>
          Eu nisi culpa occaecat occaecat. Amet excepteur quis labore deserunt
          esse commodo. Officia incididunt culpa occaecat ipsum. Lorem est
          adipisicing consequat veniam ea do excepteur officia elit consectetur
          proident adipisicing culpa magna. Duis ipsum ut irure irure enim
          occaecat fugiat deserunt tempor. Quis qui anim velit veniam non.
        </p>
      </div>
      <div>
        {/* Project Image */}
        <p>
          Aliquip veniam cillum quis esse aliquip. Officia commodo ad fugiat
          labore reprehenderit. Dolor ipsum adipisicing cupidatat non enim dolor
          eu deserunt ad tempor officia.
        </p>
        <p>
          Minim ullamco aute fugiat duis proident. Et et cillum consectetur
          mollit ea. Incididunt eu eu veniam eiusmod ex exercitation consequat
          pariatur aute quis fugiat consequat fugiat enim. Tempor ullamco nisi
          exercitation ut. Non sint aliqua eu elit. Esse velit fugiat ut sit est
          non nostrud nostrud veniam est. Sit dolore incididunt anim esse
          deserunt nisi.
        </p>
        <p>
          Adipisicing enim nisi voluptate ea ut sunt tempor consectetur veniam
          labore est. Commodo ex occaecat ut sunt duis amet veniam eiusmod quis
          officia. Magna commodo ad nulla ut veniam labore nostrud anim esse.
          Magna proident est consectetur duis proident ut aliquip enim est esse
          nostrud ea exercitation.
        </p>
        <p>
          Eu nisi culpa occaecat occaecat. Amet excepteur quis labore deserunt
          esse commodo. Officia incididunt culpa occaecat ipsum. Lorem est
          adipisicing consequat veniam ea do excepteur officia elit consectetur
          proident adipisicing culpa magna. Duis ipsum ut irure irure enim
          occaecat fugiat deserunt tempor. Quis qui anim velit veniam non.
        </p>
      </div>
      <div>
        {/* Project Image */}
        <p>
          Aliquip veniam cillum quis esse aliquip. Officia commodo ad fugiat
          labore reprehenderit. Dolor ipsum adipisicing cupidatat non enim dolor
          eu deserunt ad tempor officia.
        </p>
        <p>
          Minim ullamco aute fugiat duis proident. Et et cillum consectetur
          mollit ea. Incididunt eu eu veniam eiusmod ex exercitation consequat
          pariatur aute quis fugiat consequat fugiat enim. Tempor ullamco nisi
          exercitation ut. Non sint aliqua eu elit. Esse velit fugiat ut sit est
          non nostrud nostrud veniam est. Sit dolore incididunt anim esse
          deserunt nisi.
        </p>
        <p>
          Adipisicing enim nisi voluptate ea ut sunt tempor consectetur veniam
          labore est. Commodo ex occaecat ut sunt duis amet veniam eiusmod quis
          officia. Magna commodo ad nulla ut veniam labore nostrud anim esse.
          Magna proident est consectetur duis proident ut aliquip enim est esse
          nostrud ea exercitation.
        </p>
        <p>
          Eu nisi culpa occaecat occaecat. Amet excepteur quis labore deserunt
          esse commodo. Officia incididunt culpa occaecat ipsum. Lorem est
          adipisicing consequat veniam ea do excepteur officia elit consectetur
          proident adipisicing culpa magna. Duis ipsum ut irure irure enim
          occaecat fugiat deserunt tempor. Quis qui anim velit veniam non.
        </p>
      </div>
      <div>
        {/* Project Image */}
        <p>
          Aliquip veniam cillum quis esse aliquip. Officia commodo ad fugiat
          labore reprehenderit. Dolor ipsum adipisicing cupidatat non enim dolor
          eu deserunt ad tempor officia.
        </p>
        <p>
          Minim ullamco aute fugiat duis proident. Et et cillum consectetur
          mollit ea. Incididunt eu eu veniam eiusmod ex exercitation consequat
          pariatur aute quis fugiat consequat fugiat enim. Tempor ullamco nisi
          exercitation ut. Non sint aliqua eu elit. Esse velit fugiat ut sit est
          non nostrud nostrud veniam est. Sit dolore incididunt anim esse
          deserunt nisi.
        </p>
        <p>
          Adipisicing enim nisi voluptate ea ut sunt tempor consectetur veniam
          labore est. Commodo ex occaecat ut sunt duis amet veniam eiusmod quis
          officia. Magna commodo ad nulla ut veniam labore nostrud anim esse.
          Magna proident est consectetur duis proident ut aliquip enim est esse
          nostrud ea exercitation.
        </p>
        <p>
          Eu nisi culpa occaecat occaecat. Amet excepteur quis labore deserunt
          esse commodo. Officia incididunt culpa occaecat ipsum. Lorem est
          adipisicing consequat veniam ea do excepteur officia elit consectetur
          proident adipisicing culpa magna. Duis ipsum ut irure irure enim
          occaecat fugiat deserunt tempor. Quis qui anim velit veniam non.
        </p>
      </div>
    </div>
  )
}

Projects.propTypes = {
  threshold: PropTypes.arrayOf(PropTypes.number).isRequired,
  updatePosition: PropTypes.func.isRequired,
}

export default Projects
