import React, { useState } from 'react'

const navLinks = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-0 text-gray-900 no-underline flex-shrink-0">
                        <span className="text-base font-extrabold tracking-tight text-gray-900">CS</span>
                        <span className="text-base font-extrabold tracking-tight text-gray-400 mx-1">—</span>
                        <span className="text-base font-extrabold tracking-tight text-gray-900">Ticket System</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-7">
                        {navLinks.map(link => (
                            <a key={link} href="#" className="nav-link">{link}</a>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <div className="hidden md:flex items-center">
                        <button className="btn-gradient flex items-center gap-2 px-4 py-2 rounded-lg text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                            New Ticket
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="md:hidden drawer-enter border-t border-gray-100 bg-white px-4 pb-4 pt-2">
                    <div className="flex flex-col gap-1">
                        {navLinks.map(link => (
                            <a key={link} href="#" className="mobile-link">{link}</a>
                        ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                        <button className="btn-gradient flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                            </svg>
                            New Ticket
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar