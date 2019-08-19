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

const MobileHeader = styled.header`
  background: var(--darkshade);
  height: 60px;
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  padding-left: 20px;
  font-size: var(--font-size-2);
  font-weight: 300;

  a {
    text-decoration: none;
    color: var(--lightaccent);
  }
`

const Header = ({ siteTitle }) => (
  <MobileHeader>
    <div>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </div>
    <Hamburger>
      <span />
      <span />
      <span />
      <span />
    </Hamburger>
  </MobileHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
