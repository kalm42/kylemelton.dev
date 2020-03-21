import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./hero.scss"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      thinImage: file(relativePath: { eq: "duotone-portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wideImage: file(relativePath: { eq: "duotone-mountain.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ImageData = {
    ...data.wideImage.childImageSharp.fluid,
  }
  return <Img fluid={ImageData} className="hero" />
}

export default Hero
