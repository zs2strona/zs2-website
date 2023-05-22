'use client'

import { useState } from 'react'
import Image from 'next/image'
import './slider.scss'

export default function Slider({ Img }) {
  const Imgg = '/Placeholder.png'
  const slideContent = [Img, Imgg, Img, Imgg, Img, Imgg]
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideContent.length - 1 : prevSlide - 1
    )
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideContent.length)
  }

  const getPreviousIndex = (currentIndex) => {
    return currentIndex === 0 ? slideContent.length - 1 : currentIndex - 1
  }

  const getNextIndex = (currentIndex) => {
    return (currentIndex + 1) % slideContent.length
  }

  const previousSlide = slideContent[getPreviousIndex(currentSlide)]
  const currentSlideContent = slideContent[currentSlide]
  const nextSlide = slideContent[getNextIndex(currentSlide)]

  return (
    <div className="slider-container">
      <Image
        src="/Arrow.png"
        alt=""
        width="50"
        height="100"
        onClick={handlePreviousSlide}
        className="arrow arrow--rivers"
      />

      <Image className="slide" src={previousSlide} alt="" width="500" height="500" />
      <Image
        className="slide current"
        src={currentSlideContent}
        alt=""
        width="500"
        height="500"
      />
      <Image className="slide" src={nextSlide} alt="" width="500" height="500" />

      <Image
        src="/Arrow.png"
        alt=""
        width="50"
        height="100"
        onClick={handleNextSlide}
        className="arrow"
      />
    </div>
  )
}
