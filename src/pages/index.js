import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Fullstack JavaScript Developer" />
    <Hero />
    <div className="hero--text">
      <p>
        Hi! I&apos;m Kyle. <br />
        <span>A Full Stack Developer.</span>
      </p>
    </div>

    <Menu />
    <h1>About Me</h1>
    <p>
      Californian native who has always liked web work. I started out studying
      to do graphic design but when I got the chance to design websites and fell
      in love with the fluid ever changing nature of a website. I changed my
      learning path and started learning how to make websites. I have been a one
      man show many times so I have enjoyed learning backend work as well. I’m
      relatively new to this and love working in teams so that I can learn new
      techniques for solving the everyday problems that arise. The best part of
      this career is getting to make stuff that works.
    </p>
    {/* Profile Image */}
    <p>
      My name is Kyle Alexander Lafayette Melton, KALM - which I am. My friends
      call me Kyle, or Melton.
    </p>
    <h1>Contact Details</h1>
    <p>(951)212-7174</p>
    <p>me@kylemelton.dev</p>
    <p>KyleMelton.dev</p>
    <address>
      2184 Channing Way #418
      <br />
      Idaho Falls, ID 83404
    </address>
    <h1>Resume</h1>
    <h2>Work Experience</h2>
    <h3>Kimmel &amp; Associates</h3>
    <p>February 2019 – June 2019</p>
    <h4>Junior Frontend Developer</h4>
    <p>
      Self-assign tasks from project management workflow. Submit pull requests
      for code review by senior developers. Working in a monorepo deploying an
      electron app, and a web app. The codebase is mostly React Typescript using
      both high order components and render props.
    </p>
    <h3>Kimmel &amp; Associates</h3>
    <p>November 2019</p>
    <h4>Intern - Frontend Developer</h4>
    <p>
      Assigned tasks from project management workflow. Created and implemented
      Typescript React components. Wrote end-to-end tests.
    </p>
    <h2>Education</h2>
    <h3>California Baptist University</h3>
    <p>BS Accounting August 2019</p>
    <h2>Certifications</h2>
    <h3>Google Mobile Web Specialist</h3>
    <p>
      Based on extensive job task analyses, candidates earning this
      certification have shown that they have the skills expected of an
      advanced-level mobile web developer, and are capable of writing performant
      and responsive applications for the mobile web.
    </p>
    <h1>Skills</h1>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>TypeScript</li>
      <li>Gatsby</li>
      <li>GraphQL</li>
      <li>SASS</li>
      <li>Apollo</li>
      <li>Nodejs</li>
      <li>Express</li>
      <li>HTML5</li>
      <li>Cascading Style Sheets (CSS)</li>
      <li>Mobile Web Development</li>
      <li>Accessibility</li>
      <li>Progressive Web Apps</li>
      <li>Performance Optimization and Caching</li>
      <li>Testing and Debugging</li>
      <li>Front End Networking</li>
    </ul>
    <h2>Tools</h2>
    <ul>
      <li>Git</li>
      <li>MacOS</li>
      <li>Windows</li>
      <li>Linux</li>
      <li>Visual Studio Code</li>
      <li>Vim</li>
      <li>Photoshop</li>
      <li>Illustrator</li>
      <li>Adobe XD</li>
      <li>MS Office</li>
      <li>Chrome</li>
      <li>Firefox</li>
      <li>Slack</li>
    </ul>
    <h1>Projects</h1>
    <div>{/* Project Image */}</div>
    <div>{/* Project Image */}</div>
    <div>{/* Project Image */}</div>
    <div>{/* Project Image */}</div>
    <h1>Contact Details</h1>
    <p>(951)212-7174</p>
    <p>me@kylemelton.dev</p>
    <p>KyleMelton.dev</p>
    <address>
      2184 Channing Way #418
      <br />
      Idaho Falls, ID 83404
    </address>
    <div>{/* Social Media: GitHub */}</div>
    <div>{/* Social Media: Facebook */}</div>
    <div>{/* Social Media: LinkedIn */}</div>
    <div>{/* Social Media: Twitter */}</div>
  </Layout>
)

export default IndexPage
