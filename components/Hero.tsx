import { Button } from "@/components/Button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-[#081329] to-[#1b428e]">
      <section className="container mx-auto grid-cols-1 grid-rows-2 items-center justify-between px-5 text-white md:min-h-[83lvh] lg:grid lg:grid-cols-2 lg:grid-rows-1">
        <header className="mb-16 w-full pt-16 lg:mb-0 lg:pt-0">
          <h1 className="mb-1 text-3xl font-[900] text-[#FF9053] uppercase sm:text-5xl md:text-6xl xl:text-7xl">
            GRE Universe course
          </h1>
          <p className="mb-3 text-lg font-[600] sm:text-xl md:mb-9 md:text-2xl xl:text-[1.75rem]/[158%]">
            Your Entire GRE Universe In One Course — Everything You Need,
            Nothing You Don't.
            <span className="block text-base font-[400] sm:text-lg md:text-xl xl:text-2xl">
              At ₹5,990/- for 3 months.
            </span>
          </p>
          <div className="w-[40%] max-w-64 text-sm md:text-base xl:text-lg">
            <Button label="Enroll now" />
          </div>
          <a
            className="mt-5 inline-block text-sm italic hover:underline sm:text-lg"
            href="#"
          >
            Need personal tutoring? Learn about one-to-one
          </a>
        </header>
        <div className="flex flex-col items-center gap-6 pb-16 lg:mb-0 lg:pb-0">
          <div className="relative flex aspect-square max-w-[90%] items-center justify-center overflow-hidden rounded-full lg:max-h-[400px] lg:max-w-[400px] xl:max-h-[430px] xl:max-w-[430px]">
            <div className="flex h-[65%] w-[65%] items-start justify-center overflow-hidden rounded-full">
              <div className="bg-white/55">
                <img
                  className="w-full"
                  src="/images/prof-punit.png"
                  alt="Prof. Punit"
                />
              </div>
              <img
                className="absolute bottom-[15%] left-[30%] w-[5%]"
                src="/images/canada.png"
                alt=""
              />
              <img
                className="absolute top-[28%] left-[15%] w-[7%]"
                src="/images/us.png"
                alt=""
              />
              <img
                className="absolute top-[7%] right-[36%] w-[6%]"
                src="/images/uk.png"
                alt=""
              />
              <img
                className="absolute top-[25%] right-[12%] w-[5%]"
                src="/images/australia.png"
                alt=""
              />
              <div className="absolute right-[20%] bottom-[15%] h-[6%] w-[6%] rounded-full bg-white/62"></div>
              <div className="absolute top-[10%] left-[25%] h-[8%] w-[8%] rounded-full bg-white/62"></div>
            </div>
            <div className="absolute inset-0 flex h-full w-full items-center justify-center blur-[0.7px] sm:blur-[1.5px]">
              <div className="insert-0 absolute h-[85%] w-[85%] rounded-full border-1 border-dashed border-white/56 sm:border-4"></div>
              <div className="h-[75%] w-[75%] rounded-full border-1 border-white/56 sm:border-4"></div>
            </div>
          </div>
          <a
            href="#instructor"
            className="inline-block rounded-full bg-white px-5 py-2 text-sm font-[600] text-[#505866] md:text-base"
          >
            Punit Mishra GRE: 337/340
          </a>
        </div>
      </section>
    </div>
  );
}
