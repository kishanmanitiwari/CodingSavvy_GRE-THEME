import { TestimonialCarousel } from "@/components/Animations";
import { ButtonLink } from "@/components/Button";
import { CourseFeaturesCard, InfoCard } from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";
import Link from "next/link";

const EnrollButton = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="mt-auto block w-full rounded-lg bg-gradient-to-r from-[#1B438F] to-[#132E64] py-3 text-center text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all hover:-translate-y-0.5 hover:from-[#2B54A3] hover:to-[#1B438F] hover:shadow-lg"
  >
    {label}
  </Link>
);

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
      imgSrc: "/images/dummy-modified.webp",
      title: "A True Game-Changer",
      description:
        "CodingSavvy is a game-changer! The platform's interactive coding challenges and engaging tutorials have significantly boosted my coding skills. I'm now more confident in tackling complex projects.",
      name: "Gaurav",
    },
    {
      imgSrc: "/images/nupur.webp",
      title: "Totally Worth It",
      description:
        "It was totally helpful in terms of learning coding, basics of programming, and various other productive things as well. Totally worth it! Happy to be a part of Coding Savvy family.",
      name: "Nupur",
    },
    {
      imgSrc: "/images/srushti.webp",
      title: "Fantastic Java Bootcamp",
      description:
        "The Java DSA bootcamp was fantastic! Your clear explanations and practical examples made complex concepts easy to understand. Thank you so much for everything.",
      name: "Srushti",
    },
    {
      imgSrc: "/images/devesh.webp",
      title: "Top-Notch Tutorials",
      description:
        "CodingSavvy's tutorials are top-notch. The step-by-step guidance and practical examples make learning complex coding concepts a breeze. I appreciate the platform's commitment to quality education.",
      name: "Devesh",
    },
    {
      imgSrc: "/images/khushal.webp",
      title: "Simplified Complex Concepts",
      description:
        "CodingSavvy's tutorials simplify complex coding concepts with clear explanations and practical examples. Their commitment to quality education shines through in every lesson.",
      name: "Khushal",
    },
    {
      imgSrc: "/images/aadesh.webp",
      title: "Great for Beginners",
      description:
        "This training of web development is great for beginners because each and every concept is taught from very basic to advance level. Which helped me to understand difficult concepts easily.",
      name: "Aadesh",
    },
    {
      imgSrc: "/images/saurav.webp",
      title: "Honed My Skills",
      description:
        "My coding internship was great. I honed my front-end development skills, learned industry best practices, and gained practical experience with daily tasks and projects.",
      name: "Saurav",
    },
    {
      imgSrc: "/images/nikita.webp",
      title: "Amazing Internship Training",
      description:
        "This internship training was amazing! I learned new skills in a friendly environment and enjoyed every session. I didn't know much about web development before, but now I've learned a lot.",
      name: "Nikita",
    },
  ];

  const courseData = [
    {
      title: "Placement Supreme",
      price: "₹4,999",
      features: [
        "6-month flagship placement program",
        "DSA+, Backend, DevOps & Aptitude",
        "Live + recorded classes with doubt support",
        "Projects, tests & mock interviews",
      ],
      link: "https://forms.gle/R962pqs4W65peFsi6",
    },
    {
      title: "DSA+",
      price: "₹2,999",
      features: [
        "Structured DSA for placements",
        "Company-focused problems & contests",
        "Patterns and complexity focused prep",
        "Interview-style coding rounds",
      ],
    },
    {
      title: "BackendX",
      price: "₹2,999",
      features: [
        "Spring Boot backend from scratch",
        "REST APIs with DB and security",
        "DevOps basics: CI/CD & Docker",
        "Production-ready backend project",
      ],
    },
    {
      title: "Live Industry Project Internship",
      price: "Know more",
      features: [
        "Live Gen-AI, Full Stack, DevOps & Mobile",
        "Work in real industry-style teams",
        "Performance-based stipend (where applicable)",
        "Verified internship certificate",
      ],
    },
  ];

  const placements = [
    {
      name: "Kushal Bhamare",
      company: "Zensar Technologies",
      package: "12 LPA",
      quote:
        "Cracked system design rounds with daily mocks and resume rewrites.",
      role: "Software Developer",
    },
    {
      name: "Shrushti Jalgaonkar",
      company: "Accenture",
      package: "5.5 LPA",
      quote:
        "The DSA drills and interview panels felt exactly like the real thing.",
      role: "Software Developer",
    },
    {
      name: "Aadesh",
      company: "LTI MindTree",
      package: "5.5 LPA",
      quote: "Live code reviews fixed my gaps fast and boosted my confidence.",
      role: "Software Developer",
    },
    {
      name: "Saraswati",
      company: "LTI MindTree",
      package: "5 LPA",
      quote:
        "Weekly checkpoints and peer practice made problem-solving a habit.",
      role: "Software Developer",
    },
    {
      name: "Girish Patil",
      company: "Cognizant",
      package: "5 LPA",
      quote: "Company-specific prep packs and mock HR rounds sealed the deal.",
      role: "Software Developer",
    },
    {
      name: "Aaditya Shinde",
      company: "LTI MindTree",
      package: "4.5 LPA",
      quote:
        "Project storytelling practice helped me stand out in panel interviews.",
      role: "Associate Software Developer",
    },
    {
      name: "Neha Phadtare",
      company: "CoreFlex IT Solution's",
      package: "4 LPA",
      quote:
        "Hands-on sprints and feedback loops kept me sharp for every round.",
      role: "Associate Software Developer",
    },
    {
      name: "Renuka Joshi",
      company: "BNY Melon",
      package: "8 LPA",
      quote:
        "Focused mentorship on system design and behavioral rounds paid off.",
      role: "Software Developer",
    },
    {
      name: "Aayush",
      company: "Tech Mahindra",
      package: "4.5 LPA",
      quote:
        "Consistent mock interviews turned interview anxiety into muscle memory.",
      role: "Associate Software Developer",
    },
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="grid grid-cols-1 place-items-center overflow-hidden bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section className="px-fluid-container mt-8 mb-16 w-full grid-cols-5 items-center md:grid">
            {/* Image Section */}
            <div className="h-image-fluid relative isolate col-span-3 mr-auto aspect-square max-md:mb-16 max-md:ml-auto">
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute aspect-square h-[100%] rounded-full bg-black/5"></div>
                <div className="absolute aspect-square h-[92.5%] rounded-full bg-black/5"></div>
                <div className="absolute aspect-square h-[85%] rounded-full bg-black/5"></div>
                <div className="absolute aspect-square h-[77.5%] rounded-full bg-black/5"></div>
                <div className="absolute aspect-square h-[70%] rounded-full bg-black/5"></div>
              </div>

              {/* badges */}
              <div className="orbit absolute inset-0 z-10">
                <p className="text-badge-0 absolute top-[20%] right-[0%] inline-flex flex-col items-center justify-center rounded-full bg-blue-200 px-3 py-2 text-center text-blue-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">500+</span> Students
                  Trained
                </p>
                <p className="text-badge-0 absolute bottom-[10%] left-[10%] inline-flex flex-col items-center justify-center rounded-full bg-green-200 px-3 py-2 text-center text-green-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">100%</span> Placement
                  Assistance
                </p>
                <p className="text-badge-0 absolute top-[10%] left-[5%] inline-flex flex-col items-center justify-center rounded-full bg-orange-200 px-3 py-2 text-center text-orange-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">10+</span> Hiring
                  Partner's{" "}
                </p>
                <p className="text-badge-0 absolute -right-[5%] bottom-[30%] inline-flex flex-col items-center justify-center rounded-full bg-teal-200 px-3 py-2 text-center text-teal-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">100+</span> Live
                  Projects Delivered
                </p>
                <p className="text-badge-0 absolute top-[0%] right-[30%] inline-flex flex-col items-center justify-center rounded-full bg-fuchsia-200 px-3 py-2 text-center text-fuchsia-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">5+</span> College MOU's
                </p>
                <p className="text-badge-0 absolute bottom-[40%] -left-[7%] inline-flex flex-col items-center justify-center rounded-full bg-white px-3 py-2 text-center sm:text-xs md:text-sm lg:text-base">
                  <span className="block font-semibold">300+ Hrs.</span>Live
                  Recorded Session
                </p>
                <p className="text-badge-0 absolute right-[20%] bottom-[0%] inline-flex flex-col items-center justify-center rounded-full bg-yellow-200 px-3 py-2 text-center text-yellow-900 sm:text-xs md:text-sm lg:text-base">
                  <span className="flex gap-1 font-semibold">
                    <span>5</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      width={12}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-900"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                  Google Reviews
                </p>
              </div>

              {/* Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute aspect-square h-[62.5%] overflow-hidden rounded-full">
                  <img src="/images/kishan.webp" alt="" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="request-demo-form" className="col-span-2 flex items-center justify-center scroll-mt-36">
              <LeadGenerationForm />
            </div>
          </section>

          <section
            id="about"
            className="px-fluid-container flex flex-col items-center lg:pb-5"
          >
            <h2 className="text-xl-0 mb-10 mt-6 text-center leading-tight font-[900] text-[#1B438F] capitalize md:mb-16 lg:mb-20">
              Why choose Coding Savvy?
            </h2>
            <div className="row-auto grid max-w-fit grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              <InfoCard
                title="Affordability & Quality"
                description="Quality Job-focused Education at an affordable price"
                imgSrc="/images/chess-fill.svg"
              />
              <InfoCard
                title="Proven Track Record"
                description="Backed by student success stories, placements."
                imgSrc="/images/star-badge.svg"
              />
              <InfoCard
                title="Live + Recorded Classes"
                description="Live and recorded sessions with continuous TA support."
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
        <div className="bg-gradient-to-b from-[#e7ecf4] to-[#bec9df]">
          <div className="px-fluid-container flex items-center justify-center py-24 lg:min-h-[90vh]">
            <CourseFeaturesCard />
          </div>

          <section id="features" className="scroll-mt-32 bg-white pt-21 pb-16">
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
                    <ButtonLink href="#request-demo-form" label="Apply Now" />
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
                    href="/brouchre.pdf"
                    label="Download brochure"
                    bgColor="#fff"
                    download="Coding Savvvy Brochure.pdf"
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
                      <ButtonLink href="#request-demo-form" label="Apply now" />
                    </td>
                    <td className="py-6 pl-2.5">
                      <ButtonLink
                        href="/brochure.pdf"
                        label="Download brochure"
                        bgColor="#fff"
                        download="Coding Savvvy Brochure.pdf"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <section id="courses" className="bg-[#CFD7E8] py-20 lg:py-28">
          <div className="px-fluid-container">
            <h2 className="text-xl-0 mb-10 text-center leading-tight font-[900] text-[#1B438F] capitalize md:mb-16 lg:mb-20">
              Courses
            </h2>

            {/* Courses Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {courseData.map((course, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                >
                  {/* Header Group */}
                  <div className="mb-6">
                    <h3 className="flex min-h-[3rem] items-center text-xl leading-tight font-[800] text-[#1B438F]">
                      {course.title}
                    </h3>

                    <div className="mt-4 flex items-baseline">
                      <h4 className="text-3xl font-[900] text-[#1F1D39]">
                        {course.price}
                      </h4>
                      {/* Optional: Add 'per course' or similar here if needed */}
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="mb-6 border-gray-100" />

                  {/* Features List */}
                  <ul className="mb-8 flex-1 space-y-4">
                    {course.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm font-[600] text-gray-600"
                      >
                        <div className="mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1B438F]/10">
                          <svg
                            className="h-3 w-3 text-[#1B438F]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="text-white">
                    <ButtonLink href="#request-demo-form" label="Enroll Now" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="placements"
          className="font-montserrat relative overflow-hidden bg-gradient-to-b from-[#CFD7E8] to-[#eef2f6] py-20 lg:py-24"
        >
          <div className="px-fluid-container">
            <h2 className="text-xl-0 mb-10 text-center leading-tight font-[900] text-[#1B438F] capitalize md:mb-16 lg:mb-20">
              Placements
            </h2>
            {/* Grid Layout */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {placements.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="group relative flex flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#1B438F]/30 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(27,67,143,0.15)]"
                >
                  {/* Top Section: Stats */}
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-[900] tracking-tight text-[#081329]">
                        {item.company}
                      </h3>
                      <div className="mt-2 h-1 w-8 rounded-full bg-[#1B438F] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </div>
                    <div className="rounded-full border border-[#1B438F]/10 bg-[#eef4ff] px-4 py-1.5 text-sm font-[800] tracking-wide text-[#1B438F] shadow-sm transition-colors duration-300 group-hover:bg-[#1B438F] group-hover:text-white">
                      {item.package}
                    </div>
                  </div>

                  {/* Middle Section: Quote */}
                  <div className="relative mb-8">
                    {/* Quote Icon */}
                    {/* <svg
                      className="absolute -top-3 -left-2 h-8 w-8 -scale-x-100 transform text-gray-300 opacity-40 transition-colors group-hover:text-[#1B438F]/20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.929 15.081C15.537 14.239 16.307 13.62 17.239 13.224L17.239 12C16.887 12 16.486 11.97 16.036 11.91C14.796 11.75 13.796 11.19 13.036 10.23C12.276 9.27 11.896 8.09 11.896 6.69L11.896 3L21.017 3L21.017 11.58C21.017 14.46 20.212 16.71 18.602 18.33C16.992 19.95 14.797 21 12.017 21L12.017 18L14.017 21ZM5.01697 21L5.01697 18C5.01697 16.896 5.32097 15.923 5.92897 15.081C6.53697 14.239 7.30697 13.62 8.23897 13.224L8.23897 12C7.88697 12 7.48597 11.97 7.03597 11.91C5.79597 11.75 4.79597 11.19 4.03597 10.23C3.27597 9.27 2.89597 8.09 2.89597 6.69L2.89597 3L12.017 3L12.017 11.58C12.017 14.46 11.212 16.71 9.60197 18.33C7.99197 19.95 5.79697 21 3.01697 21L3.01697 18L5.01697 21Z" />
                    </svg> */}
                    <p className="relative z-10 pl-1 text-[0.95rem] leading-relaxed font-medium text-gray-600 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Bottom Section: Name only (Bigger) */}
                  <div className="border-t border-gray-200 pt-6 transition-colors group-hover:border-[#1B438F]/20">
                    <div className="flex flex-col">
                      <span className="text-lg font-[900] text-[#1B438F]">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors group-hover:text-[#1B438F]">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
