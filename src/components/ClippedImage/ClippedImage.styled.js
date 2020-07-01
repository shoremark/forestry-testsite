import styled from "styled-components"
import { device } from "src/theme"

const ClippedImageStyled = styled.div`
  padding: 3.5em 0 3.5em 0;
  background: linear-gradient(
    22deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0) 33%
  );
  &.textFirst {
    background: linear-gradient(
      340deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0) 33%
    );
  }

  &.textFirst .btn-primary {
    right: auto;
    left: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 12% 100%) !important;
    padding-left: 4rem;
    padding-right: 1.75rem;
  }
  .btn-primary {
    position: absolute;
    bottom: 75px;
    z-index: 1;
    right: 0;

    @media ${device.laptop} {
      right: -5%;
    }
  }
  h1 {
    padding-top: 1em;
    &:first-child {
      padding-top: 0;
    }
  }

  .image {
    width: 100%;
    flex-direction: row-reverse;
    align-self: center;
    @media ${device.laptop} {
      width: 100%;
    }
  }
  .text {
    order: -1;
    @media ${device.laptop} {
      order: 0;
    }
  }

  &.textFirst {
    .text {
      order: -1;
    }
    .image {
      text-align: right;
    }
  }

  .clip-image {
    width: 100%;
    @media ${device.laptop} {
      width: 100%;
    }
  }
  .clip-image-one {
    clip-path: polygon(0 0, 90% 0, 93.5% 100%, 0 90%);
  }
  .clip-image-two {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%);
    @media ${device.laptop} {
      clip-path: polygon(0 0, 82% 0, 93.5% 100%, 0 90%);
    }
  }

  .clip-image-three {
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 83%);
    @media ${device.laptop} {
      clip-path: polygon(15% 15%, 100% 0, 100% 93.5%, 0 100%);
    }
  }
  .clip-image-four {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0 100%);
    @media ${device.laptop} {
      clip-path: polygon(0 0, 93% 0, 100% 92.57%, 0 100%);
    }
  }

  .clip-image-six {
    clip-path: polygon(7% 10%, 100% 0, 94% 93%, 0 100%);
  }

  .clip-image-five {
    clip-path: polygon(0 0, 94.33% 1%, 100% 87.22%, 2% 100%);
  }

  &.textFirst .clip-image-none {
    transform: perspective(968px) rotateY(-34deg) scale(0.9);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }
  .clip-image-none {
    transform: perspective(968px) rotateY(34deg) scale(0.9) translateY(33px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }

  .shape {
    position: absolute;
    background: transparent;
    z-index: -1;
    rect {
      fill: transparent;
    }
  }

  .shape-one {
    top: -25px;
    right: -40%;
    @media ${device.laptop} {
      top: -125px;
    }
  }
  .shape-two {
    bottom: -70px;
    right: 20px;
    width: 65%;
  }
  .shape-three {
    display: none;
    @media ${device.laptop} {
      display: block;
      bottom: 95px;
      right: 0px;
      width: 100%;
    }
    @media ${device.desktop} {
      bottom: -50px;
      right: -300px;
      width: 125%;
    }
  }
`
export default ClippedImageStyled
