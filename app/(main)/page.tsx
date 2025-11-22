import { TestimonialCarousel } from "@/components/Animations";
import { Button } from "@/components/Button";
import { CourseFeaturesCard, InfoCard } from "@/components/Cards";
import { LeadGenerationForm } from "@/components/Forms";
import Hero from "@/components/Hero";

export default function Home() {
  const privatePersonalizedTutoring = [
    "1:1 Private Classes",
    "1/2/3/4 Classes per Week, Customized to Your Convenience (1 Hour Each)",
    "Personalized Study Plan Based on the Student's Strengths and Weaknesses",
    "Time Management and Test-Taking Strategies",
    "Mock Evaluations",
    "Doubt Clearing",
    "Complete Study Material",
  ];

  const about = [
    "GRE Score: 337",
    "Perfect 170 In Quant—Three Consecutive Times",
    "4+ Years of GRE Teaching Experience",
    "Mentored Over 1,200 Students",
    "99th Percentile In CAT; Admitted to Multiple IIMs",
  ];

  return (
    <>
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-[#1b428e] to-[#e7ecf4]">
          <section
            id="about"
            className="container mx-auto flex flex-col items-center px-5 lg:pb-5"
          >
            <h2 className="font-montserrat mb-10 text-center text-2xl font-[900] text-white capitalize sm:text-3xl md:mb-16 md:text-4xl lg:mb-20">
              Why join Universe Course?
            </h2>
            <div className="row-auto grid max-w-fit grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
              <InfoCard
                title="Realistic Strategies"
                description="No fluff, just proven techniques that work."
                imgSrc="/images/chess-fill.svg"
              />
              <InfoCard
                title="Beginner Friendly"
                description="A supportive environment for all skill levels."
                imgSrc="/images/star-badge.svg"
              />
              <InfoCard
                title="Comprehensive"
                description="Covers everything you need, nothing you don't."
                imgSrc="/images/book-education.png"
              />
              <InfoCard
                title="Affordable"
                description="High quality prep at a fair price."
                imgSrc="/images/money-bag.png"
              />
            </div>
          </section>
        </div>
        <div
          id="courses"
          className="bg-gradient-to-b from-[#e7ecf4] to-[#bec9df] px-5"
        >
          <div className="container mx-auto flex items-center justify-center py-24 lg:min-h-[90vh]">
            <CourseFeaturesCard />
          </div>
          <section
            id="private-personalised-tutoring"
            className="container mx-auto px-5 pt-12 pb-21"
          >
            <div className="flex flex-wrap items-center justify-center gap-12 text-[#1F1D39]">
              <article className="inline-block rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-8 sm:py-10 md:rounded-3xl md:px-12 md:py-12">
                <h2 className="pb-8 text-start text-2xl font-[900] text-[#1B438F] sm:text-4xl">
                  Private Personalized Tutoring
                </h2>
                <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33]">
                  {privatePersonalizedTutoring.map((data, key) => (
                    <li key={key} className="">
                      <div
                        key={`${data}-${key}`}
                        className="px-2.5 py-2 text-sm sm:text-base"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                          <p>{data}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="pt-8 pr-2.5 text-white">
                  <Button label="Know more" />
                </div>
              </article>
              <LeadGenerationForm />
            </div>
          </section>
        </div>
      </main>

      <div className="bg-gradient-to-b from-[#1c4490] to-[#0f2247]">
        <section
          id="testimonials"
          className="relative flex items-center justify-center overflow-hidden pt-16 pb-38"
        >
          <TestimonialCarousel
            testimonialsData={[
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 1",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 2",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 3",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 4",
                linkedin: "#",
              },
              {
                imgSrc: "/images/victoria.jpg",
                title: "Best Course for GRE exams",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices",
                greScore: "328",
                designation: "Standford Odio Co.",
                name: "Victoria Wotton 5",
                linkedin: "#",
              },
            ]}
          />
        </section>

        <section id="instructor" className="scroll-mt-6">
          <article className="min-h-[450px] bg-white px-5 py-12 sm:pt-21">
            <div className="flex flex-wrap-reverse justify-center gap-12">
              <div className="flex aspect-[2.05/1] max-h-72 justify-center overflow-hidden rounded-xl">
                <img
                  className="w-full object-contain"
                  src={"/images/score-card.png"}
                  alt="Score card"
                />
              </div>
              <div className="col-span-2">
                <h3 className="mb-6 text-2xl font-[900] text-[#1B438F] sm:text-4xl">
                  Punit Mishra
                </h3>
                <ul className="divide-y divide-[#1B438F33] border-y border-y-[#1B438F33] text-[#1F1D39]">
                  {about.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2.5 px-2.5 py-2 text-sm sm:text-base"
                    >
                      <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
