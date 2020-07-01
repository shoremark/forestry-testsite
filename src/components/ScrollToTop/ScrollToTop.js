import { useEffect } from "react"

function ScrollToTop({ scrollRef, location }) {
  useEffect(() => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location, scrollRef])

  return null
}

export default ScrollToTop
