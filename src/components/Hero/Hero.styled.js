import styled from "styled-components"
import { device } from "src/theme"

const HeroStyled = styled.div`
  h1 {
    color: #ffffff;
    font-weight: 100;
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin: 0;
    width: auto;

    @media ${device.phone} {
      font-size: 2rem;
    }
    @media ${device.tablet} {
      font-size: 3.5rem;
      margin: 0;
    }
  }
  .hero-content {
    position: absolute;
    top: 10%;
    margin-left: 1rem;

    @media ${device.phone} {
      width: 70%;
      margin-left: 2rem;
    }

    @media ${device.desktopL} {
      transform: scale(1.5);
      transform-origin: left;
      margin-left: 10rem;
    }
    @media ${device.desktop} {
      top: 45%;
      width: 40%;
      margin-left: 4rem;
    }
    @media ${device.tablet} {
      top: 30%;
      width: 60%;
      margin-left: 3rem;
    }
  }

  .video-header {
    position: relative;
    min-height: 400px;
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: ${(9 / 16) * 100}%;
    }

    video {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }

    .video-filter-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      overflow: hidden;
      opacity: 0.65;
      background-color: #000;
    }
  }

  .video-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media ${device.laptop} {
      width: 90%;
    }
  }

  .hero-shape-container {
    position: absolute;
    bottom: -20px;
    right: 60px;
    width: 90%;
    text-align: right;
    @media ${device.phone} {
      bottom: -60px;
      right: 0;
    }
    @media ${device.desktop} {
      bottom: -60px;
      width: 100%;
    }
  }

  .clipHomeHero {
    clip-path: polygon(0 0, 100% 0%, 100% 90%, 0% 100%);
    @media ${device.tablet} {
      clip-path: polygon(2.5% 0, 100% 0, 94% 90%, 0% 100%);
    }
  }
`
export default HeroStyled
