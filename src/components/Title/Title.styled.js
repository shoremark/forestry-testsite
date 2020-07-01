import styled from "styled-components"
import { readableColor } from "polished"
import { size } from "src/theme"

const minSizes = {
  small: 18,
  medium: 35,
  large: 40,
}
const maxSizes = {
  small: 26,
  medium: 50,
  large: 90,
}

const minMaxSize = size => {
  if (size) {
    return maxSizes[size] - minSizes[size]
  } else {
    return maxSizes.large - minSizes.large
  }
}

const StyledTitle = styled.h1`
  font-family: ${({ theme }) => theme.headingFontFamily || "Exodus Demo"};
  font-weight: normal;
  line-height: ${props => (props.size === "medium" ? "120%" : "150%")};
  color: ${({ theme }) =>
    readableColor(theme.primaryBackground, theme.textDark, theme.textLight)};
  font-size: calc(
    ${props => minSizes[props.size] || minSizes.large}px +
      ${props => minMaxSize(props.size)} *
      ((100vw - ${size.phoneS}px) / ${size.desktop - size.phoneS})
  );
`

export default StyledTitle
