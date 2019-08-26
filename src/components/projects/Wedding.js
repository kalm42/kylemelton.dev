import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from 'framer-motion'

const Wedding = () => {
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
    <motion.div className="project__wrapper" onHoverStart={() => setHovered("wedding")} onHoverEnd={() => setHovered(null)}>
      <AnimatePresence>
        {hovered === "wedding" && (
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
            <h3>Wedding Website:</h3>
            <p>
              I wanted a website for guests to RSVP, give gifts, and track all
              of that. Reports who has RSVP’d, given gifts, and how much.
              Automated invites with RSVP code and thank you cards.
            </p>
            <h3>Tags:</h3>
            <ul>
              <li>Gatsby</li>
              <li>React</li>
              <li>GraphQL</li>
              <li>Node</li>
              <li>Yoga</li>
              <li>Apollo</li>
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

export default Wedding
