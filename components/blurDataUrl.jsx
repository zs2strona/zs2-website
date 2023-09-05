export default function BlurDataUrl() {
  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <rect preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' stroke-width='3' stroke='#a9a9a9' fill='#787878' />
    </svg>
  `

  const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}
