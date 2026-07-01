import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGraduationCap, 
  faFileLines, 
  faCreditCard, 
  faAward, 
  faGlobe, 
  faUsers, 
  faChevronRight, 
  faStar, 
  faBuilding, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const services = [
  {
    icon: faFileLines,
    title: 'University Applications',
    desc: 'Selecting the right program and submitting a winning application tailored to your profile.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: faCreditCard,
    title: 'Study Visa Assistance',
    desc: 'Helping you navigate the Italian study visa process smoothly from start to finish.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: faAward,
    title: 'Scholarship Guidance',
    desc: 'Assisting you in securing financial aid, DSU, and regional scholarships.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: faGlobe,
    title: 'France & Germany',
    desc: 'While Italy is the primary focus, assistance for France and Germany is also available.',
    color: 'bg-purple-50 text-purple-600',
  },
];

const extras = [
  { icon: faUsers, title: 'Free Advice', desc: 'Free guidance for students who prefer handling their own applications.' },
  { icon: faGlobe, title: 'WhatsApp Groups', desc: 'Join active communities sharing updates, tips and scholarship news.' },
  { icon: faYoutube, title: 'YouTube Channel', desc: 'Bahudin Consultancy — study-abroad tips, success stories, and step-by-step guides.' },
  { icon: faBuilding, title: 'B2B Services', desc: 'Collaboration with agencies and companies needing expert consultancy.' },
];

const testimonials = [
  { name: 'Ahmed K.', univ: 'University of Bologna', text: 'Got my full scholarship thanks to the expert guidance. The process was smooth and stress-free.', stars: 5 },
  { name: 'Fatima M.', univ: 'Politecnico di Milano', text: 'I never thought studying in Italy was possible. This consultancy made it a reality for me.', stars: 5 },
  { name: 'Usman T.', univ: 'University of Turin', text: 'From visa to housing — every step was covered. Highly recommend to any Pakistani student.', stars: 5 },
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] hero-gradient flex items-center overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Pakistan's #1 Italy Study Guide
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Your Dream of{' '}
              <span className="text-gradient bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Studying in Europe
              </span>{' '}
              Starts Here
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              Expert guidance for Pakistani students seeking Italian university admissions,
              scholarships, and study visas. Hundreds of success stories — yours is next.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/study-italy"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-900/30"
              >
                Study in Italy <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link
                to="/universities"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur"
              >
                View Scholarships <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { value: '500+', label: 'Students Guided' },
                { value: '50+',  label: 'Universities Covered' },
                { value: '98%',  label: 'Visa Success Rate' },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-white">{s.value}</div>
                  <div className="text-sm text-white/50 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Services</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">How Can I Help You?</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Comprehensive guidance from choosing a university to landing in Italy — every step of the way.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-8 sm:p-12 mb-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Study in Italy Consultancy</h3>
                  <p className="text-white/70 text-sm">My primary specialisation</p>
                </div>
              </div>
              <p className="text-white/80 mb-8 max-w-2xl leading-relaxed">
                I specialize in helping Pakistani students navigate the Italian university system.
                From choosing the right program to your first day on campus — I guide you at every step.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {services.slice(0, 3).map(s => (
                  <div key={s.title} className="bg-white/10 rounded-2xl p-5 border border-white/20">
                    <FontAwesomeIcon icon={s.icon} className="mb-3 text-lg block" />
                    <div className="font-semibold mb-1">{s.title}</div>
                    <div className="text-sm text-white/70">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {extras.map(s => (
              <div key={s.title} className="bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 mb-4">
                  <FontAwesomeIcon icon={s.icon} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Success Stories ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Success Stories</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-amber-400 text-xs" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-emerald-600">{t.univ}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/success-stories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm"
            >
              View All Stories <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── B2B CTA ── */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-widest">B2B Services</span>
              <h2 className="text-3xl font-bold text-white mt-2">Let's Grow Together</h2>
              <p className="text-gray-400 mt-2 max-w-lg">
                Education agencies, consultants, and companies — partner with us for expert student application services.
              </p>
            </div>
            <a
              href="mailto:your@email.com"
              className="shrink-0 px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}