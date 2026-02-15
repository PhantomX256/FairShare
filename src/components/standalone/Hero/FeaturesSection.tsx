function FeaturesSection() {
    return (
        <section id="features" className="relative py-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-3xl p-8 lg:p-12 overflow-hidden relative">
                <div
                    className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/10 to-transparent opacity-50 pointer-events-none"></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                            <div
                                className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
                            <div
                                className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(19,55,236,1)] z-20 opacity-80 animate-pulse"></div>
                            <div className="w-full h-full bg-cover bg-center"
                                 data-alt="Close up of a paper receipt on a table being scanned"
                                 style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxoTOAPgl-Ebya1gwrPDZ9bxE94_H-xtynHIJdWM1yVNiUmNt86z65B2b8LfDpOopNzCUfoabB3mimukqodpMcrnW0CBjUIqLhg0alzBVEflz4cGxCZShnXOUUmMttZ0WHzGI3--VUyNJiuGz6OFcNuEciAkL-Ry08ghsW1KgIXXcGZQPDY6mSmu4HpVoQkfAk5JMY0pslXhjQ0hcStm26V-ABekzw9FH3vrJAtIHqIL2gI4jDl4cOwSosrZEuprcHXgTdbpTmoY0')"}}>

                            </div>
                            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
                                <div
                                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
                                    <span className="material-symbols-outlined">center_focus_strong</span>
                                </div>
                                <div className="glass-panel px-4 py-2 rounded-lg">
                                    <p className="text-xs text-white font-medium">Analyzing Items...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col gap-6">
                        <div
                            className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">document_scanner</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Smart Scan
                            Technology</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Forget manual entry. Snap a photo of your restaurant bill and split it on the spot with
                            friends. Our smart capture technology extracts items and prices instantly.
                        </p>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>Instant Restaurant Splitting</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>99% Accuracy Rate</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span>Split by item or percentage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;