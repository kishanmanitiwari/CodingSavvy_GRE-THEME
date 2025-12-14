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
      imgSrc: "/images/dummy-modified.png",
      title: "A True Game-Changer",
      description:
        "CodingSavvy is a game-changer! The platform's interactive coding challenges and engaging tutorials have significantly boosted my coding skills. I'm now more confident in tackling complex projects.",
      name: "Gaurav",
    },
    {
      imgSrc: "/images/nupur.png",
      title: "Totally Worth It",
      description:
        "It was totally helpful in terms of learning coding, basics of programming, and various other productive things as well. Totally worth it! Happy to be a part of Coding Savvy family.",
      name: "Nupur",
    },
    {
      imgSrc: "/images/srushti.png",
      title: "Fantastic Java Bootcamp",
      description:
        "The Java DSA bootcamp was fantastic! Your clear explanations and practical examples made complex concepts easy to understand. Thank you so much for everything.",
      name: "Srushti",
    },
    {
      imgSrc: "/images/devesh.png",
      title: "Top-Notch Tutorials",
      description:
        "CodingSavvy's tutorials are top-notch. The step-by-step guidance and practical examples make learning complex coding concepts a breeze. I appreciate the platform's commitment to quality education.",
      name: "Devesh",
    },
    {
      imgSrc: "/images/khushal.jpg",
      title: "Simplified Complex Concepts",
      description:
        "CodingSavvy's tutorials simplify complex coding concepts with clear explanations and practical examples. Their commitment to quality education shines through in every lesson.",
      name: "Khushal",
    },
    {
      imgSrc: "/images/aadesh.png",
      title: "Great for Beginners",
      description:
        "This training of web development is great for beginners because each and every concept is taught from very basic to advance level. Which helped me to understand difficult concepts easily.",
      name: "Aadesh",
    },
    {
      imgSrc: "/images/saurav.png",
      title: "Honed My Skills",
      description:
        "My coding internship was great. I honed my front-end development skills, learned industry best practices, and gained practical experience with daily tasks and projects.",
      name: "Saurav",
    },
    {
      imgSrc: "/images/nikita.png",
      title: "Amazing Internship Training",
      description:
        "This internship training was amazing! I learned new skills in a friendly environment and enjoyed every session. I didn't know much about web development before, but now I've learned a lot.",
      name: "Nikita",
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
              <div className="md:aria-hidden text-[#1F1D39] md:hidden">
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
              <table className="max-md:aria-hidden hidden w-full text-[#1F1D39] md:table">
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
