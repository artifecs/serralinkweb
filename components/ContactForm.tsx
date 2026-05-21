'use client'
import { useState, useRef, useEffect } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')
  const tsRef = useRef<number>(0)

  useEffect(() => {
    tsRef.current = Date.now()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const nom = (form.elements.namedItem('nom') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const empresa = (form.elements.namedItem('empresa') as HTMLInputElement).value.trim()
    const missatge = (form.elements.namedItem('missatge') as HTMLTextAreaElement).value.trim()
    const hp = (form.elements.namedItem('website') as HTMLInputElement).value

    if (hp) return // honeypot

    const elapsed = Date.now() - tsRef.current
    if (elapsed < 3000) {
      setStatus('error')
      setMsg('Si us plau, espera un moment i torna-ho a intentar.')
      return
    }

    if (!nom || !email || !missatge) {
      setStatus('error')
      setMsg('Si us plau, omple tots els camps obligatoris.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMsg("L'adreça de correu electrònic no és vàlida.")
      return
    }

    setStatus('sending')
    setMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, empresa, missatge, _hp: hp, _ts: tsRef.current }),
      })
      const data = await res.json()
      if (data.ok) {
        setStatus('success')
        setMsg('✓ Missatge enviat correctament. Et contactarem aviat!')
        form.reset()
        tsRef.current = Date.now()
      } else {
        setStatus('error')
        setMsg(data.error || 'Error en enviar el missatge.')
      }
    } catch {
      setStatus('error')
      setMsg('Error de connexió. Escriu-nos directament a jordi@serra.link.')
    }
  }

  return (
    <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
      {/* Honeypot */}
      <div className="hp-trap" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input type="text" id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-row">
        <label htmlFor="cf-nom" className="sr-only">Nom</label>
        <input type="text" id="cf-nom" name="nom" placeholder="Nom *" required autoComplete="name" />
        <label htmlFor="cf-email" className="sr-only">Email</label>
        <input type="email" id="cf-email" name="email" placeholder="Email *" required autoComplete="email" />
      </div>
      <label htmlFor="cf-empresa" className="sr-only">Empresa</label>
      <input type="text" id="cf-empresa" name="empresa" placeholder="Empresa (opcional)" autoComplete="organization" />
      <label htmlFor="cf-missatge" className="sr-only">Missatge</label>
      <textarea id="cf-missatge" name="missatge" placeholder="Explica'ns el teu projecte..." required></textarea>

      {msg && (
        <div className={`form-msg ${status === 'success' ? 'success' : 'error'}`}>
          {msg}
        </div>
      )}

      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviant...' : 'Enviar missatge →'}
      </button>
    </form>
  )
}
