'use client'

import './style/gallery.scss'
import { useState } from 'react'
import Image from 'next/image'
import BlurDataUrl from './blurDataUrl'

export default function Gallery({ date }) {
  const [isSelected, setIsSelected] = useState(0)
  const [isOn, setIsOn] = useState(false)

  const handlePrev = () => {
    setIsSelected((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : date.images.length - 1))
  }

  const handleNext = () => {
    setIsSelected((prevIndex) => (prevIndex < date.images.length - 1 ? prevIndex + 1 : 0))
  }

  return (
    <>
      {isOn && (
        <div className="gallery__image--max">
          <button onClick={handlePrev}>&lt;</button>

          <Image
            src={date.images[isSelected].url}
            alt={date.title}
            width="750"
            height="750"
            onClick={() => setIsOn(false)}
            placeholder="blur"
            blurDataURL={BlurDataUrl()}
          />

          <button onClick={handleNext}>&gt;</button>
        </div>
      )}

      <section className="gallery__content">
        {date.images.map((image, i) => (
          <Image
            src={image.url}
            alt={date.title}
            width="450"
            height="450"
            className="gallery__image"
            onClick={() => (setIsSelected(i), setIsOn(true))}
            key={image.id}
            placeholder="blur"
            blurDataURL={BlurDataUrl()}
          />
        ))}
      </section>
    </>
  )
}
