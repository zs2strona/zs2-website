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
        <div className="scaled-image pointer" onClick={() => setIsOn(false)}>
          <Image
            src={src}
            alt={alt}
            width="750"
            height="750"
            className="scaled-image__image"
            placeholder="blur"
            blurDataURL={BlurDataUrl()}
          />
        </div>
      )}
    </>
  )
}
