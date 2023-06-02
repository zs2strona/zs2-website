import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Slider({ mainImage, images }) {
  const sliderRef = useRef(null)
  const slideRefs = useRef([])

  useEffect(() => {
    const slider = sliderRef.current
    const sliderItems = slider.querySelectorAll('li')
    const slideCount = sliderItems.length
    const slideWidth = sliderItems[0].offsetWidth
    const sliderUl = slider.querySelector('ul')
    const sliderUlWidth = slideCount * slideWidth
    let currentIndex = 0

    slider.style.width = `${slideWidth}px`
    slider.style.overflow = 'hidden'

    sliderUl.style.width = `${sliderUlWidth}px`

    function moveLeft() {
      currentIndex--
      if (currentIndex < 0) {
        currentIndex = slideCount - 1
      }
      sliderUl.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }

    function moveRight() {
      currentIndex++
      if (currentIndex >= slideCount) {
        currentIndex = 0
      }
      sliderUl.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }

    const prevButton = document.querySelector('.control_prev')
    prevButton.addEventListener('click', moveLeft)

    const nextButton = document.querySelector('.control_next')
    nextButton.addEventListener('click', moveRight)

    slideRefs.current = Array.from(sliderItems)

    return () => {
      prevButton.removeEventListener('click', moveLeft)
      nextButton.removeEventListener('click', moveRight)
    }
  }, [])

  const getSlideElement = (index) => {
    if (index >= 0 && index < slideRefs.current.length) {
      return slideRefs.current[index]
    }
    return null
  }

  return (
    <div className="main-post__slider--function">
      <Image
        src="/slider-left.svg"
        alt="poprzedni"
        width="40"
        height="45"
        className="control_prev"
      />
      <div className="slider" ref={sliderRef}>
        <ul className="slider__list">
          <li>
            <Link href={mainImage} target="_blank">
              <Image src={mainImage} alt={mainImage} width="600" height="600" />
            </Link>
          </li>

          {images.map((image, i) => (
            <li key={i}>
              <Link href={image.url} target="_blank">
                <Image
                  src={image.url}
                  alt={image.url}
                  priority={true}
                  width="600"
                  height="600"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src="/slider-right.svg"
        alt="nastepny"
        width="40"
        height="45"
        className="control_next"
      />
    </div>
  )
}
