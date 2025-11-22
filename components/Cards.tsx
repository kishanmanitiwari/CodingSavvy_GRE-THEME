import { Button } from "./Button";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export function InfoCard({ title, description, imgSrc }: InfoCardProps) {
  return (
    <section className="flex max-w-[263px] flex-col gap-4 justify-between rounded-xl bg-white px-3 py-4 text-center capitalize shadow-lg transition-transform ease-in hover:scale-105 xl:px-5 xl:py-6">
      <h3 className="text-sm font-[400] sm:text-lg xl:text-2xl">{title}</h3>
      <img
        className="mx-auto my-4 h-20 w-20 rounded-full border-2 border-[#FF9053] px-3 py-3 sm:h-[100px] sm:w-[100px]"
        src={imgSrc}
        alt=""
      />
      <p className="text-xs font-[300] sm:text-base">{description}</p>
    </section>
  );
}

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <article className="inline-block rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-8 sm:py-10 md:rounded-3xl md:px-24 md:py-12">
      {children}
    </article>
  );
}

export function CourseFeaturesCard() {
  const features = [
    "30 Beginner Videos for Quant",
    "60+ Hours of Pre-Recorded Classes (Quant/Verbal)",
    "Full Study Material (1000+ Questions)",
    "2 Full-Length Adaptive Mock Tests",
    "1200-Word Vocabulary List",
    "1-Month and 3-Month Study Plans",
    "Validity of 3 Months (Extendable)",
  ];

  return (
    <Card>
      <h2 className="text-center text-2xl font-[900] text-[#1B438F] uppercase sm:text-4xl">
        GRE Universe Course
      </h2>
      <p className="text-center text-base font-[600] capitalize sm:text-base">
        Your Entire GRE Universe In One Course — Everything You Need, Nothing
        You Don't.
      </p>

      <ul className="my-8">
        {features.map((feature, i) => (
          <li
            key={i}
            className="mt-2 flex items-center gap-2.5 border-b border-b-[#1B438F80] pb-2"
          >
            <div className="min-h-2.5 min-w-2.5 gap-2.5 rounded-full border border-[#FF9053] bg-[#FF90534D]"></div>
            <p className="text-sm text-[#211C37] sm:text-base">{feature}</p>
          </li>
        ))}
      </ul>

      <div className="text-sm text-white sm:text-base">
        <Button label="Enroll now" />
      </div>
    </Card>
  );
}

interface TestimonialCardProps {
  title: string;
  description: string;
  greScore: number | `${number}`;
  name: string;
  linkedin: string;
  designation: string;
  imgSrc: string;
}

export function TestimonialCard({
  title,
  description,
  greScore,
  name,
  designation,
  linkedin,
  imgSrc,
}: TestimonialCardProps) {
  return (
    <article className="grid w-[90%] max-w-4xl grid-cols-10 gap-3 rounded-2xl bg-white px-5 py-3 transition-all ease-in hover:scale-105 sm:gap-12 sm:px-8 sm:py-6 md:px-15 md:py-7 lg:px-12 lg:py-8">
      <div className="relative col-span-4">
        <img
          className="absolute top-0 -left-5"
          src="/icons/quote.png"
          alt="quote"
        />
        <img
          className="absolute top-10 h-[110%] max-w-[100%] rounded-full object-cover lg:h-[120%]"
          src={imgSrc}
          alt={name}
        />
      </div>
      <section className="col-span-6">
        <h3 className="mb-3 font-[800] sm:mb-5 sm:text-lg md:mb-6 md:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="mb-3 text-xs font-[600] text-[#626262] italic sm:mb-5 md:mb-12 md:text-base xl:text-lg">
          {description}
        </p>
        <div className="mb-3.5 flex gap-6 text-[#1B438F] sm:gap-9 md:gap-10 lg:gap-13">
          <p className="text-base font-[900] sm:text-xl md:text-2xl xl:text-3xl">
            {greScore}/330
          </p>
          <a href={linkedin}>
            <img
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
              src="/icons/linkedin.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
        <p className="text-xs font-[900] sm:text-base md:text-lg lg:text-xl">
          {name}
        </p>
        <p className="text-xs font-[500] text-[#21967B] sm:text-sm md:text-base xl:text-lg">
          {designation}
        </p>
      </section>
    </article>
  );
}

interface CourseCardProps {
  title: string;
  articles: number | `${number}`;
  assignments: number | `${number}`;
  members: number | `${number}`;
  imgSrc: string;
  className: string;
}

export function CourseCard({
  title,
  articles,
  assignments,
  members,
  imgSrc,
  className,
}: CourseCardProps) {
  return (
    <article className={`flex-grow rounded-lg px-1.5 pt-5 pb-1.5 ${className}`}>
      <div className="mx-3.5 mb-2">
        <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <img className="h-6 w-6" src={imgSrc} alt="" />
        </div>
        <h4 className="text-sm">{title}</h4>
      </div>
      <div className="flex justify-between rounded-md bg-white/70 px-5 py-1">
        <div className="flex items-center gap-1.5">
          <img src="/icons/book.png" alt="articles" />
          <span>{articles}</span>
        </div>
        <div className={`${className} min-w-0.5 rounded-full`}></div>
        <div className="flex items-center gap-1.5">
          <img src="/icons/tasks.png" alt="assignments" />
          <span>{assignments}</span>
        </div>
        <div className={`${className} min-w-0.5 rounded`}></div>
        <div className="flex items-center gap-1.5">
          <img src="/icons/people.png" alt="members" />
          <span>{members}</span>
        </div>
      </div>
    </article>
  );
}
