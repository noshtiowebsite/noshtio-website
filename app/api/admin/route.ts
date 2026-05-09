import { NextResponse } from 'next/server'
import { timingSafeEqual } from 'node:crypto'

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    const correct = process.env.ADMIN_PASSWORD
    if (!correct) {
      return NextResponse.json({ ok: false, error: 'ADMIN_PASSWORD not configured' }, { status: 500 })
    }
    if (typeof password !== 'string') {
      return NextResponse.json({ ok: false }, { status: 400 })
    }
    const supplied = Buffer.from(password, 'utf8')
    const expected = Buffer.from(correct, 'utf8')
    if (supplied.length !== expected.length) {
      return NextResponse.json({ ok: false }, { status: 401 })
    }
    if (timingSafeEqual(supplied, expected)) {
      return NextResponse.json({ ok: true })
    }
    return NextResponse.json({ ok: false }, { status: 401 })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
