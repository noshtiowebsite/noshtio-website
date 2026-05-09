'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import {
  BarChart3,
  Users,
  MessageSquare,
  Smartphone,
  LogOut,
  Loader2,
  Eye,
  Download,
  Apple,
  ShieldAlert,
} from 'lucide-react'

// ── Types ──────────────────────────────────────────────────────────────────

interface VendorLead {
  id: string
  fullName: string
  phone: string
  city: string
  category: string
  monthlyOrders: string
  createdAt: string
}

interface Enquiry {
  id: string
  fullName: string
  email: string
  subject: string
  message: string
  refNumber: string
  createdAt: string
  status: string
}

interface AppDownload {
  id: string
  platform: string
  timestamp: string
  page: string
}

type Tab = 'overview' | 'leads' | 'enquiries' | 'downloads'

// ── Helpers ────────────────────────────────────────────────────────────────

function tsToString(val: unknown): string {
  if (!val) return '—'
  if (val instanceof Timestamp) {
    return val.toDate().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
  if (typeof val === 'string') {
    const d = new Date(val)
    return isNaN(d.getTime()) ? '—' : d.toLocaleDateString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  }
  return '—'
}

function truncate(s: string, n = 80) {
  return s.length > n ? s.slice(0, n) + '…' : s
}

// ── Sub-components ─────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string
  value: number | null
  icon: React.ElementType
  accent: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-sm text-white/50">{label}</p>
      <p className="mt-1 font-display text-4xl font-black text-white">
        {value === null ? <span className="text-white/20 text-2xl">—</span> : value.toLocaleString('en-IN')}
      </p>
    </div>
  )
}

function TabBtn({
  active,
  onClick,
  icon: Icon,
  label,
  badge,
}: {
  active: boolean
  onClick: () => void
  icon: React.ElementType
  label: string
  badge?: number | null
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
        active
          ? 'bg-gold text-navy shadow-lg shadow-gold/20'
          : 'text-white/60 hover:bg-white/8 hover:text-white'
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
      {label}
      {badge !== undefined && badge !== null && (
        <span
          className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${
            active ? 'bg-navy/20 text-navy' : 'bg-white/10 text-white/50'
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  )
}

const TH = ({ children }: { children: React.ReactNode }) => (
  <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-white/40">
    {children}
  </th>
)

const TD = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <td className={`px-4 py-3 text-sm text-white/70 ${className}`}>{children}</td>
)

function EmptyRow({ cols, message }: { cols: number; message: string }) {
  return (
    <tr>
      <td colSpan={cols} className="py-12 text-center text-sm text-white/30">
        {message}
      </td>
    </tr>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function AdminDashboard() {
  // Auth state
  const [password, setPassword] = useState('')
  const [isAuthed, setIsAuthed] = useState(false)
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState('')

  // Tab
  const [activeTab, setActiveTab] = useState<Tab>('overview')

  // Overview counters (real-time)
  const [visits, setVisits] = useState<number | null>(null)
  const [downloads, setDownloads] = useState<number | null>(null)

  // Collection data (real-time)
  const [leads, setLeads] = useState<VendorLead[]>([])
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [appDownloads, setAppDownloads] = useState<AppDownload[]>([])

  // Restore session on mount
  useEffect(() => {
    if (sessionStorage.getItem('nosh_admin') === '1') setIsAuthed(true)
  }, [])

  // Firestore real-time listeners — active only when authenticated
  useEffect(() => {
    if (!isAuthed) return

    const unsubs: (() => void)[] = [
      // Counter docs
      onSnapshot(doc(db, 'counters', 'visits'), (s) =>
        setVisits(s.data()?.count ?? 0)
      ),
      onSnapshot(doc(db, 'counters', 'downloads'), (s) =>
        setDownloads(s.data()?.count ?? 0)
      ),
      // Vendor leads
      onSnapshot(
        query(collection(db, 'vendor_leads'), orderBy('createdAt', 'desc')),
        (s) =>
          setLeads(
            s.docs.map((d) => {
              const data = d.data()
              return {
                id: d.id,
                fullName: data.fullName ?? '',
                phone: data.phone ?? '',
                city: data.city ?? '',
                category: data.category ?? '',
                monthlyOrders: data.monthlyOrders ?? '',
                createdAt: tsToString(data.createdAt),
              }
            })
          )
      ),
      // Enquiries
      onSnapshot(
        query(collection(db, 'enquiries'), orderBy('createdAt', 'desc')),
        (s) =>
          setEnquiries(
            s.docs.map((d) => {
              const data = d.data()
              return {
                id: d.id,
                fullName: data.fullName ?? '',
                email: data.email ?? '',
                subject: data.subject ?? '',
                message: data.message ?? '',
                refNumber: data.refNumber ?? '',
                createdAt: tsToString(data.createdAt),
                status: data.status ?? 'new',
              }
            })
          )
      ),
      // App downloads
      onSnapshot(
        query(collection(db, 'app_downloads'), orderBy('timestamp', 'desc')),
        (s) =>
          setAppDownloads(
            s.docs.map((d) => {
              const data = d.data()
              return {
                id: d.id,
                platform: data.platform ?? '—',
                timestamp: tsToString(data.timestamp),
                page: data.page ?? '—',
              }
            })
          ),
        () => {
          // Fallback if index not built yet — fetch without ordering
          onSnapshot(collection(db, 'app_downloads'), (s) =>
            setAppDownloads(
              s.docs.map((d) => {
                const data = d.data()
                return {
                  id: d.id,
                  platform: data.platform ?? '—',
                  timestamp: tsToString(data.timestamp),
                  page: data.page ?? '—',
                }
              })
            )
          )
        }
      ),
    ]

    return () => unsubs.forEach((u) => u())
  }, [isAuthed])

  // ── Login handler ────────────────────────────────────────────────────────
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError('')
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        sessionStorage.setItem('nosh_admin', '1')
        setIsAuthed(true)
      } else {
        setAuthError('Incorrect password. Please try again.')
      }
    } catch {
      setAuthError('Connection error. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('nosh_admin')
    setIsAuthed(false)
    setPassword('')
    setActiveTab('overview')
  }

  // ── Login screen ─────────────────────────────────────────────────────────
  if (!isAuthed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-4">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3">
            <Image
              src="/images/Noshtio_Logo.png"
              alt="noshtio"
              width={140}
              height={48}
              style={{ width: 'auto', height: '44px' }}
              priority
            />
            <div className="mt-2 flex items-center gap-2 text-white/40">
              <ShieldAlert className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium">Admin Access Only</span>
            </div>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            <h1 className="mb-6 font-display text-xl font-bold text-white">
              Admin Dashboard
            </h1>

            <label
              htmlFor="admin-password"
              className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/40"
            >
              Password
            </label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/20"
            />

            {authError && (
              <p className="mt-2 text-xs text-red-400" role="alert">
                {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={authLoading || !password}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-400 disabled:opacity-60"
            >
              {authLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Verifying…
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Dashboard ────────────────────────────────────────────────────────────
  const iosCount = appDownloads.filter((d) => d.platform === 'ios').length
  const androidCount = appDownloads.filter((d) => d.platform === 'android').length

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-navy/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-gold" aria-hidden="true" />
            <h1 className="font-display text-base font-bold text-white">
              noshtio <span className="text-gold">Admin</span>
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm text-white/60 transition-all hover:border-white/30 hover:text-white"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          <TabBtn
            active={activeTab === 'overview'}
            onClick={() => setActiveTab('overview')}
            icon={BarChart3}
            label="Overview"
          />
          <TabBtn
            active={activeTab === 'leads'}
            onClick={() => setActiveTab('leads')}
            icon={Users}
            label="Vendor Leads"
            badge={leads.length}
          />
          <TabBtn
            active={activeTab === 'enquiries'}
            onClick={() => setActiveTab('enquiries')}
            icon={MessageSquare}
            label="Enquiries"
            badge={enquiries.length}
          />
          <TabBtn
            active={activeTab === 'downloads'}
            onClick={() => setActiveTab('downloads')}
            icon={Smartphone}
            label="App Downloads"
            badge={appDownloads.length}
          />
        </div>

        {/* ── Tab: Overview ── */}
        {activeTab === 'overview' && (
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-white/30">
              Live stats — updates in real time
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                label="Total Visits"
                value={visits}
                icon={Eye}
                accent="bg-electricBlue/20 text-electricBlue"
              />
              <StatCard
                label="App Download Clicks"
                value={downloads}
                icon={Download}
                accent="bg-gold/20 text-gold"
              />
              <StatCard
                label="Vendor Leads"
                value={leads.length}
                icon={Users}
                accent="bg-purple-500/20 text-purple-300"
              />
              <StatCard
                label="Enquiries"
                value={enquiries.length}
                icon={MessageSquare}
                accent="bg-emerald-500/20 text-emerald-300"
              />
            </div>

            {/* Quick breakdown */}
            {appDownloads.length > 0 && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="mb-4 text-sm font-semibold text-white/50">
                  App Download Platform Split
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <Apple className="h-5 w-5 text-white/60" aria-hidden="true" />
                    <div>
                      <p className="font-display text-2xl font-bold text-white">{iosCount}</p>
                      <p className="text-xs text-white/40">iOS clicks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-gold/70" aria-hidden="true" />
                    <div>
                      <p className="font-display text-2xl font-bold text-white">{androidCount}</p>
                      <p className="text-xs text-white/40">Android clicks</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Tab: Vendor Leads ── */}
        {activeTab === 'leads' && (
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              {leads.length} lead{leads.length !== 1 ? 's' : ''} — newest first
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[700px]">
                <thead className="border-b border-white/10 bg-white/5">
                  <tr>
                    <TH>Name</TH>
                    <TH>Phone</TH>
                    <TH>City</TH>
                    <TH>Category</TH>
                    <TH>Monthly Orders</TH>
                    <TH>Date</TH>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {leads.length === 0 ? (
                    <EmptyRow cols={6} message="No vendor leads yet." />
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id} className="transition-colors hover:bg-white/3">
                        <TD className="font-medium text-white">{lead.fullName}</TD>
                        <TD>
                          <a
                            href={`tel:${lead.phone}`}
                            className="font-mono text-electricBlue hover:underline"
                          >
                            {lead.phone}
                          </a>
                        </TD>
                        <TD>{lead.city}</TD>
                        <TD>
                          <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold">
                            {lead.category}
                          </span>
                        </TD>
                        <TD>{lead.monthlyOrders}</TD>
                        <TD className="text-white/40">{lead.createdAt}</TD>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Tab: Enquiries ── */}
        {activeTab === 'enquiries' && (
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              {enquiries.length} enquir{enquiries.length !== 1 ? 'ies' : 'y'} — newest first
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[900px]">
                <thead className="border-b border-white/10 bg-white/5">
                  <tr>
                    <TH>Name</TH>
                    <TH>Email</TH>
                    <TH>Subject</TH>
                    <TH>Message</TH>
                    <TH>Reference</TH>
                    <TH>Date</TH>
                    <TH>Status</TH>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {enquiries.length === 0 ? (
                    <EmptyRow cols={7} message="No enquiries yet." />
                  ) : (
                    enquiries.map((enq) => (
                      <tr key={enq.id} className="transition-colors hover:bg-white/3">
                        <TD className="font-medium text-white">{enq.fullName}</TD>
                        <TD>
                          <a
                            href={`mailto:${enq.email}`}
                            className="text-electricBlue hover:underline"
                          >
                            {enq.email}
                          </a>
                        </TD>
                        <TD>{enq.subject}</TD>
                        <TD>
                          <span title={enq.message}>{truncate(enq.message)}</span>
                        </TD>
                        <TD>
                          <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-white/60">
                            {enq.refNumber}
                          </span>
                        </TD>
                        <TD className="text-white/40">{enq.createdAt}</TD>
                        <TD>
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              enq.status === 'new'
                                ? 'bg-emerald-500/15 text-emerald-300'
                                : 'bg-white/10 text-white/50'
                            }`}
                          >
                            {enq.status}
                          </span>
                        </TD>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── Tab: App Downloads ── */}
        {activeTab === 'downloads' && (
          <div>
            {/* Platform summary */}
            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <Apple className="h-5 w-5 text-white/50" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">{iosCount}</p>
                  <p className="text-xs text-white/40">iOS Clicks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <Smartphone className="h-5 w-5 text-gold/70" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">{androidCount}</p>
                  <p className="text-xs text-white/40">Android Clicks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <Download className="h-5 w-5 text-electricBlue/70" aria-hidden="true" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">{appDownloads.length}</p>
                  <p className="text-xs text-white/40">Total Clicks</p>
                </div>
              </div>
            </div>

            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/30">
              All click events — newest first
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[500px]">
                <thead className="border-b border-white/10 bg-white/5">
                  <tr>
                    <TH>Platform</TH>
                    <TH>Date</TH>
                    <TH>Page</TH>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {appDownloads.length === 0 ? (
                    <EmptyRow cols={3} message="No download clicks tracked yet." />
                  ) : (
                    appDownloads.map((dl) => (
                      <tr key={dl.id} className="transition-colors hover:bg-white/3">
                        <TD>
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-xs font-semibold ${
                              dl.platform === 'ios'
                                ? 'bg-white/10 text-white'
                                : 'bg-gold/15 text-gold'
                            }`}
                          >
                            {dl.platform === 'ios' ? (
                              <Apple className="h-3 w-3" aria-hidden="true" />
                            ) : (
                              <Smartphone className="h-3 w-3" aria-hidden="true" />
                            )}
                            {dl.platform === 'ios' ? 'iOS' : 'Android'}
                          </span>
                        </TD>
                        <TD className="text-white/40">{dl.timestamp}</TD>
                        <TD className="font-mono text-xs text-white/50">{dl.page}</TD>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
