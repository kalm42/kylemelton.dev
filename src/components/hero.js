import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    ...data.thinImage.childImageSharp.fluid,
    srcSet: `${data.thinImage.childImageSharp.fluid.srcSet}${data.wideImage.childImageSharp.fluid.srcSet}`,
  }
  return <Img fluid={ImageData} className="hero" />
}

export default Hero
