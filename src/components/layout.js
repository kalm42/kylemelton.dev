import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MobileMenu from "./mobile-menu/MobileMenu"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <MobileMenu siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <h1>Contact Details</h1>
        <p>© {new Date().getFullYear()}</p>
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
        <div>
          <div>
            Icons made by
            <a
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
            >
              Dave Gandy
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
