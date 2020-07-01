import React from "react"
import { Link } from "gatsby"
import HeroStyled from "./Hero.styled"
import HeroShape from "./static/home-hero-shape.svg"
import HeroBG from "./static/home-bg.jpg"

const Hero = () => {
  return (
    <HeroStyled className="Hero">
      <header className="video-header my-3">
        <div className="hero-shape-container d-none d-sm-block">
          <HeroShape alt="Simplify Your Video Workflow and Elevate your Online Presence" />
        </div>
        <div
          className="video-box clipHomeHero"
          style={{ backgroundImage: `url('${HeroBG}')` }}
        >
          <video className="background-video" loop muted autoPlay playsInline>
            <source
              src="https://storage.sardius.media/D405e204616AF07/static/356ea4/Eb0cF98f1E2e.mp4"
              type="video/mp4"
            />
          </video>
          <div className="video-filter-overlay" />
        </div>
        <div className="hero-content">
          <h1>Simplify Your Video Workflow. Elevate Your Online Presence.</h1>
          <Link className="btn btn-primary btn-lg" to="/solutions">
            Learn More <span className="btn-line" />
          </Link>
        </div>
      </header>
    </HeroStyled>
  )
}

export default Hero
