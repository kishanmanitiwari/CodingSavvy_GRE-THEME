import { ButtonLink } from "@/components/Button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e] overflow-hidden">
      <section className="px-fluid-container grid-cols-5 items-center justify-between text-white md:min-h-[83lvh] lg:grid">
        {/* hero text */}
        <header className="col-span-3 pb-12 w-full pt-16 lg:mb-0 lg:pt-0">
          <h1 className="text-hero mb-2 leading-[1.125] font-[900] text-[#FF9053] uppercase">
            Coding Savvy <div>Bootcamps</div>
          </h1>
          <p className="text-lg-0 mb-3.5 max-w-[95%] leading-tight font-[600] text-pretty">
            Placement-first coding bootcamp platform for students 6-month
            flagship Placement Supreme with placement assistance.
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
          <div className="mt-6 hidden flex-wrap items-center gap-6 text-[11px] font-semibold text-[#E5E7EB]/90 sm:flex">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-[900] text-white">1,000+</span>
              <span className="uppercase tracking-wide">Learners Trained</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-[#E5E7EB]/60 sm:inline-block" />
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-[900] text-white">100+</span>
              <span className="uppercase tracking-wide">Successful Placements</span>
            </div>
            <span className="hidden h-1 w-1 rounded-full bg-[#E5E7EB]/60 sm:inline-block" />
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-[900] text-white">50+</span>
              <span className="uppercase tracking-wide">Hiring Companies</span>
            </div>
          </div>
        </header>

        {/* hero image - Replaced with stylized CSS composition */}
        <div className="col-span-2 relative flex items-center justify-center pb-16 lg:pb-0 mt-7">
          
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
                <div className="ml-auto text-[10px] text-gray-400 font-mono">student_success.js</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-gray-400">// Learning Path</div>
                <div>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">student</span> = <span className="text-yellow-300">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">name</span>: <span className="text-green-400">"Future Dev"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">skills</span>: [<span className="text-orange-400">"Java"</span>, <span className="text-orange-400">"React"</span>],
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">placement</span>: <span className="text-purple-400">true</span>
                </div>
                <div className="text-yellow-300">{"}"}</div>
                
                <div className="mt-4">
                  <span className="text-blue-400">CodingSavvy</span>.<span className="text-yellow-300">launchCareer</span>(<span className="text-blue-400">student</span>);
                </div>
                <div className="mt-2 text-green-400/80 blink">_</div>
              </div>
            </div>

            {/* 4. Floating Badge: Success/Placement */}
            <div className="absolute -bottom-6 -right-4 bg-white text-[#081329] p-4 rounded-lg shadow-xl border-l-4 border-[#1B438F] flex items-center gap-3 animate-bounce-slow">
              <div className="bg-[#1B438F]/15 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1B438F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Status</p>
                <p className="text-sm font-[900]">Hired & Placed</p>
              </div>
            </div>

            {/* 5. Floating Badge: Technologies */}
            <div className="absolute -top-6 -left-4 bg-[#132E64] p-3 rounded-lg shadow-lg border border-white/10 flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-xs font-semibold text-white ml-1">Full Stack Ready</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}