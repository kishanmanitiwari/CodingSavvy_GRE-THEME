import { ButtonLink } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="max-w-[263px] rounded-xl bg-white px-2.5 py-4 text-center capitalize shadow-lg transition-transform ease-in hover:scale-105 xl:px-4 xl:py-6">
      <h3 className="text-card-base-0 font-[400]">{title}</h3>
      <img
        className="mx-auto my-4 aspect-square max-h-20 w-[60%] max-w-20 rounded-full border-2 border-[#FF9053] px-3 py-3 sm:my-10 sm:h-[100px] sm:w-[100px]"
        src={imgSrc}
        alt=""
      />
      <p className="text-card-xs-0 font-[300] text-balance">{description}</p>
    </section>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <article className="inline-block rounded-2xl bg-white px-6 py-6 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-8 sm:py-10 md:rounded-3xl md:px-24 md:py-12">
      {children}
    </article>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "Placement Supreme - 6 month flagship with placement assistance.",
    "Internship Program with project-based learning.",
    "Java Full Stack Development curriculum.",
    "DevOps bootcamp covering CI/CD and cloud basics.",
    "Mobile App Development track.",
    "Languages: C++, Java, TypeScript, JavaScript, Spring Boot, Next.js, Node.js.",
    "Recorded sessions + live support and free career mentorship.",
    "MOU with 5+ colleges; 1000+ learners, 100+ placements.",
  ];

  return (
    <Card>
      <h2 className="text-xl-0 mb-3 text-center leading-tight font-[900] text-[#1B438F] uppercase">
        Coding Savvy Job Bootcamp
      </h2>
      <p className="text-sm-0 sm:text-x text-center font-[600] text-pretty capitalize">
        Coding bootcamps built to get you job-ready
      </p>

      <ul className="my-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2"
          >
            <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
            <p className="text-sm-0 sm:text-bas text-[#211C37]">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-sm-0 text-white">
        <ButtonLink href="/#request-demo-form" label="Apply now" />
      </div>
    </Card>
  );
}

interface TestimonialCardProps {
  title: string;
  description: string;
  name: string;
  imgSrc: string;
}

export function TestimonialCard({
  title,
  description,
  name,
  imgSrc,
}: TestimonialCardProps) {
  return (
    <article className="isolate mt-2 flex w-[90%] max-w-4xl flex-col items-center gap-5 rounded-2xl border border-[#E7ECF4] bg-white px-6 py-6 shadow-lg shadow-[#1B438F0D] transition-all duration-300 ease-in hover:scale-105 hover:shadow-2xl hover:shadow-[#1B438F15] sm:flex-row sm:items-stretch sm:gap-8 sm:px-8 sm:py-7 md:px-14 md:py-10 lg:gap-10">
      <div className="relative flex flex-shrink-0 justify-center sm:w-40 sm:justify-start md:w-48">
        <img
          loading="lazy"
          className="absolute -top-1 -left-1 -z-10 h-6 w-6 sm:-top-3 sm:-left-3 sm:h-10 sm:w-10"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          loading="lazy"
          className="h-32 w-32 rounded-full object-cover ring-4 ring-[#1B438F] sm:h-40 sm:w-40 md:h-48 md:w-48"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="flex min-w-0 flex-grow flex-col justify-between">
        <div>
          <h3 className="text-card-base-1 mb-3 line-clamp-2 font-[800]">
            {title}
          </h3>
          <p className="text-sm-0 mb-4 line-clamp-4 font-semibold text-[#626262] italic sm:line-clamp-none lg:mb-8">
            {description}
          </p>
        </div>
        <div>
          <div className="mb-3">
            <p className="text-sm-0 truncate font-[900] text-black">{name}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
