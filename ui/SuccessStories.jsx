import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faMapPin,
  faGraduationCap,
  faQuoteLeft,
  faTrophy,
  faBuildingColumns,
  faCircleCheck,
  faPaperPlane,
  faLock,
  faCheck,
  faXmark,
  faShield,
  faSpinner,
  faClockRotateLeft,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

// ─── CONFIG ───────────────────────────────────────────────────────────────────
// Change this password to something secret before deploying
const ADMIN_PASSWORD = 'bahudin2025'

const ITALIAN_UNIS = [
  'University of Bologna','Politecnico di Milano','University of Turin',
  'University of Padua','Sapienza University of Rome','University of Florence',
  'University of Milan','University of Pavia','University of Genoa',
  'University of Pisa','University of Siena','University of Naples Federico II',
  'University of Palermo','University of Catania','University of Messina',
  'University of Cagliari','University of Trieste','University of Udine',
  'Polytechnic University of Turin','University of Ferrara',
  'University of Modena','University of Parma','University of Perugia',
  'University of Salerno','University of Verona','Ca\'Foscari University of Venice',
  'Roma Tre University','Tor Vergata University of Rome','University of Brescia',
  'University of Trento','University of Calabria','University of L\'Aquila',
  'Marche Polytechnic University','University of Camerino','University of Bari Aldo Moro',
  'University of Salento','University of Foggia','University of Sassari',
  'University of Teramo','University of Basilicata','University of Insubria',
  'University of Bergamo','University of Macerata','University of Urbino',
  'University of Cassino','University of Tuscia','University of Bozen-Bolzano',
  'Foro Italico University of Rome','D\'Annunzio University – Chieti and Pescara',
  'University of Campania Luigi Vanvitelli','University of Naples Parthenope',
  'Polytechnic University of Bari','University of Eastern Piedmont',
]

const DEGREE_COLORS = {
  Bachelor: { bg: '#dbeafe', text: '#1e40af' },
  Master:   { bg: '#d1fae5', text: '#065f46' },
  PhD:      { bg: '#ede9fe', text: '#5b21b6' },
}

const stats = [
  { value: '500+', label: 'Students Guided',      icon: faGraduationCap },
  { value: '53',   label: 'Universities Covered', icon: faBuildingColumns },
  { value: '98%',  label: 'Visa Approval Rate',   icon: faCircleCheck },
  { value: '5★',   label: 'Average Rating',       icon: faStar },
]

// ─── STORAGE HELPERS ──────────────────────────────────────────────────────────
const STORAGE_KEY = 'success_stories_reviews'

async function loadReviews() {
  try {
    // Use standard localStorage instead of window.storage
    const result = localStorage.getItem(STORAGE_KEY)
    return result ? JSON.parse(result) : []
  } catch (e) {
    console.error('Error loading reviews:', e)
    return []
  }
}

async function saveReviews(reviews) {
  try {
    // Use standard localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
  } catch (e) {
    console.error('Storage error:', e)
  }
}

// ─── STAR PICKER ──────────────────────────────────────────────────────────────
function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0)
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className="text-2xl transition-transform hover:scale-110 focus:outline-none"
          style={{ color: n <= (hover || value) ? '#f59e0b' : '#d1d5db', background: 'none', border: 'none', cursor: 'pointer', padding: '0 2px' }}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

// ─── REVIEW CARD ──────────────────────────────────────────────────────────────
function ReviewCard({ review, adminMode, onApprove, onReject }) {
  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        borderColor: adminMode && review.status === 'pending' ? '#fbbf24' : '#f1f5f9',
        boxShadow: adminMode && review.status === 'pending' ? '0 0 0 2px #fef3c7' : undefined,
      }}
    >
      <div className="h-1.5" style={{ background: 'linear-gradient(90deg,#2563eb,#059669)' }} />
      <div className="p-6">
        {/* Status badge (admin only) */}
        {adminMode && (
          <div className="flex justify-between items-center mb-3">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: review.status === 'pending' ? '#fef3c7' : review.status === 'approved' ? '#d1fae5' : '#fee2e2',
                color:      review.status === 'pending' ? '#92400e' : review.status === 'approved' ? '#065f46'  : '#991b1b',
              }}
            >
              {review.status === 'pending' ? '⏳ Pending' : review.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
            </span>
            <span className="text-xs text-gray-400">{review.submittedAt}</span>
          </div>
        )}

        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: review.stars }).map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-amber-400 text-xs" />
          ))}
        </div>

        {/* Story */}
        <div className="relative mb-5">
          <FontAwesomeIcon icon={faQuoteLeft} className="absolute -top-1 -left-1 opacity-10 text-blue-600 text-xl" />
          <p className="text-sm text-gray-600 leading-relaxed pl-6 italic">"{review.story}"</p>
        </div>

        {/* Student info */}
        <div className="flex items-start justify-between gap-3 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
              style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}
            >
              {review.name.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm">{review.name}</div>
              <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                <FontAwesomeIcon icon={faMapPin} className="text-[10px]" />
                {review.city}, Pakistan
              </div>
            </div>
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0"
            style={{ background: DEGREE_COLORS[review.degree]?.bg, color: DEGREE_COLORS[review.degree]?.text }}
          >
            {review.degree}
          </span>
        </div>

        {/* University */}
        <div className="mt-4 rounded-xl p-3 flex items-center gap-3 bg-slate-50">
          <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600 text-sm" />
          <div>
            <div className="text-xs font-semibold text-gray-700">{review.university}</div>
            <div className="text-xs text-gray-400">{review.field} · {review.year} · {review.scholarship}</div>
          </div>
        </div>

        {/* Admin actions */}
        {adminMode && review.status === 'pending' && (
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => onApprove(review.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}
            >
              <FontAwesomeIcon icon={faCheck} /> Approve
            </button>
            <button
              onClick={() => onReject(review.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg,#ef4444,#dc2626)' }}
            >
              <FontAwesomeIcon icon={faXmark} /> Reject
            </button>
          </div>
        )}
        {adminMode && review.status === 'approved' && (
          <button
            onClick={() => onReject(review.id)}
            className="w-full mt-4 py-2 rounded-xl text-sm font-semibold border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
          >
            Remove from site
          </button>
        )}
      </div>
    </div>
  )
}

// ─── SUBMISSION FORM ──────────────────────────────────────────────────────────
function SubmitForm({ onSubmitted }) {
  const [form, setForm] = useState({
    name: '', city: '', university: '', degree: 'Master',
    year: new Date().getFullYear().toString(), field: '', scholarship: '', stars: 5, story: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.city || !form.university || !form.field || !form.story) {
      setError('Please fill in all required fields.')
      return
    }
    if (form.story.length < 50) { setError('Please write at least 50 characters in your story.'); return }
    setError('')
    setLoading(true)
    try {
      const existing = await loadReviews()
      const newReview = {
        ...form,
        id: `rev_${Date.now()}`,
        status: 'pending',
        submittedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      }
      await saveReviews([...existing, newReview])
      onSubmitted()
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const inputClass = "w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
          <input className={inputClass} placeholder="Ahmed Khan" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your City *</label>
          <input className={inputClass} placeholder="Lahore" value={form.city} onChange={e => set('city', e.target.value)} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">University *</label>
        <select className={inputClass} value={form.university} onChange={e => set('university', e.target.value)}>
          <option value="">Select your university…</option>
          {ITALIAN_UNIS.map(u => <option key={u} value={u}>{u}</option>)}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Degree</label>
          <select className={inputClass} value={form.degree} onChange={e => set('degree', e.target.value)}>
            <option>Bachelor</option><option>Master</option><option>PhD</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Year</label>
          <select className={inputClass} value={form.year} onChange={e => set('year', e.target.value)}>
            {['2022','2023','2024','2025','2026'].map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Field of Study *</label>
          <input className={inputClass} placeholder="Computer Engineering" value={form.field} onChange={e => set('field', e.target.value)} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Scholarship Name</label>
        <input className={inputClass} placeholder="e.g. ERGO, DSU Polimi, LazioDisco…" value={form.scholarship} onChange={e => set('scholarship', e.target.value)} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your Rating</label>
        <StarPicker value={form.stars} onChange={v => set('stars', v)} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your Story * <span className="font-normal text-gray-400">(min 50 characters)</span></label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={5}
          placeholder="Share your experience — how did the consultancy help you? What was the process like? What's life in Italy like now?"
          value={form.story}
          onChange={e => set('story', e.target.value)}
        />
        <div className="text-right text-xs text-gray-400 mt-1">{form.story.length} chars</div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          <FontAwesomeIcon icon={faXmark} /> {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-60"
        style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}
      >
        {loading
          ? <><FontAwesomeIcon icon={faSpinner} spin /> Submitting…</>
          : <><FontAwesomeIcon icon={faPaperPlane} /> Submit My Story</>
        }
      </button>

      <p className="text-center text-xs text-gray-400">
        Your review will appear after admin approval — usually within 24 hours.
      </p>
    </form>
  )
}

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
function AdminPanel({ reviews, onApprove, onReject, onClose }) {
  const pending  = reviews.filter(r => r.status === 'pending')
  const approved = reviews.filter(r => r.status === 'approved')
  const rejected = reviews.filter(r => r.status === 'rejected')
  const [tab, setTab] = useState('pending')

  const shown = tab === 'pending' ? pending : tab === 'approved' ? approved : rejected

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 pt-10 pb-10 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a8a)' }}>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faShield} className="text-yellow-400 text-lg" />
            <div>
              <div className="font-bold text-white text-sm">Admin Panel</div>
              <div className="text-xs text-white/50">Review Moderation</div>
            </div>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex divide-x divide-gray-100 bg-gray-50 border-b border-gray-100">
          {[
            { key: 'pending',  label: 'Pending',  count: pending.length,  color: '#f59e0b' },
            { key: 'approved', label: 'Approved', count: approved.length, color: '#10b981' },
            { key: 'rejected', label: 'Rejected', count: rejected.length, color: '#ef4444' },
          ].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className="flex-1 py-3 text-center transition-colors"
              style={{ background: tab === t.key ? '#fff' : 'transparent', borderBottom: tab === t.key ? `2px solid ${t.color}` : '2px solid transparent' }}>
              <div className="text-xl font-extrabold" style={{ color: t.color }}>{t.count}</div>
              <div className="text-xs text-gray-500 font-medium">{t.label}</div>
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {shown.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <FontAwesomeIcon icon={faClockRotateLeft} className="text-4xl opacity-20 mb-3" />
              <p className="font-medium">No {tab} reviews</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {shown.map(r => (
                <ReviewCard key={r.id} review={r} adminMode onApprove={onApprove} onReject={onReject} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── ADMIN LOGIN ──────────────────────────────────────────────────────────────
function AdminLogin({ onLogin, onClose }) {
  const [pw, setPw]       = useState('')
  const [show, setShow]   = useState(false)
  const [error, setError] = useState('')

  const attempt = (e) => {
    e.preventDefault()
    if (pw === ADMIN_PASSWORD) { onLogin() }
    else { setError('Incorrect password.'); setPw('') }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3"
            style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a8a)' }}>
            <FontAwesomeIcon icon={faLock} className="text-white" />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Admin Access</h2>
          <p className="text-sm text-gray-400 mt-1">Enter the admin password to moderate reviews</p>
        </div>
        <form onSubmit={attempt} className="space-y-3">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              className="w-full px-4 py-2.5 pr-10 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Admin password"
              value={pw}
              onChange={e => setPw(e.target.value)}
              autoFocus
            />
            <button type="button" onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 bg-transparent border-0">
              <FontAwesomeIcon icon={show ? faEyeSlash : faEye} className="text-sm" />
            </button>
          </div>
          {error && <p className="text-xs text-red-500 text-center">{error}</p>}
          <button type="submit"
            className="w-full py-2.5 rounded-xl font-semibold text-white transition-all hover:scale-[1.01]"
            style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a8a)' }}>
            Sign In
          </button>
          <button type="button" onClick={onClose}
            className="w-full py-2 text-sm text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-0">
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function SuccessStories() {
  const [reviews,       setReviews]       = useState([])
  const [loading,       setLoading]       = useState(true)
  const [showForm,      setShowForm]      = useState(false)
  const [submitted,     setSubmitted]     = useState(false)
  const [adminLogin,    setAdminLogin]    = useState(false)
  const [adminOpen,     setAdminOpen]     = useState(false)
  const [adminAuthed,   setAdminAuthed]   = useState(false)
  // Hidden trigger: click the footer "©" text 5 times
  const [tapCount,      setTapCount]      = useState(0)

  const approved = reviews.filter(r => r.status === 'approved')

  const refresh = useCallback(async () => {
    setLoading(true)
    const data = await loadReviews()
    setReviews(data)
    setLoading(false)
  }, [])

  useEffect(() => { refresh() }, [refresh])

  const handleApprove = async (id) => {
    const updated = reviews.map(r => r.id === id ? { ...r, status: 'approved' } : r)
    setReviews(updated)
    await saveReviews(updated)
  }

  const handleReject = async (id) => {
    const updated = reviews.map(r => r.id === id ? { ...r, status: 'rejected' } : r)
    setReviews(updated)
    await saveReviews(updated)
  }

  const handleSubmitted = async () => {
    await refresh()
    setSubmitted(true)
    setShowForm(false)
  }

  const handleSecretTap = () => {
    const next = tapCount + 1
    setTapCount(next)
    if (next >= 5) {
      setTapCount(0)
      if (adminAuthed) { setAdminOpen(true) }
      else { setAdminLogin(true) }
    }
  }

  return (
    <div className="bg-white">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <section className="py-20 text-white relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0f172a,#1e3a8a,#065f46)' }}>
        <div className="absolute inset-0"
          style={{ background: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=60") center/cover', opacity: 0.06 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border bg-white/10 border-white/20 text-white/80">
            <FontAwesomeIcon icon={faTrophy} className="text-yellow-400" /> Real Students. Real Results.
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">Success Stories</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/70">
            Hundreds of Pakistani students have successfully moved to Italy for their studies.
            Here are their stories — in their own words.
          </p>

          <div className="flex flex-wrap justify-center gap-10 mt-14">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-2 text-amber-400">
                  <FontAwesomeIcon icon={s.icon} />
                </div>
                <div className="text-3xl font-extrabold text-white">{s.value}</div>
                <div className="text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews Grid ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">What Our Students Say</h2>
            <p className="text-gray-400 text-sm">
              {approved.length > 0
                ? `${approved.length} verified review${approved.length !== 1 ? 's' : ''} from real students`
                : 'Be the first to share your story!'}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-400">
              <FontAwesomeIcon icon={faSpinner} spin className="text-3xl mb-3 text-blue-400" />
              <p>Loading reviews…</p>
            </div>
          ) : approved.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl opacity-20 mb-4" />
              <p className="font-semibold text-gray-500 text-lg">No reviews yet</p>
              <p className="text-sm mt-1">Be the first to share your Italy study experience!</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {approved.map(r => (
                <ReviewCard key={r.id} review={r} adminMode={false} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Share Your Story CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {submitted ? (
            <div className="rounded-2xl border border-green-100 bg-green-50 p-10">
              <FontAwesomeIcon icon={faCircleCheck} className="text-5xl text-green-500 mb-4" />
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Thank You!</h2>
              <p className="text-gray-500">
                Your story has been submitted and is pending review. It will appear on the site once approved — usually within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Submit Another
              </button>
            </div>
          ) : showForm ? (
            <div className="text-left">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">Share Your Story</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors bg-transparent border-0 text-lg"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <SubmitForm onSubmitted={handleSubmitted} />
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Your Story Could Be Next</h2>
              <p className="text-gray-500 text-lg mb-10">
                Already studying in Italy through our guidance? Share your experience and inspire other Pakistani students.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-white shadow-lg transition-transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> Share My Story
                </button>
                <a href="https://wa.me/+923453836699" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl text-white shadow-lg transition-transform hover:scale-105"
                  style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}>
                  Start WhatsApp Group
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 font-semibold rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-lg" />
                  Watch on YouTube
                </a>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Footer with hidden admin trigger ──────────────────────────────── */}
      <div className="text-center py-6 border-t border-gray-100 bg-gray-50">
        <span
          className="text-xs text-gray-300 select-none cursor-default"
          onClick={handleSecretTap}
          title=""
        >
          © {new Date().getFullYear()} 
        </span>
      </div>

      {/* ── Modals ─────────────────────────────────────────────────────────── */}
      {adminLogin && (
        <AdminLogin
          onLogin={() => { setAdminLogin(false); setAdminAuthed(true); setAdminOpen(true) }}
          onClose={() => setAdminLogin(false)}
        />
      )}

      {adminOpen && adminAuthed && (
        <AdminPanel
          reviews={reviews}
          onApprove={handleApprove}
          onReject={handleReject}
          onClose={() => setAdminOpen(false)}
        />
      )}
    </div>
  )
}