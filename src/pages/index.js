import React, { useMemo } from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Menu from "../components/menu/menu"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Resume from "../components/Resume"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const IndexPage = () => {
  const threshold = new Array(101)
    .fill(0)
    .map((v, i) => Number((i * 0.01).toFixed(2)))

  const scrollPosition = [
    { ratio: 0, id: "aboutme" },
    { ratio: 0, id: "contactme" },
    { ratio: 0, id: "resume" },
    { ratio: 0, id: "skills" },
    { ratio: 0, id: "projects" },
  ]

  const updateScrollPosition = (id, ratio) => {
    scrollPosition.map(e => {
      if (e.id === id) {
        e.ratio = ratio
      }
      return e
    })
  }

  return (
    <Layout>
      <SEO title="Fullstack JavaScript Developer" />
      <Hero />
      <div className="hero--text">
        <p>
          Hi! I&apos;m Kyle. <br />
          <span>A Full Stack Developer.</span>
        </p>
      </div>
      <div>
        <Menu threshold={threshold} scrollPosition={scrollPosition} />
        <AboutMe threshold={threshold} updatePosition={updateScrollPosition} />
        <ContactMe
          threshold={threshold}
          updatePosition={updateScrollPosition}
        />
        <Resume threshold={threshold} updatePosition={updateScrollPosition} />
        <Skills threshold={threshold} updatePosition={updateScrollPosition} />
        <Projects threshold={threshold} updatePosition={updateScrollPosition} />
      </div>
    </Layout>
  )
}

export default IndexPage
