'use client'
import { useEffect } from 'react'

export default function ThemeProvider() {
  useEffect(() => {
    const saved = localStorage.getItem('serra-theme')
    if (saved) document.documentElement.setAttribute('data-theme', saved)
  }, [])
  return null
}
