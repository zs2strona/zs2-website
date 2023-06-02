import Image from 'next/image'
import { useState } from 'react'

export default function Availability() {
  const [isToggleAVOn, setIsToggleAVOn] = useState(false)
  const [isCnOn, setIsCnOn] = useState(false)
  const [isUpOn, setIsUpOn] = useState(false)
  const [isDwOn, setIsDwOn] = useState(false)

  const Reset = () => {
    isCnOn && ContrastClass()
    isUpOn && UpClass()
    isDwOn && DwClass()

    setIsCnOn(false)
    setIsUpOn(false)
    setIsDwOn(false)
  }

  const ContrastClick = () => {
    setIsCnOn(!isCnOn)
    ContrastClass()
  }

  const UpClick = () => {
    setIsUpOn(!isUpOn)
    UpClass()
  }

  const DwClick = () => {
    setIsDwOn(!isDwOn)
    DwClass()
  }

  const ContrastClass = () => {
    if (isCnOn) {
      document.body.classList.remove('contrast-mode')
    } else {
      document.body.classList.add('contrast-mode')
    }
  }

  const UpClass = () => {
    if (isUpOn) {
      document.body.classList.remove('font-up-mode')
    } else {
      document.body.classList.add('font-up-mode')
    }
  }

  const DwClass = () => {
    if (isDwOn) {
      document.body.classList.remove('links-underline')
    } else {
      document.body.classList.add('links-underline')
    }
  }

  return (
    <>
      <section className="availability">
        <Image
          src="accessibility.svg"
          className={isToggleAVOn ? 'availability__icon--max' : 'availability__icon'}
          alt="dostępność"
          width="50"
          height="50"
          onClick={() => setIsToggleAVOn(!isToggleAVOn)}
          priority={true}
        />
        <div className={isToggleAVOn ? 'availability--on' : 'availability--off'}>
          <ul>
            <li onClick={UpClick}>Powieksz tekst</li>
            <li onClick={DwClick}>Pokaż linki</li>
            <li onClick={ContrastClick}>Wysoki kontrast</li>
            <li onClick={Reset}>Reset</li>
          </ul>
        </div>
      </section>
    </>
  )
}
