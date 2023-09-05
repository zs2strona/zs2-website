'use client'

import { useState } from 'react'
import Image from 'next/image'
import BlurDataUrl from './blurDataUrl'

export default function ScaledImage({ src, alt, width, height, className }) {
  const [isOn, setIsOn] = useState(false)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`pointer ${className || ''}`}
        onClick={() => setIsOn(true)}
        placeholder="blur"
        blurDataURL={BlurDataUrl()}
      />

      {isOn && (
        <div className="scaled-image">
          <Image
            src={src}
            alt={alt}
            width="750"
            height="750"
            onClick={() => setIsOn(false)}
            className="scaled-image__image pointer"
            placeholder="blur"
            blurDataURL={BlurDataUrl()}
          />
        </div>
      )}
    </>
  )
}
