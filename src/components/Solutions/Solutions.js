import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"

import SolutionsStyled from "./Solutions.styled"

import SolutionsImage from "./static/home-solutions-image.jpg"
import RedShape from "./static/home-solutions-shape.svg"

import srcLive from "./static/icon_experience.png"
import srcStream from "./static/icon_streaming.png"
import srcCustom from "./static/icon_consulting.png"

const Solutions = () => {
  const data = [
    {
      title: "Live Experience",
      text:
        "Custom webpages, graphics and information designed to draw your audience into the event.",
      src: srcLive,
    },
    {
      title: "Live Streaming",
      text:
        "Seamlessly livestream across multiple platforms with just one click. Includes live updating and customization, with event archives available almost instantly.",
      src: srcStream,
    },
    {
      title: "Consulting/Custom Development",
      text:
        " Whether small or large scale, our experienced team is able to consult on any number of projects.",
      src: srcCustom,
    },
  ]
  return (
    <SolutionsStyled>
      <section className="py-5" id="solutions">
        <Container className="wide-container my-5">
          <Row>
            <Col md={6} className="px-sm-0 px-md-3">
              <div className="solutions-shape-container">
                <img src={RedShape} alt="clip" />
              </div>
              <img
                className="solutions-clip-image"
                src={SolutionsImage}
                alt="Solutions"
              />

              <Link
                className="btn btn-primary btn-lg d-none d-sm-block desktop"
                to="/solutions"
              >
                Learn More <span className="btn-line" />
              </Link>
              <svg width="0" height="0">
                <defs>
                  <clipPath id="clipPolygon" clipPathUnits="objectBoundingBox">
                    <polygon points=".05 .03, 1 0, .935 1, 0 1" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="0" height="0">
                <defs>
                  <clipPath
                    id="buttonPolygon"
                    clipPathUnits="objectBoundingBox"
                  >
                    <polygon points="0 0, 1 0, .85 1, 0 1" />
                  </clipPath>
                </defs>
              </svg>
            </Col>
            <Col md={4} className="ml-auto mr-auto mt-5">
              <h3 className="oswald">Solutions</h3>
              <hr />

              {data.map((item, key) => (
                <React.Fragment key={key}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="solutions-bullet-image"
                  />
                  <h4 style={{ top: "-5px", position: "relative" }}>
                    {item.title}
                  </h4>
                  <p>{item.text}</p>
                </React.Fragment>
              ))}
              <Button variant="primary" size="lg" className="d-sm-none mobile">
                Learn More <span className="btn-line" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </SolutionsStyled>
  )
}

export default Solutions
