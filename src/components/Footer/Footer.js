import React, { useState, useEffect } from "react"
import { animated } from "react-spring"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import FooterStyled from "./Footer.styled"
// import { useLocation } from "react-router-dom"

// const startingPathLarge =
//   'M1231.88,236.368l9.13,12.58l0.285,-45.754l-9.007,12.892l-0.408,20.282Z';
const endingPathLarge =
  "M 60.5 389 L 1180.4666748046875 484.8304443359375 L 1240.5 0 L 0.5 40 L 60.5 389 Z"

// const startingPathSmall =
//   'M63.3847 174.128L1389 213.694L1367.14 0.305754L0 17.6436L63.3847 174.128Z';
const endingPathSmall =
  "M63.3847 174.128L1389 213.694L1367.14 0.305754L0 17.6436L63.3847 174.128Z"

const Footer = ({ location }) => {
  const [contact, setContact] = useState(false)

  useEffect(() => {
    setContact(location === "/contact")
  }, [location, setContact])

  return (
    <FooterStyled>
      <footer
        className={`footer ${
          contact ? "footer-contact" : "footer-not-contact"
        } mb-5`}
      >
        {!contact ? (
          <React.Fragment>
            <p className="callToActionTagline">
              <span>Ready to make</span>
              <br />
              <span className="d-none d-sm-inline-block">
                something awesome
              </span>
              <span className="d-sm-none">something</span>
              <span className="d-sm-none">awesome</span>
              <br />
              <span>together?</span>
              <br />
            </p>

            <Link to="/contact" className="callToAction btn btn-primary btn-lg">
              Contact us about your project <span className="btn-line" />
            </Link>
            {/* This is the clip path for the button */}
            <svg width="0" height="0">
              <defs>
                <clipPath id="buttonPolygon" clipPathUnits="objectBoundingBox">
                  <polygon points="0 0, 1 0, .85 1, 0 1" />
                </clipPath>
              </defs>
            </svg>
          </React.Fragment>
        ) : null}
        {!contact ? (
          <React.Fragment>
            <svg
              width="1241.233642578125"
              height="485.1976318359375"
              viewBox="0 0 1241.233642578125 485.1976318359375"
              preserveAspectRatio="none"
              className="largeBG"
            >
              <animated.path d={endingPathLarge} fill="#eee" />
            </svg>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <svg
              width="1389"
              height="214"
              viewBox="0 0 1389 214"
              preserveAspectRatio="none"
              className="largeBG"
            >
              <animated.path d={endingPathSmall} fill="#eee" />
            </svg>
          </React.Fragment>
        )}

        <React.Fragment>
          <ul
            className={`desktop justify-content-end list-unstyled flex-column flex-lg-row text-right ${
              contact ? "" : "d-none  d-md-flex"
            }`}
          >
            <li className="pl-3">
              <Link to="/about">Our Company</Link>
            </li>
            <li className="pl-3">
              <Link to="/services">Services</Link>
            </li>
            <li className="pl-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <h6
            className={`desktop copyright text-right ${
              contact ? "" : "d-none d-md-block"
            }`}
          >
            <hr />
            {"© 2019 Sardius Media. All rights reserved."}
          </h6>
        </React.Fragment>
      </footer>

      {!contact ? (
        <div className="footer container overflow-hidden d-md-none">
          <ul className="d-flex justify-content-end list-unstyled">
            <li className="pl-3">
              <Link to="/about">Our Company</Link>
            </li>
            <li className="pl-3">
              <Link to="/services">Services</Link>
            </li>
            <li className="pl-3">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <h6 className="copyright text-right mb-5">
            <hr />
            {"© 2019 Sardius Media. All rights reserved."}
          </h6>
        </div>
      ) : null}
    </FooterStyled>
  )
}

Footer.propTypes = {
  contact: PropTypes.bool,
}

export default Footer
