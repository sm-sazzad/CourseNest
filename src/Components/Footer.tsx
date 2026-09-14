import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import footer from "../assets/NavLogo1.png"
import type { Dispatch, SetStateAction } from "react";

interface sidebarProps {
    // sidebar: boolean,
    setSidebar: Dispatch<SetStateAction<boolean>>
}


const Footer = ({ setSidebar }: sidebarProps) => {
    return (

        <footer className="bg-linear-to-br from-indigo-950 via-indigo-900 to-cyan-900 text-white">
            <div className="w-[90%] mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Column 1 — Logo + Tagline */}
                <div className="space-y-4">
                    <img src={footer} alt="CourseNest" className="h-16 w-auto" />
                    <p className="text-sm text-indigo-200 leading-relaxed max-w-xs">
                        Keep learning. Keep growing. Keep moving forward.
                    </p>
                    <p className="text-xs text-indigo-300/70">
                        © {new Date().getFullYear()} CourseNest. All rights reserved.
                    </p>
                </div>

                {/* Column 2 — Learning Links */}
                <div className="md:justify-self-center">
                    <h3 className="text-lg font-bold text-white mb-4">Learning</h3>
                    <ul className="space-y-3 text-sm text-indigo-200">
                        <li>
                            <a onClick={() => setSidebar(true)} className="cursor-pointer hover:text-cyan-400 transition-colors duration-200">
                                My Courses
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(true)} className="cursor-pointer hover:text-cyan-400 transition-colors duration-200">
                                Enrolled Courses
                            </a>
                        </li>
                        <li>
                            <a href="#course" className="hover:text-cyan-400 transition-colors duration-200">
                                All Courses
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 — Contact / Social */}
                <div className="md:justify-self-end space-y-4">
                    <h3 className="text-lg font-bold text-white">Contact Us</h3>
                    <ul className="space-y-3 text-sm text-indigo-200">
                        <li>
                            <a
                                href="https://github.com/sm-sazzad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                            >
                                <FaGithub className="text-lg" /> GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/sm-sazzad/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                            >
                                <FaLinkedin className="text-lg" /> LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/sazzad.hossain.5758/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                            >
                                <FaFacebook className="text-lg" /> Facebook
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <p className="text-center text-xs text-indigo-300/70 py-4">
                    Made with ❤️ by <span className="text-cyan-400 font-medium">SM Sazzad</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;