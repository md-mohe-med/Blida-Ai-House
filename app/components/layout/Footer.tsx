import Link from "next/link";

export default function FooterSection() {
    return (
        <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-8">
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">BLIDA 1 AI HOUSE</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">© 2024 BLIDA 1 AI HOUSE. Building responsible AI skills, research, and innovation.</p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><Link href="/pages/About" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About</Link></li>
                            <li><Link href="/pages/Programs" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Programs</Link></li>
                            <li><Link href="/pages/Events" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Events</Link></li>
                            <li><Link href="/pages/Projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Projects</Link></li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Community</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Team</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-sm mb-4">
                            <span className="bg-cyan-500/20 text-cyan-300 px-1">Get the latest AI research updates</span>
                            <span className="bg-cyan-500/20 text-cyan-300 px-1">directly to your inbox.</span>
                        </p>
                        <div className="flex">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="flex-1 px-4 py-2 bg-white text-slate-900 rounded-l-lg text-sm focus:outline-none"
                            />
                            <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-r-lg transition-colors">
                                <i className="fas fa-paper-plane text-white"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom row with social icons */}
                <div className="flex items-center gap-4 pt-8 border-t border-slate-800">
                    <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                        <i className="fas fa-share-nodes text-xl"></i>
                    </a>
                    <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                        <i className="fas fa-network-wired text-xl"></i>
                    </a>
                    <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                        <i className="fas fa-code text-xl"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}