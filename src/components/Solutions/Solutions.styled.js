import styled from "styled-components"
import { device } from "src/theme"

const SolutionsStyled = styled.div`
  z-index: 10;

  .btn-primary {
    &.desktop {
      position: absolute;
      bottom: 75px;
      z-index: 1;
      right: 0;
      @media ${device.laptop} {
        right: -5%;
      }
    }
  }
  .solutions-clip-image {
    clip-path: polygon(0 0, 90% 0, 93.5% 100%, 0 90%);
  }

  .solutions-bullet-image {
    position: absolute;
    left: -40px;
    width: 40px;
  }

  .solutions-shape-container {
    z-index: -1;
    position: absolute;
    top: -125px;
    right: -155px;
  }
`
export default SolutionsStyled
