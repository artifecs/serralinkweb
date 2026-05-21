import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nom, email, empresa, missatge, _hp, _ts } = body

  // Honeypot check
  if (_hp && _hp !== '') return NextResponse.json({ ok: true })

  // Time gate
  const elapsed = Date.now() - Number(_ts)
  if (elapsed < 3000 || elapsed > 3600000) {
    return NextResponse.json({ error: 'Invalid timing' }, { status: 429 })
  }

  try {
    // Dynamic import to avoid build error if nodemailer not installed
    const nodemailer = await import('nodemailer')
    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Serra.link Web" <${process.env.SMTP_USER}>`,
      to: 'jordi@serra.link',
      subject: `[Serra.link] Nou contacte de ${nom}`,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p><b>Empresa:</b> ${empresa || '—'}</p><p><b>Missatge:</b><br>${missatge}</p>`,
    })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Error enviant email' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
