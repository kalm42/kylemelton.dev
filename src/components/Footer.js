import React from 'react'

import GitHub from './social/Github'
import Facebook from './social/Facebook'
import LinkedIn from './social/Linkedin'
import Twitter from './social/Twitter'
import "./Footer.scss"

const Footer = () => (
  <footer>
    <div className="footer">
      <h1>Contact Details</h1>
      <div className="footer__wrapper">
        <div className="footer__contact">
          <p>© Kyle Melton {new Date().getFullYear()}</p>
          <p>
            <a href="tel:+19512127174">(951)212-7174</a><br />
            <a href="mailto:me@kylemelton.dev">me@kylemelton.dev</a>
          </p>
          <address>
            2184 Channing Way #418
              <br />
            Idaho Falls, ID 83404
            </address>
        </div>
        <div className="footer__social">
          <GitHub />
          <Facebook />
          <LinkedIn />
          <Twitter />
        </div>
        <div className="footer__attributes">
          <div>
            Social Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
            >
              Dave Gandy
            </a>
            {" "}and{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>
            {" "}from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
            {" "}Star Icon made by <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons">Smashicons
            </a> from{" "}
            <a
              href="https://www.flaticon.com/"
              title="Flaticon">www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
