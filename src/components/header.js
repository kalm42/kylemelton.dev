import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Hamburger = styled.div`
  width: 16px;
  height: 12px;
  position: relative;
  margin: 16px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--lightaccent);
    opacity: 1;
    right: 0;
    border-radius: 1px;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }
    &:nth-child(2) {
      top: 5px;
    }
    &:nth-child(3) {
      top: 5px;
    }
    &:nth-child(4) {
      top: 10px;
      width: 40%;
    }
  }

  ${props =>
    props.open &&
    `
      span {
        &:nth-child(1) {
          top: 10px;
          width: 0%;
          left: 50%;
        }
        &:nth-child(2) {
          transform: rotate(45deg);
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
        &:nth-child(4) {
          top: 10px;
          width: 0%;
          left: 50%;
        }
      }
    `}
`
const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Hamburger>
      <span />
      <span />
      <span />
      <span />
    </Hamburger>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
