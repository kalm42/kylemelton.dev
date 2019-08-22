import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Menu from "../components/menu/menu"
import AboutMe from "../components/sections/AboutMe"
import ContactMe from "../components/sections/ContactMe"
import Resume from "../components/sections/Resume"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"

const IndexPage = () => {
  const [pageHeight, setPageHeight] = useState()
  const [activeSection, setActiveSection] = useState("")

  const threshold = new Array(101)
    .fill(0)
    .map((v, i) => Number((i * 0.01).toFixed(2)))

  useEffect(() => {
    setPageHeight(window.innerHeight)
    const updatePageHeight = () => {
      setTimeout(() => {
        setPageHeight(window.innerHeight)
      }, 300)
    }
    window.addEventListener("resize", updatePageHeight)

    return () => window.removeEventListener("resize", updatePageHeight)
  }, [])

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
        <Menu threshold={threshold} activeSection={activeSection} />
        <AboutMe
          setActiveSection={setActiveSection}
          data={{ pageHeight, activeSection, threshold }}
        />
        <ContactMe
          setActiveSection={setActiveSection}
          data={{ pageHeight, activeSection, threshold }}
        />
        <Resume
          setActiveSection={setActiveSection}
          data={{ pageHeight, activeSection, threshold }}
        />
        <Skills
          setActiveSection={setActiveSection}
          data={{ pageHeight, activeSection, threshold }}
        />
        <Projects
          setActiveSection={setActiveSection}
          data={{ pageHeight, activeSection, threshold }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
