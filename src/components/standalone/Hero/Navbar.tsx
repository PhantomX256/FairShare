import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="glass-panel mt-4 rounded-2xl px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>balance</span>
                        </div>
                        <span className="text-white text-lg font-bold tracking-tight">FairShare</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                           href="#features">Features</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                           href="#">About</a>
                    </nav>
                    <Link to="/auth">
                        <button
                            className="bg-primary cursor-pointer hover:bg-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-full shadow-[0_0_15px_rgba(19,55,236,0.3)] transition-all transform hover:scale-105">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;