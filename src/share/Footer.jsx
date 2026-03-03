import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const footerLinks = {
    Company: ["About Us", "Our Mission", "Contact Sales"],
    Services: ["Products & Services", "Customer Stories", "Download Apps"],
    Information: ["Privacy Policy", "Terms & Conditions", "Join Us"],
};

const socialLinks = [
    { icon: <FaXTwitter size={13} />, label: "@CS — Ticket System" },
    { icon: <FaLinkedinIn size={13} />, label: "@CS — Ticket System" },
    { icon: <FaFacebookF size={13} />, label: "@CS — Ticket System" },
    { icon: <MdOutlineEmail size={13} />, label: "support@cst.com" },
];

function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-gray-300">

            {/* Main Grid */}
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">

                {/* Brand */}
                <div className="col-span-2 sm:col-span-3 lg:col-span-1">
                    <a href="#" className="inline-flex items-center font-extrabold text-white text-base tracking-tight mb-3">
                        <span>CS</span>
                        <span className="text-gray-500 mx-1">—</span>
                        <span>Ticket System</span>
                    </a>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
                        A modern customer support platform built to help teams manage, track,
                        and resolve tickets efficiently — all in one place.
                    </p>
                </div>

                {/* Link Columns */}
                {Object.entries(footerLinks).map(([heading, links]) => (
                    <div key={heading}>
                        <h4 className="text-sm font-bold text-white mb-4">{heading}</h4>
                        <ul className="flex flex-col gap-2.5">
                            {links.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-[0.82rem] text-gray-400 hover:text-white transition-colors duration-200">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Social Links */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-4">Social Links</h4>
                    <ul className="flex flex-col gap-3">
                        {socialLinks.map((s, i) => (
                            <li key={i}>
                                <a href="#" className="flex items-center gap-2.5 text-[0.82rem] text-gray-400 hover:text-white transition-colors duration-200 group">
                                    <span className="w-[26px] h-[26px] rounded-full bg-gray-800 group-hover:bg-gray-700 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                                        {s.icon}
                                    </span>
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-4 text-center">
                <p className="text-xs text-gray-500">© 2025 CS — Ticket System. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer
