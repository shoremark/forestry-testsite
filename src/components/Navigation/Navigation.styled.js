import styled from "styled-components"
import { device } from "src/theme"

const NavigationStyled = styled.div`
  font-family: Oswald;
  text-transform: uppercase;
  width: 90vw;
  max-width: 90vw;
  .navbar {
    padding: 1rem;
  }
  .navbar-collapse {
    justify-content: flex-end;
    &.show {
      padding: 20px;
      .nav-item,
      .btn-primary {
        margin: 10px;
        width: 80%;
        text-align: center;
      }
      @media ${device.laptop} {
        .nav-item,
        .btn-primary {
          margin: 10px;
          width: auto;
          text-align: auto;
        }
      }
    }
  }
  .nav-item {
    padding: 8px 0.8rem !important;
    margin: 0 5px;
    color: #111 !important;
  }
  .dropdown-toggle {
    color: #111 !important;
  }
  .dropdown.show {
    background: #f2f2f2;
    .dropdown-menu {
      border: none;
      background: #f2f2f2;
      text-transform: none;
    }
  }

  .navbar-toggler {
    border: 0;
    padding: 0;
    font-size: 1.5rem;
    background: transparent !important;
    z-index: 5000;
    &.open {
      .top-bar {
        transform: rotate(45deg);
      }
      .middle-bar {
        opacity: 0;
        margin: 7px 0;
      }
      .bottom-bar {
        transform: rotate(-45deg);
      }
    }

    .icon-bar {
      width: 32px;
      height: 2px;
      background-color: $primary;
      display: block;
      transition: all 0.2s;
    }

    .top-bar {
      transform: rotate(0);
      transform-origin: 10% 10%;
    }

    .middle-bar {
      opacity: 1;
      margin: 7px 0;
    }

    .bottom-bar {
      transform: rotate(0);
      transform-origin: 10% 90%;
    }
  }

  .navbar-nav {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`
export default NavigationStyled
