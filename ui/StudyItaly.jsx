import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileLines, 
  faCreditCard, 
  faAward, 
  faCircleCheck, 
  faArrowRight, 
  faGlobe, 
  faUsers, 
  faMapPin, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const steps = [
  { num: '01', title: 'Choose Your University',     desc: 'Browse our list of 54 Italian universities and select the program that matches your background and goals.' },
  { num: '02', title: 'Prepare Documents',          desc: 'Get your academic certificates apostilled and translated into Italian. I guide you through every document.' },
  { num: '03', title: 'Apply for Scholarship',      desc: 'Submit your DSU scholarship application through the university\'s regional portal before the deadline.' },
  { num: '04', title: 'Get Admission Letter',       desc: 'Receive your conditional or unconditional offer letter from the Italian university.' },
  { num: '05', title: 'Apply for Study Visa',       desc: 'Book your visa appointment at the Italian consulate and submit the required documents with my guidance.' },
  { num: '06', title: 'Move to Italy',              desc: 'Travel to Italy, enroll officially, and collect your scholarship benefits including housing and monthly grant.' },
];

const services = [
  { icon: faFileLines,   title: 'University Application',   desc: 'I help you select the right program, prepare a strong application, and submit it on time. From CV to motivation letter — everything covered.' },
  { icon: faCreditCard, title: 'Study Visa Assistance',    desc: 'Complete support for your Italian study visa — document checklist, appointment booking, and interview preparation.' },
  { icon: faAward,      title: 'Scholarship Guidance',     desc: 'Expert guidance on DSU regional scholarships, application portals, income declaration (ISEE Parificato), and required documents.' },
  { icon: faGlobe,      title: 'France & Germany',         desc: 'While Italy is my primary focus, I also assist with universities in France and Germany for students seeking more options.' },
  { icon: faUsers,      title: 'Free Advice Sessions',     desc: 'I offer free consultation for students who prefer to handle their own applications but need guidance on making the right decisions.' },
  { icon: faYoutube,    title: 'YouTube – Hussain Silat',  desc: 'Watch step-by-step guides, success stories, and scholarship tips on my YouTube channel — all free, all in Urdu/English.' },
];

const faqs = [
  { q: 'Do I need IELTS to study in Italy?',             a: 'No! Most Italian universities that offer programs in Italian do not require IELTS. Even for English-taught programs, many universities have alternative English proficiency options.' },
  { q: 'What is the DSU Regional Scholarship?',          a: 'DSU (Diritto allo Studio Universitario) is Italy\'s public right-to-study scholarship. It covers tuition fees, monthly cash grants (€200–€400), free university housing, and canteen access based on income and merit.' },
  { q: 'What documents do I need from Pakistan?',        a: 'Mainly your Family Registration Certificate (FRC) and Income/Property Certificate from NADRA/Union Council, both apostilled and translated into Italian. Some universities only need a notarised self-declaration.' },
  { q: 'Can I work while studying in Italy?',            a: 'Yes! A student visa allows you to work up to 20 hours per week. Many students cover their personal expenses through part-time work.' },
  { q: 'How long does the visa process take?',           a: 'Typically 2–8 weeks after submitting at the consulate. The Italian consulate in Islamabad and Karachi process student visa applications. Apply early.' },
  { q: 'Is Italian language required?',                  a: 'For Italian-medium programs, B1/B2 Italian is required. However, hundreds of English-medium programs are available and are open to Pakistani students.' },
];

const regions = [
  { name: 'Lazio',          unis: 6,  body: 'LazioDisco',     color: '#dbeafe', text: '#1e40af' },
  { name: 'Emilia-Romagna', unis: 4,  body: 'ERGO',           color: '#d1fae5', text: '#065f46' },
  { name: 'Lombardy',       unis: 7,  body: 'DSU / EDISU',    color: '#ede9fe', text: '#5b21b6' },
  { name: 'Tuscany',        unis: 3,  body: 'DSU Toscana',    color: '#fef3c7', text: '#92400e' },
  { name: 'Piedmont',       unis: 3,  body: 'EDISU Piemonte', color: '#fce7f3', text: '#9d174d' },
  { name: 'Campania',       unis: 4,  body: 'ADISU RC',       color: '#ecfdf5', text: '#064e3b' },
  { name: 'Sicily',         unis: 4,  body: 'ERSU',           color: '#fff7ed', text: '#7c2d12' },
  { name: 'Puglia',         unis: 4,  body: 'Adisu Puglia',   color: '#f0fdf4', text: '#14532d' },
];

export default function StudyItaly() {
  return (
    <div className="bg-white">

      {/* ── Hero Banner ── */}
      <section className="relative py-24 overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #065f46 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'url("https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=60") center/cover', opacity: 0.08 }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇮🇹</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
                Complete Guide for Pakistani Students
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Study in Italy —{' '}
              <span style={{ background: 'linear-gradient(135deg,#34d399,#60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Everything You Need
              </span>
            </h1>
            <p className="text-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Italy offers world-class education with regional scholarships covering tuition, housing, and monthly grants.
              No IELTS required. No application fee. I guide you through every step.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/universities"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl shadow-lg"
                style={{ background: 'linear-gradient(135deg,#059669,#10b981)', color: 'white' }}>
                Browse 54 Universities <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a href="https://wa.me/+923453836699" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Italy ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Why Italy?</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Why Pakistani Students Choose Italy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '🎓', title: 'Free Tuition',        desc: 'DSU scholarship covers 100% of tuition fees for eligible students' },
              { emoji: '💰', title: 'Monthly Grant',        desc: '€200–€400 monthly cash grant plus free housing in university dorms' },
              { emoji: '📄', title: 'No IELTS Required',   desc: 'Most Italian-medium programs do not require IELTS or language tests' },
              { emoji: '🛂', title: 'Visa Sponsorship',    desc: 'Full study visa support — Italy has one of the highest student visa approval rates' },
              { emoji: '🌍', title: 'Schengen Access',     desc: 'Study in Italy and travel freely across 27 European Schengen countries' },
              { emoji: '🏛️', title: 'Ancient Universities', desc: 'Home to the world\'s oldest universities including Bologna (est. 1088)' },
              { emoji: '💼', title: 'Work Rights',          desc: 'Work up to 20 hours/week on a student visa to supplement your income' },
              { emoji: '🤝', title: 'Pakistani Community', desc: 'Large, welcoming Pakistani community in every major Italian university city' },
            ].map(c => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step by Step Process ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Process</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Step-by-Step Process</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">From deciding to study in Italy to landing at your university — here's the complete roadmap.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative rounded-2xl p-7 border border-gray-100 shadow-sm bg-white overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-black leading-none select-none text-blue-600/5">
                  {s.num}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}>
                    {s.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-blue-200 text-2xl">›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scholarship by Region ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Coverage</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Scholarships by Region</h2>
            <p className="text-gray-500 mt-3">Each Italian region has its own scholarship body (DSU). Here's an overview:</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map(r => (
              <div key={r.name} className="rounded-2xl p-5 border"
                style={{ background: r.color, borderColor: r.color }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="font-bold text-sm" style={{ color: r.text }}>{r.name}</div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.08)', color: r.text }}>
                    {r.unis} unis
                  </span>
                </div>
                <div className="text-xs font-medium" style={{ color: r.text, opacity: 0.75 }}>
                  {r.body}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/universities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-sm"
              style={{ background: 'linear-gradient(135deg,#2563eb,#059669)' }}>
              View All 53 Universities <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── My Services ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">How I Can Help You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="rounded-2xl p-7 border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg,#eff6ff,#ecfdf5)' }}>
                  <FontAwesomeIcon icon={s.icon} className="text-blue-600 text-lg" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(f => (
              <details key={f.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900 list-none">
                  {f.q}
                  <span className="ml-4 text-blue-500 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-white"
        style={{ background: 'linear-gradient(135deg,#1e3a8a,#065f46)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your Italy Journey?</h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Join hundreds of Pakistani students who have successfully moved to Italy with my guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/universities"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl"
              style={{ background: 'linear-gradient(135deg,#34d399,#059669)', color: 'white' }}>
              Browse Scholarships <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <a href="https://wa.me/+923453836699" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl border"
              style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}