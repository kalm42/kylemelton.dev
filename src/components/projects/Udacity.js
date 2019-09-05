import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"
import GitHub from "../social/Github"

const Udacity = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "udacity.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [hovered, setHovered] = useState()

  return (
    <motion.div
      className="project__wrapper"
      onHoverStart={() => setHovered("udacity")}
      onHoverEnd={() => setHovered(null)}
    >
      <AnimatePresence>
        {hovered === "udacity" && (
          <motion.div
            className="project__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key="desc"
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            exit={{ opacity: 0, y: 20 }}
          >
            <h3>Udacity, Restaurant Review:</h3>
            <p>
              Mobile ready progressive web application for restaurant reviews.
              That works completely offline and syncs when online again.
            </p>
            <h3>Tags:</h3>
            <ul>
              <li>Gulp</li>
              <li>Babel</li>
              <li>Sass</li>
              <li>Progressive Web App</li>
            </ul>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100px" }}>
                <GitHub href="https://github.com/kalm42/mws-restaurant-stage-3" />
              </div>
              <p>
                <a href="https://github.com/kalm42/wedding-frontend">
                  Click here
                </a>{" "}
                or on the icon to view the project code.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="project__image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/@lastly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Tyler Lastovich
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Udacity
