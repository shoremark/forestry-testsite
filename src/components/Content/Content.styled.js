import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "src/theme"

const ContentStyled = styled(motion.div)`
  overflow: hidden;
  height: 100%;
  p {
    width: 80%;
    max-width: 1000px;
    margin: 20px auto;
  }
  h1,
  h2,
  h3,
  h4,
  ul {
    width: 80%;
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
  }
  h1 {
    font-family: Oswald;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 3px;
  }
  h2 {
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 3px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 3px;
  }
  .bullet-image {
    position: relative;
    width: 80%;
    max-width: 1000px;
    margin: 15px auto;
    img,
    svg {
      position: absolute;
      left: 0px;
      top: 10px;
      width: 40px;
      height: 40px;
      color: #fe3b1f;
      path {
        stroke: #fe3b1f;
      }
    }
    h4 {
      margin-left: 60px;
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
      margin-left: 60px;
    }
  }
  blockquote {
    background: #f2f2f2;
    padding: 3em 0;
    margin: 0em 0 2em 0;
    font-size: 1.25em;
    font-weight: 200;
    p {
      width: 50%;
    }
  }

  .logos {
    margin: 2em auto;
    padding: 2em 0;
    h1 {
      font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      text-transform: none;
      font-weight: 100;
      font-size: 33px;
      letter-spacing: 3px;
      clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%);
      padding: 0.3em 4rem 0.3em 1em;
      background: #dc3e2f;
      color: #f2f2f2;
      margin: 0;
    }
    &.right {
      h1 {
        text-align: right;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 4% 100%);
        margin-left: auto;
      }
    }

    img {
      width: 50%;
      padding: 20px 5%;
      @media ${device.laptop} {
        width: 25%;
        padding: 20px 5%;
      }
    }
  }
`
export default ContentStyled
