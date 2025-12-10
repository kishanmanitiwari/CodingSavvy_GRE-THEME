import { TestimonialCarousel } from "@/components/Animations";
import { ButtonLink } from "@/components/Button";
import { CourseFeaturesCard, InfoCard } from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";

export default function Home() {
  const tableData = [
    [
      "Placement Supreme - 6 month intensive flagship program.",
      "Placement assistance with mock interviews and job prep.",
    ],
    [
      "Internship Program with project-based learning.",
      "Real-world sprints, case studies, and portfolio building.",
    ],
    [
      "Java Full Stack, DevOps, and Mobile App Development tracks.",
      "Recorded sessions plus live support for every cohort.",
    ],
    [
      "Languages & stacks: C++, Java, TypeScript, JavaScript, Spring Boot, Next.js, Node.js.",
      "Free career mentorship and resume reviews.",
    ],
    ["MOU with 5+ colleges.", "1000+ students trained."],
    [
      "100+ students placed.",
      "Community support that continues after graduation.",
    ],
  ];

  const testimonialsData = [
    {
      imgSrc: "/images/siddharth.webp",
      title: "The Blueprint for My GRE Success.",
      description:
        "Initially, I was very confused, but then I discovered Punit Mishra Prep, and it worked like magic. Without using any flattery, I can say that the strategies for both the quant and verbal sections led to a tremendous improvement. I would personally recommend Punit Mishra Prep.",
      greScore: 328,
      designation: "",
      name: "Siddharth Kumar",
      linkedin: "https://www.linkedin.com/in/siddharth-kumar-a68099145/ ",
    },
    {
      imgSrc: "/images/sameer-jain.webp",
      title: "Personalized Plan, Foundational Results.",
      description:
        "Punit created a clear, personalized study plan that accounted for my work schedule. What stood out was his unique ability to identify and correct the root cause of my mistakes at a fundamental level. Highly recommended!",
      greScore: 321,
      designation: "Growth Manager, Ten x You",
      name: "Sameer Jain",
      linkedin: "https://www.linkedin.com/in/sameer-jain-bb153716a/",
    },
    {
      imgSrc: "/images/aryani.webp",
      title: "Deep Content Mastery, Simplified Learning.",
      description:
        "Punit has a deep understanding of the GRE content and structure, effectively guiding students through challenging sections. He truly sets himself apart by breaking down complex concepts into easy-to-understand explanations, fostering confidence and motivation.",
      greScore: 318,
      designation: "",
      name: "Aaryani Dogra",
      linkedin: "https://www.linkedin.com/in/aaryani-dogra-08426717b/",
    },
    {
      imgSrc: "/images/pranit-jain.webp",
      title: "Structure Meets Empathy.",
      description:
        "Punit Sir is an incredibly supportive GRE coach who is flexible and tailors study plans and class timings to your needs. His material is well-structured, and he excels at creating personalized workflows to keep you on track. He's also one of the rare teachers available even on WhatsApp for doubt-solving and motivational support.",
      greScore: 336,
      designation: "Investment Analyst, IFC",
      name: "Pranit Jain",
      linkedin: "https://www.linkedin.com/in/pranit-jain14/",
    },
    {
      imgSrc: "/images/sandesh.webp",
      title: "Complex Concepts Made Simple.",
      description:
        "Punit's ability to break down complex concepts into easily understandable parts is key. He tailors his methods to suit individual learning needs, ensuring steady progress and building confidence for test day. Thanks to his guidance, I was able to approach the GRE with clarity and determination.",
      greScore: 320,
      designation: "Founder, Case Ace",
      name: "Sandesh Dholakia",
      linkedin: "https://www.linkedin.com/in/sandesh-dholakia/",
    },
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="grid grid-cols-1 place-items-center bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section
            id="about"
            className="px-fluid-container flex flex-col items-center lg:pb-5"
          >
            <h2 className="text-xl-0 mb-10 text-center leading-tight font-[900] text-white capitalize md:mb-16 lg:mb-20">
              Why choose Coding Savvy?
            </h2>
            <div className="row-auto grid max-w-fit grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              <InfoCard
                title="Placement Supreme"
                description="Flagship 6-month bootcamp with placement assistance."
                imgSrc="/images/chess-fill.svg"
              />
              <InfoCard
                title="Career Mentorship"
                description="Free mentorship, mock interviews, and resume support."
                imgSrc="/images/star-badge.svg"
              />
              <InfoCard
                title="Recorded + Live Learning"
                description="Recorded sessions plus live support and internship paths."
                imgSrc="/images/book-education.png"
              />
              <InfoCard
                title="College Partnerships"
                description="MOU with 5+ colleges; 1000+ learners and 100+ placements."
                imgSrc="/images/money-bag.webp"
              />
            </div>
          </section>
        </div>
        <div
          id="courses"
          className="scroll-mt-5 bg-gradient-to-b from-[#e7ecf4] to-[#bec9df]"
        >
          <div className="px-fluid-container flex items-center justify-center py-24 lg:min-h-[90vh]">
            <CourseFeaturesCard />
          </div>

          <section className="bg-white pt-21 pb-16">
            <div className="px-fluid-container">
              {/* mobile view */}
              <div className="text-[#1F1D39] md:hidden md:aria-hidden">
                <article className="w-full">
                  <h2 className="text-xl-0 pb-8 leading-tight font-[900] text-[#1B438F]">
                    Programs & Tracks
                  </h2>
                  <ul className="mb-8 divide-y divide-[#1B438F33] border-y border-y-[#1B438F33]">
                    {tableData.map((data, i) => (
                      <li
                        key={`${data[0]}-${i}`}
                        className="text-sm-0 px-2.5 py-2 text-pretty"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                          <p>{data[0]}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="text-white">
                    <ButtonLink href="#" label="Apply Now" />
                  </div>
                </article>
                <article className="w-full">
                  <h2 className="text-xl-0 mt-12 pb-8 leading-tight font-[900] text-[#1B438F]">
                    Career Outcomes
                  </h2>
                  <ul className="mb-8 divide-y divide-[#1B438F33] border-y border-y-[#1B438F33]">
                    {tableData.map((data, i) => (
                      <li
                        key={`${data[1]}-${i}`}
                        className="text-sm-0 px-2.5 py-2 text-pretty"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                          <p>{data[1]}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="#"
                    label="Download brochure"
                    bgColor="#fff"
                  />
                </article>
              </div>

              {/* desktop view */}
              <table className="hidden max-md:aria-hidden w-full text-[#1F1D39] md:table">
                <thead>
                  <tr>
                    <th className="text-xl-0 pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                      Programs & Tracks
                    </th>
                    <th className="text-xl-0 pb-8 text-start text-4xl font-[900] text-[#1B438F]">
                      Career Outcomes
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm-0">
                  {tableData.map((row, key) => (
                    <tr key={key} className="divide-x divide-[#1B438F33]">
                      {row.map((data, i) => (
                        <td
                          key={`${data}-${i}`}
                          className="border-y border-y-[#1B438F33] px-2.5 py-2"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                            <p>{data}</p>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr>
                    <td className="py-8 pr-2.5 text-white">
                      <ButtonLink href="#" label="Apply now" />
                    </td>
                    <td className="py-6 pl-2.5">
                      <ButtonLink
                        href="#"
                        label="Download brochure"
                        bgColor="#fff"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      <div className="bg-gradient-to-b from-[#1c4490] to-[#0f2247]">
        <section
          id="testimonials"
          className="relative flex scroll-mt-28 items-center justify-center overflow-hidden pt-8 pb-16 sm:pt-0"
        >
          <TestimonialCarousel testimonialsData={testimonialsData} />
        </section>
      </div>
    </>
  );
}
