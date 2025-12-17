"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface Job {
  id: number;
  role: string;
  company: string;
  location: string;
  salary: string;
  eligibility: string;
  description: string;
  tags: string[];
  posted: string;
}

const jobsData: Job[] = [
  {
    id: 1,
    role: "SDE Intern",
    company: "TechNova Solutions",
    location: "Bangalore (Hybrid)",
    salary: "₹6 - 10 LPA",
    eligibility: "B.Tech CSE/IT, 2025/2026 Batch, Min 7.5 CGPA",
    description:
      "We are looking for a passionate SDE Intern to work on high-scale backend systems. You will be responsible for writing clean, maintainable code in Java/Spring Boot and collaborating with senior engineers on architectural decisions.",
    tags: ["Java", "Spring Boot", "DSA"],
    posted: "2 days ago",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Pixel",
    location: "Remote",
    salary: "₹4 - 8 LPA",
    eligibility: "Any Graduate, Strong React.js portfolio",
    description:
      "Translate UI/UX designs into responsive web applications using React.js and Tailwind CSS. Experience with state management (Redux/Zustand) and API integration is required.",
    tags: ["React.js", "Tailwind", "Redux"],
    posted: "1 day ago",
  },
  {
    id: 3,
    role: "Data Analyst Trainee",
    company: "FinCorp Analytics",
    location: "Mumbai",
    salary: "₹5 - 7 LPA",
    eligibility: "B.Tech/B.Sc Stats, Proficiency in Python & SQL",
    description:
      "Analyze large datasets to derive actionable business insights. You will create dashboards using PowerBI/Tableau and automate data pipelines using Python.",
    tags: ["Python", "SQL", "PowerBI"],
    posted: "Just now",
  },
  {
    id: 4,
    role: "Full Stack Engineer",
    company: "StartUp X",
    location: "Gurgaon",
    salary: "₹12 - 18 LPA",
    eligibility: "1+ Years Exp or Exceptional Projects",
    description:
      "End-to-end development of our core product. You should be comfortable with the MERN stack and deploying applications on AWS.",
    tags: ["MERN", "AWS", "System Design"],
    posted: "3 days ago",
  },
  {
    id: 5,
    role: "DevOps Associate",
    company: "CloudScale Inc.",
    location: "Hyderabad",
    salary: "₹5 - 9 LPA",
    eligibility: "B.Tech, Knowledge of Linux & Docker",
    description:
      "Assist in managing CI/CD pipelines and cloud infrastructure. Hands-on experience with Docker, Kubernetes, and basic shell scripting is preferred.",
    tags: ["Linux", "Docker", "CI/CD"],
    posted: "5 days ago",
  },
  {
    id: 6,
    role: "QA Engineer",
    company: "SecureNet",
    location: "Pune",
    salary: "₹4.5 - 6.5 LPA",
    eligibility: "B.Tech/MCA, Manual + Automation Basics",
    description:
      "Ensure software quality through manual and automated testing. You will write test cases and track bugs using Jira.",
    tags: ["Selenium", "Java", "Jira"],
    posted: "1 week ago",
  },
];

export default function PlacementPortal() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    const term = searchTerm.toLowerCase();
    return (
      job.company.toLowerCase().includes(term) ||
      job.role.toLowerCase().includes(term) ||
      job.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  return (
    <main className="pb-20 lg:pt-16">
      <div className="mx-auto mb-10 max-w-3xl">
        <SearchBar {...{ searchTerm, setSearchTerm }} />
      </div>

      {filteredJobs.length > 0 ? (
        <JobGrid {...{ filteredJobs, setSelectedJob }} />
      ) : (
        <NoJobsFound {...{ setSearchTerm }} />
      )}

      {selectedJob && (
        <div className="px-fluid-container fixed inset-0 mt-16 flex items-center justify-center bg-black/50">
          <JobApplicationForm {...{ selectedJob, setSelectedJob }} />
        </div>
      )}
    </main>
  );
}

interface JobApplicationFormProps {
  selectedJob: Job;
  setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
}

function JobApplicationForm({
  selectedJob,
  setSelectedJob,
}: JobApplicationFormProps) {
  const [resume, setResume] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const closeForm = () => {
    setSelectedJob(null);
    setResume(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      // Optional: Add validation for file type/size here
      setResume(droppedFile);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the file input click
    setResume(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset input value
    }
  };

  const handleSubmit = () => {
    if (!resume) {
      return;
    }
    // Handle form submission logic here
    closeForm();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl duration-500">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-gray-100 bg-gray-50/50 p-6">
        <div>
          <h2 className="text-xl font-bold tracking-wide text-[#081329]">
            Application Form
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Applying for{" "}
            <span className="font-extrabold text-[#1B438F]">
              {selectedJob.role}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-[#081329]">
              {selectedJob.company}
            </span>
          </p>
        </div>
        {/* <button
          onClick={closeForm}
          className="text-gray-400 transition-colors hover:text-[#1B438F]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
      </div>

      <form className="space-y-6 p-8" onSubmit={handleSubmit}>
        {/* Basic Fields */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081329]">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all outline-none hover:bg-white focus:border-[#1B438F] focus:ring-1 focus:ring-[#1B438F]"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-[#081329]">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition-all outline-none hover:bg-white focus:border-[#1B438F] focus:ring-1 focus:ring-[#1B438F]"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* File Upload Section */}
        <div>
          <label className="mb-2 block text-sm font-bold text-[#081329]">
            Upload Resume
          </label>

          {resume ? (
            // State: File Selected
            <div className="animate-in fade-in zoom-in-95 relative flex w-full items-center justify-between overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="relative">
                <div className="flex items-center gap-2 pr-6">
                  <div
                    className={`inline-block rounded-lg p-3 ${resume.type === "application/pdf" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"}`}
                  >
                    {/* PDF/Doc Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#081329] md:text-sm">
                      {resume.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(resume.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="absolute top-0 right-0 bottom-0 bg-white px-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div
              onClick={triggerFileInput}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative flex min-h-[160px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 transition-all duration-300 ${
                isDragging
                  ? "border-[#1B438F] bg-blue-50/50"
                  : "border-gray-300 bg-gray-50 hover:border-[#1B438F]/50 hover:bg-[#F4F6F9]"
              } `}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <div
                className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#1B438F] transition-transform ${isDragging ? "scale-110" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-600">
                <span className="font-bold text-[#1B438F] hover:underline">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-400">PDF, DOCX (Max 5MB)</p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3 border-t border-gray-100 pt-6">
          <button
            type="button"
            onClick={closeForm}
            className="rounded-lg px-6 py-2 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#081329]"
          >
            Cancel
          </button>
          <div className="text-white">
            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </div>
  );
}

interface JobGridProps {
  setSelectedJob: React.Dispatch<React.SetStateAction<Job | null>>;
  filteredJobs: Job[];
}

function JobGrid({ setSelectedJob, filteredJobs }: JobGridProps) {
  const isLoggedIn = useRef(true);
  const router = useRouter();

  const handleApplyClick = (job: Job) => {
    if (!isLoggedIn.current) {
      router.push("https://lms-auth.vercel.app/");
    } else {
      setSelectedJob(job);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map((job) => (
        <div
          key={job.id}
          className="group relative flex flex-col justify-start rounded-xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1B438F]/20 hover:shadow-xl"
        >
          {/* Header */}
          <div className="mb-4">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg leading-tight font-[800] text-[#1B438F]">
                {job.role}
              </h3>
              <span className="shrink-0 rounded bg-[#eef4ff] px-2 py-1 text-[10px] font-bold tracking-wide text-[#1B438F] uppercase">
                {job.posted}
              </span>
            </div>
            <p className="mb-3 text-sm font-semibold text-[#081329]">
              {job.company}
            </p>

            <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-gray-500">
              {/* Job Location */}
              <div className="flex items-center gap-1">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {job.location}
              </div>

              {/* Job Salary */}
              <div className="flex items-center gap-1">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {job.salary}
              </div>
            </div>
          </div>

          {/* Job Details Section */}
          <div className="mb-6">
            <div className="mb-3">
              <p className="mb-1 text-xs font-semibold tracking-wider text-[#081329] uppercase">
                Expectations
              </p>
              <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                {job.description}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold tracking-wider text-[#081329] uppercase">
                Eligibility
              </p>
              <p className="text-sm text-gray-600">{job.eligibility}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {job.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto flex justify-end text-white">
            <Button label="Apply Now" onClick={() => handleApplyClick(job)} />
          </div>
        </div>
      ))}
    </div>
  );
}

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full rounded-xl border border-gray-200 bg-white py-4 pr-4 pl-12 text-sm font-medium text-[#081329] placeholder-gray-400 shadow-sm transition-all outline-none focus:border-transparent focus:ring-2 focus:ring-[#1B438F]"
        placeholder="Search by Company, Role, or Skills (e.g. Java, React)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

interface NoJobsFoundProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

function NoJobsFound({ setSearchTerm }: NoJobsFoundProps) {
  return (
    <div className="py-20 text-center">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <svg
          className="h-8 w-8 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-bold text-[#081329]">No jobs found</h3>
      <p className="mt-2 text-gray-500">
        Try searching for a different role, company, or skill.
      </p>
      <button
        onClick={() => setSearchTerm("")}
        className="mt-4 text-sm font-bold text-[#1B438F] hover:underline"
      >
        Clear Search
      </button>
    </div>
  );
}
