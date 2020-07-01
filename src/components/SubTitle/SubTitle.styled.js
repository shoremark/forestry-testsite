import styled from "styled-components"
import { readableColor, lighten } from "polished"
import { size } from "src/theme"

const minSizes = {
  small: 12,
  medium: 16,
  large: 18,
}
const maxSizes = {
  small: 14,
  medium: 20,
  large: 22,
}

const minMaxSize = size => {
  if (size) {
    return maxSizes[size] - minSizes[size]
  } else {
    return maxSizes.large - minSizes.large
  }
}

const StyledSubTitle = styled.h2`
  color: ${({ theme }) =>
    readableColor(
      theme.primaryBackground,
      theme.secondary,
      lighten(0.2, theme.secondary)
    )};
  font-weight: bold;
  letter-spacing: 0.3em;
  width: 100%;
  margin: 2em 2em 2em 0;
  text-transform: uppercase;
  font-size: calc(
    ${props => minSizes[props.size] || minSizes.large}px +
      ${props => minMaxSize(props.size)} *
      ((100vw - ${size.phoneS}px) / ${size.desktop - size.phoneS})
  );
  small {
    display: block;
    letter-spacing: 0;
    text-transform: none;
    opacity: 0.6;
  }
`

export default StyledSubTitle
