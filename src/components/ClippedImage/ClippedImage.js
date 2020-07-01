import React from "react"
import ClippedImageStyled from "./ClippedImage.styled"
import { Row, Col } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import { Link } from "gatsby"
import ShapeOne from "./static/shape-1.svg"
import ShapeTwo from "./static/shape-2.svg"
import ShapeThree from "./static/shape-3.svg"

function ClippedImage({
  src,
  direction = "right",
  title,
  type = "one",
  to,
  toText = "Learn More",
  shape,
  children,
  textFirst = false,
  background = "tranparent",
}) {
  return (
    <ClippedImageStyled
      className={textFirst || type === "three" ? "textFirst" : ""}
      style={{ background }}
    >
      <Row>
        <Col md={6} className="image px-sm-0 px-md-3">
          {shape === "one" && (
            <ShapeOne alt="clip" className="shape shape-one" />
          )}
          {shape === "two" && (
            <ShapeTwo alt="clip" className="shape shape-two" />
          )}
          {shape === "three" && (
            <ShapeThree alt="clip" className="shape shape-three" />
          )}
          <img
            className={`clip-image clip-image-${type}`}
            src={src}
            alt={title}
          />
          {to && (
            <Link className="btn btn-primary btn-lg d-none d-sm-block" to={to}>
              {toText}
              <span className="btn-line" />
            </Link>
          )}
          <svg width="0" height="0">
            <defs>
              <clipPath id="clipPolygon" clipPathUnits="objectBoundingBox">
                <polygon points=".05 .03, 1 0, .935 1, 0 1" />
              </clipPath>
            </defs>
          </svg>
          <svg width="0" height="0">
            <defs>
              <clipPath id="buttonPolygon" clipPathUnits="objectBoundingBox">
                <polygon points="0 0, 1 0, .85 1, 0 1" />
              </clipPath>
            </defs>
          </svg>
        </Col>
        {children && (
          <Col md={6} className="text ml-auto mr-auto mt-5">
            {React.Children.map(children, child => {
              if (typeof child === "string") {
                return <ReactMarkdown source={child} escapeHtml={false} />
              } else {
                return child
              }
            })}
          </Col>
        )}
      </Row>
    </ClippedImageStyled>
  )
}

export default ClippedImage
