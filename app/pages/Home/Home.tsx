import FooterSection from "@/app/components/layout/Footer";


export default function HomeContent() {
  return (
    <main className="text-white">
      {/* Hero Section - Dark gradient background */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Hexagonal grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%234fd1c5' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-32">
          {/* Tagline with green dot */}
          <div className="inline-flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300 tracking-wide">Advancing Intelligence for the Future</span>
          </div>
          
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="text-white">BLIDA 1</span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              AI HOUSE
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            Empowering AI for Research, Innovation, and Society. 
            A premier digital laboratory fostering sustainable and
            responsible technological growth.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer shadow-lg shadow-cyan-500/25">
              Explore Labs
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 hover:border-cyan-400 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-slate-800/50">
              Join the Network
            </button>
          </div>
        </div>
      </section>

      {/* Ecosystem Section - White background */}
      <section className="bg-gray-50 text-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Ecosystem</h2>
            <p className="text-slate-600 text-lg max-w-2xl">Discover the core pillars of the AI House. From academic rigor to industry-standard project development.</p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* About */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-info-circle text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">About</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Learn about our mission to bridge the gap between academic theory and real-world AI application in Blida.</p>
              <a href="/pages/About" className="text-cyan-600 text-sm font-semibold hover:underline">See More →</a>
            </div>

            {/* Programs */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Programs</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Specialized training modules and certifications in Deep Learning, Ethics, and Neural Networks.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">RESEARCH PATH</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded">DEVELOPER TRACK</span>
              </div>
              <a href="/pages/Programs" className="text-cyan-600 text-sm font-semibold hover:underline">See More →</a>
            </div>

            {/* Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-calendar-alt text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Events</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Hackathons, seminars, and international AI conferences hosted annually.</p>
              <a href="/pages/Events" className="text-cyan-600 text-sm font-semibold hover:underline">See More →</a>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-users text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Projects</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Explore our repository of open-source research and community-driven AI models.</p>
              <a href="/pages/Projects" className="text-cyan-600 text-sm font-semibold hover:underline">See More →</a>
            </div>

            {/* Team */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <i className="fas fa-graduation-cap text-cyan-600"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Team</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Meet the researchers and visionaries leading our digital laboratory.</p>
              <a href="/pages/Team" className="text-cyan-600 text-sm font-semibold hover:underline">See More →</a>
            </div>
          </div>

          {/* Bottom row: Ethics and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Ethics */}
            <div className="bg-slate-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ethics</h3>
              <p className="text-slate-300 leading-relaxed mb-6">Developing AI that respects human dignity. Our Ethics board ensures responsible innovation through rigorous transparency protocols.</p>
              <button className="px-6 py-2 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer">
                Read Charter
              </button>
            </div>

            {/* Contact */}
            <div className="bg-blue-950 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <p className="text-slate-300 leading-relaxed mb-6">Have a question or want to collaborate? Reach out to our team at the University of Blida 1.</p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-cyan-400"></i>
                  <span className="text-sm">contact@ai-house.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-location-dot text-cyan-400"></i>
                  <span className="text-sm">Blida, Algeria</span>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-colors hover:cursor-pointer">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* AI Heartbeat Section */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The AI Heartbeat</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our research environment is constantly evolving. 
              Through the "Pulse" initiative, we monitor real-time data flows
              and model efficiency across our server networks.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                24/7 Neural Research Active
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Real-time Data Processing
              </li>
              <li className="flex items-center gap-3 text-slate-700">
                <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                Community Model Deployment
              </li>
            </ul>
          </div>

          {/* Right side - Animated Card */}
          <div className="relative flex items-center justify-center">
            {/* Decorative rings */}
            <div className="absolute w-64 h-64 border-2 border-cyan-200 rounded-2xl"></div>
            <div className="absolute w-60 h-60 border-2 border-cyan-300 rounded-xl"></div>
            
            {/* Main dark card */}
            <div className="relative w-56 h-56 bg-blue-950 rounded-xl flex items-center justify-center ">
              <i className="fas fa-brain text-5xl text-cyan-400 animate-pulse"></i>
            </div>
          </div>
        </div>
        </div>
      </section>
    
       <FooterSection />
    </main>
  );
}
