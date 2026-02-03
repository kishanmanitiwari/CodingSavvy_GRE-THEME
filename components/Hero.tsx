import { ButtonLink } from "@/components/Button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e] overflow-hidden">
      <section className="px-fluid-container grid-cols-5 items-center justify-between text-white md:min-h-[83lvh] lg:grid">
        {/* hero text */}
        <header className="col-span-3 pb-12 w-full pt-16 lg:mb-0 lg:pt-0">
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FF9053]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF9053] border border-[#FF9053]/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF9053] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF9053]"></span>
              </span>
              Live Industry Projects Available
            </span>
          </div>
          <h1 className="text-hero mb-3 leading-[1.125] font-[900] text-[#FF9053] uppercase">
            Coding Savvy <div>Industry Projects & Bootcamps</div>
          </h1>
          <p className="text-lg-0 mb-4 max-w-[95%] leading-relaxed font-[600] text-pretty text-white/95">
            Real-world industry projects & job-ready bootcamps. Work on live projects with verifiable certification, plus 6-month flagship Placement Supreme with placement assistance.
          </p>
          <div className="text-sm-0 flex max-sm:flex-wrap w-[50%] max-w-lg gap-4">
            <ButtonLink href="#request-demo-form" label="Apply now" />
            <ButtonLink
              href="/#courses"
              label="View programs"
              bgColor="#132E64"
            />
          </div>

          {/* Hero Stats Row - hidden on mobile, visible from sm and up */}
          <div className="mt-8 hidden flex-wrap items-center gap-6 text-[11px] font-semibold text-[#E5E7EB]/90 sm:flex">
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-[900] text-white leading-none">1,000+</span>
              <span className="uppercase tracking-wide text-[10px]">Learners Trained</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-[#E5E7EB]/60 sm:inline-block" />
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-[900] text-white leading-none">100+</span>
              <span className="uppercase tracking-wide text-[10px]">Live Projects</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-[#E5E7EB]/60 sm:inline-block" />
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-[900] text-white leading-none">100+</span>
              <span className="uppercase tracking-wide text-[10px]">Placements</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-[#E5E7EB]/60 sm:inline-block" />
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl font-[900] text-white leading-none">50+</span>
              <span className="uppercase tracking-wide text-[10px]">Companies</span>
            </div>
          </div>
        </header>

        {/* hero image - Replaced with stylized CSS composition */}
        <div className="col-span-2 relative ml-3 flex items-center justify-center pb-16 lg:pb-0 mt-7">
          
          {/* 1. Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#1b428e] rounded-full blur-[80px] opacity-60"></div>
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#FF9053] rounded-full blur-[80px] opacity-20"></div>

          {/* 2. Main Visual Container */}
          <div className="relative z-10 w-full max-w-[420px] transform transition-transform hover:scale-[1.02] duration-500">
            
            {/* 3. The Code Editor Window */}
            <div className="rounded-xl bg-[#0f172a]/90 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b]/50 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-[10px] text-gray-400 font-mono">industry_project.ts</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-400">// Live Industry Project</div>
                <div className="mt-2">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">project</span> = <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">type</span>: <span className="text-green-400">"Live Industry"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">stack</span>: [<span className="text-orange-400">"Full Stack"</span>, <span className="text-orange-400">"Gen-AI"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">certified</span>: <span className="text-purple-400">true</span>
                </div>
                <div className="text-yellow-300">{"}"}</div>
                
                <div className="mt-4">
                  <span className="text-blue-400">CodingSavvy</span>.<span className="text-yellow-300">facilitate</span>(<span className="text-blue-400">project</span>);
                </div>
                <div className="mt-2 text-green-400/80 blink">_</div>
              </div>
            </div>

            {/* 4. Floating Badge: Success/Placement */}
            <div className="absolute -bottom-6 -right-4 bg-white text-[#081329] p-4 rounded-lg shadow-xl border-l-4 border-[#1B438F] flex items-center gap-3 animate-bounce-slow hover:shadow-2xl transition-shadow">
              <div className="bg-[#1B438F]/15 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1B438F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Status</p>
                <p className="text-sm font-[900]">Project Live</p>
              </div>
            </div>

            {/* 5. Floating Badge: Technologies */}
            <div className="absolute -top-6 -left-4 bg-[#132E64] p-3 rounded-lg shadow-lg border border-white/10 flex gap-2 items-center hover:shadow-xl transition-shadow">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-semibold text-white ml-1">Industry Ready</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
