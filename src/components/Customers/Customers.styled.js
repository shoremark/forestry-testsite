import styled from "styled-components"
import { device } from "src/theme"

const CustomersStyled = styled.div`
  padding-bottom: 5rem;
  max-width: 2000px;
  display: flex;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 89%);

  background-color: #f2f2f2;
  padding-top: 2em;

  @media ${device.desktop} {
    clip-path: polygon(0 0, 100% 0, 93% 100%, 10% 92%);
  }

  li {
    padding: 0 0.5rem;
  }

  .shape {
    top: 0;
    height: 300px;
    position: absolute;
    z-index: -1;
    /@media ${device.tablet} {
      left: 0;
      right: 0;
    }
  }

  .shape-content {
    width: 100vw;
    max-width: 80%;
    margin: 0 auto;
  }

  .global-leadership-summit {
    filter: contrast(86%);
  }
`

export default CustomersStyled
