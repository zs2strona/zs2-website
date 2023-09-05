'use client'

import './style/availability.scss'
import { useState } from 'react'
import Image from 'next/image'

export default function Availability() {
  const [isOn, setIsOn] = useState(false)

  const Reset = () => {
    document.body.classList.remove('large-font', 'hight-contrast', 'link-on')
  }

  return (
    <section className={`availability ${isOn ? 'availability--on' : ''}`}>
      <Image
        src="/accessibility.svg"
        className="availability__icon"
        alt="dostępność"
        width="50"
        height="50"
        onClick={() => setIsOn(!isOn)}
        priority={true}
      />

      <ul className="availability__menu">
        <li onClick={() => document.body.classList.toggle('large-font')}>
          Powieksz tekstu
        </li>
        <li onClick={() => document.body.classList.toggle('hight-contrast')}>
          Wysoki kontrast
        </li>
        <li onClick={() => document.body.classList.toggle('link-on')}>
          Pokazanie linków
        </li>
        <li onClick={Reset}>Reset</li>
      </ul>
    </section>
  )
}
