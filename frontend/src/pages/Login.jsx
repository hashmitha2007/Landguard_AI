
import { useState } from 'react'
import {
  Mountain,
  UserRound,
  ShieldCheck,
  LockKeyhole,
  ArrowRight,
  Activity,
  MapPin,
  CloudRain
} from 'lucide-react'

export default function Login({ onLogin }) {
  const [role, setRole] = useState('citizen')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    setError('')

    if (role === 'citizen') {
      if (username.trim() === 'citizen' && password === '1234') {
        onLogin('citizen')
      } else {
        setError('Invalid citizen credentials. Please check your username and password.')
      }
      return
    }

    if (username.trim() === 'officer' && password === 'admin123') {
      onLogin('officer')
    } else {
      setError('Invalid officer credentials. Please check your username and password.')
    }
  }

  return (
    <main className="min-h-screen bg-base-950 text-slate-100 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-contour opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left information section */}
        <section className="hidden lg:block">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <Mountain size={27} />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-wide text-white">
                LANDGUARD AI
              </h1>
              <p className="text-xs text-muted tracking-widest uppercase">
                Early Warning System
              </p>
            </div>
          </div>

          <p className="text-accent text-xs font-mono tracking-[0.25em] uppercase mb-4">
            Intelligent Disaster Monitoring
          </p>

          <h2 className="font-display text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
            Monitoring risks.
            <br />
            <span className="text-accent">Protecting lives.</span>
          </h2>

          <p className="text-slate-400 text-base leading-7 max-w-lg mb-10">
            An intelligent landslide monitoring platform designed to
            support early risk assessment, location-based monitoring
            and faster disaster response across Northeast India.
          </p>

          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="bg-base-850 border border-line rounded-xl p-4">
              <Activity className="text-accent mb-3" size={21} />
              <p className="text-white text-sm font-semibold">Risk Analysis</p>
              <p className="text-faint text-xs mt-1">AI-assisted insights</p>
            </div>

            <div className="bg-base-850 border border-line rounded-xl p-4">
              <MapPin className="text-accent mb-3" size={21} />
              <p className="text-white text-sm font-semibold">Live Mapping</p>
              <p className="text-faint text-xs mt-1">Location monitoring</p>
            </div>

            <div className="bg-base-850 border border-line rounded-xl p-4">
              <CloudRain className="text-accent mb-3" size={21} />
              <p className="text-white text-sm font-semibold">Weather Data</p>
              <p className="text-faint text-xs mt-1">Environmental factors</p>
            </div>
          </div>

          <p className="text-faint text-xs mt-10">
            NORTHEAST INDIA · LANDSLIDE EARLY WARNING & MONITORING
          </p>
        </section>

        {/* Login card */}
        <section className="w-full max-w-md mx-auto">
          <div className="lg:hidden flex items-center justify-center gap-3 mb-7">
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <Mountain size={25} />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold text-white">
                LANDGUARD AI
              </h1>
              <p className="text-xs text-muted">Early Warning System</p>
            </div>
          </div>

          <div className="bg-base-850 border border-line rounded-2xl p-6 sm:p-8 shadow-panel">
            <div className="mb-7">
              <p className="text-accent text-xs font-mono tracking-widest uppercase mb-2">
                Secure Access
              </p>
              <h2 className="font-display text-3xl font-bold text-white">
                Welcome back
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Sign in to access your monitoring dashboard.
              </p>
            </div>

            {/* Role selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => {
                  setRole('citizen')
                  setError('')
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-all ${
                  role === 'citizen'
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-line bg-base-900 text-slate-400 hover:text-white'
                }`}
              >
                <UserRound size={18} />
                Citizen
              </button>

              <button
                type="button"
                onClick={() => {
                  setRole('officer')
                  setError('')
                }}
                className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-sm font-semibold transition-all ${
                  role === 'officer'
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-line bg-base-900 text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck size={18} />
                Officer
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder={
                    role === 'citizen'
                      ? 'Enter your citizen username'
                      : 'Enter your officer username'
                  }
                  autoComplete="username"
                  required
                  className="w-full rounded-xl border border-line bg-base-900 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-200 mb-2">
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-line bg-base-900 pl-11 pr-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold text-base-950 hover:brightness-110 transition-all"
              >
                Sign In
                <ArrowRight size={18} />
              </button>
            </form>

            <div className="border-t border-line mt-7 pt-5">
              <p className="text-xs text-slate-400 font-semibold mb-3">
                DEMO ACCESS
              </p>
              <div className="space-y-2 text-xs text-slate-400">
                <p>
                  Citizen: <span className="text-slate-200">citizen / 1234</span>
                </p>
                <p>
                  Officer: <span className="text-slate-200">officer / admin123</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-faint mt-5">
            LandGuard AI · Northeast India
          </p>
        </section>
      </div>
    </main>
  )
}
