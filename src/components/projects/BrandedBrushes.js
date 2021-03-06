import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion, AnimatePresence } from 'framer-motion'

const BrandedBrushes = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "branded.png" }) {
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
    <motion.div className="project__wrapper" onHoverStart={() => setHovered("branded")} onHoverEnd={() => setHovered(null)}>
      <AnimatePresence>
        {hovered === "branded" && (
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
            <h3>Branded Brushes</h3>
            <p>
              Paint brush manufacturer needed a web based private label
              designer for their paint brushes.The whole thing needed to be
              integrated into wordpress.
                </p>
            <h3>Tags:</h3>
            <ul>
              <li>WordPress</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Headless CMS</li>
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

export default BrandedBrushes
