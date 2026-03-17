import { useState, useCallback, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import GrainyGradient from './GrainyGradient'

let rippleIdCounter = 0

export default function HeroSection() {
  const [ripples, setRipples] = useState([])
  const containerRef = useRef(null)
  const shaderTimeRef = useRef(0)

  const handleClick = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    // Normalize to aspect-corrected UV space matching the shader's:
    // uv = (fragCoord - 0.5 * resolution) / resolution.y
    const normX = (x / rect.width - 0.5) * (rect.width / rect.height)
    const normY = -(y / rect.height - 0.5)

    const newRipple = { id: ++rippleIdCounter, normX, normY, startTime: shaderTimeRef.current }
    setRipples(prev => [...prev, newRipple].slice(-10))

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 2000)
  }, [])

  return (
    <header
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full rounded-lg overflow-hidden flex flex-col items-center justify-end h-160 md:h-200 shrink-0 cursor-crosshair"
    >
      {/* Shader canvas */}
      <div className="absolute inset-0">
        <Canvas
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: false }}
          dpr={Math.min(window.devicePixelRatio, 2)}
        >
          <GrainyGradient ripples={ripples} onTimeUpdate={(t) => { shaderTimeRef.current = t }} />
        </Canvas>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Wordmark */}
      <div className="relative z-10 w-full px-4 pb-5 md:px-5 pointer-events-none">
        <img src="/src/images/logo.svg" alt="Mayukh Saha" className="w-full" />
      </div>
    </header>
  )
}
