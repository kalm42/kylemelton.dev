import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from 'framer-motion'

const Udacity = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "youssef-sarhan-tze1kKj7Lgg-unsplash.jpg" }) {
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
    <motion.div className="project__wrapper" onHoverStart={() => setHovered("udacity")} onHoverEnd={() => setHovered(null)}>
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
          Photo by <a href="https://unsplash.com/@youssefsarhan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Youssef Sarhan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Udacity
