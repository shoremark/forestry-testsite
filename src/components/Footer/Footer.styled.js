import styled from "styled-components"
import { device } from "src/theme"

const FooterStyled = styled.div`
  margin-top: 2em;
  overflow: hidden;
  footer {
    position: relative;
    min-height: 400px;

    &.footer-contact {
      min-height: 214px;
    }
  }

  svg.largeBG {
    position: absolute;
    right: 0;
    z-index: -1;
  }
  .callToAction {
    position: absolute;
    bottom: 15%;
    position: absolute;
  }
  .callToActionTagline {
    position: absolute;
    left: 1%;
    bottom: 34.38%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: 1.25;
    color: #ffffff;
    font-size: 2rem;
    @media ${device.desktop} {
      left: 2%;
      font-size: 3rem;
    }
    span {
      display: inline-block;
      color: #fff;
      background-color: #111;
      margin-bottom: 5px;
      padding: 5px 10px;
    }
  }
  ul {
    &.desktop {
      position: absolute;
      left: 15.7%;
      right: 6.46%;
      top: 60.83%;
      bottom: 31.67%;
    }
  }
  h6 {
    &.copyright.desktop {
      position: absolute;
      right: 6.46%;
      top: 75.83%;
      bottom: 17.92%;
    }
  }

  &.footer-contact {
    ul {
      &.desktop {
        flex-direction: row !important;
        top: 25%;
        flex-wrap: wrap;
        @include media-breakpoint-up(md) {
          top: 40%;
        }
      }
    }

    h6 {
      &.copyright.desktop {
        top: 75%;
        @include media-breakpoint-up(md) {
          top: 65%;
        }
      }
    }
  }

  ul {
    font-family: Oswald;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    font-size: 18px;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    a {
      color: #333;
    }
  }

  h6.copyright {
    color: #aaa;
    flex-wrap: wrap;
    font-size: 0.9rem;
    hr {
      border-color: #c4c4c4;
      border-top-width: 2px;
      margin-top: 0px;
      width: 80px;
      margin-inline-start: 0;
      margin-inline-end: 0;
      margin-left: auto;
    }
  }
`
export default FooterStyled
