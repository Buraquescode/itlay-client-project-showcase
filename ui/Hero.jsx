import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #065f46 100%)' }}>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(59,130,246,0.10)' }} />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{ background: 'rgba(16,185,129,0.10)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[-600px] h-[-600px] rounded-full blur-3xl"
        style={{ background: 'rgba(99,102,241,0.05)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Pakistan's #1 Italy Study Consultant
            </span>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
              Your Dream of{' '}
              <span style={{
                background: 'linear-gradient(135deg, #34d399, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Studying in Europe
              </span>{' '}
              Starts Here
            </h1>

            <p className="text-xl mb-10 leading-relaxed max-w-xl"
              style={{ color: 'rgba(255,255,255,0.65)' }}>
              Expert guidance for Pakistani students seeking Italian university admissions,
              regional scholarships, and study visas. Hundreds of success stories — yours is next.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link to="/study-italy"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                Study in Italy <ArrowRight size={18} />
              </Link>
              <Link to="/universities"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all border backdrop-blur"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                View Scholarships <ChevronRight size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {[
                { value: '500+', label: 'Students Guided' },
                { value: '54',   label: 'Universities Listed' },
                { value: '98%',  label: 'Visa Success Rate' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — floating cards */}
          <div className="hidden lg:block relative h-[-480px]">

            {/* Main card */}
            <div className="absolute top-0 right-0 w-80 rounded-2xl p-6 border shadow-2xl"
              style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}>🎓</div>
                <div>
                  <div className="font-semibold text-white text-sm">Regional Scholarships</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>54 Universities in Italy</div>
                </div>
              </div>
              {[
                { label: 'Tuition Fee',   val: 'Fully Covered', color: '#34d399' },
                { label: 'Monthly Grant', val: '€200 – €400',    color: '#60a5fa' },
                { label: 'Housing',       val: 'Included',       color: '#a78bfa' },
                { label: 'IELTS Needed',  val: 'Not Required',   color: '#34d399' },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center py-2.5 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{r.label}</span>
                  <span className="text-sm font-semibold" style={{ color: r.color }}>{r.val}</span>
                </div>
              ))}
            </div>

            {/* YouTube card */}
            <div className="absolute bottom-16 left-0 w-64 rounded-2xl p-5 border shadow-xl"
              style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                  <Play size={16} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Hussain Silat</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>YouTube Channel</div>
                </div>
              </div>
              <div className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Step-by-step guides, visa tips & success stories
              </div>
            </div>

            {/* Success badge */}
            <div className="absolute bottom-0 right-8 rounded-2xl px-5 py-3 border flex items-center gap-3"
              style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.3)' }}>
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-white font-semibold text-sm">Visa Approved!</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Ahmed from Lahore — Bologna</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}