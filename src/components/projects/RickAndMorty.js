import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from 'framer-motion'

const RickAndMorty = () => {
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
    <motion.div className="project__wrapper" onHoverStart={() => setHovered("rick")} onHoverEnd={() => setHovered(null)}>
      <AnimatePresence>
        {hovered === "rick" && (
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
            <h3>Rick &amp; Morty Fan Site:</h3>
            <p>
              Vanilla Javascript, HTML, and CSS. No pre-processors, bundlers, or
              frameworks. Just a fun challenge to make a simple website without
              the assistance from normal development tools.
            </p>
            <h3>Tags:</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
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

export default RickAndMorty
