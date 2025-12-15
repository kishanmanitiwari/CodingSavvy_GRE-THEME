"use client";

import { useState } from "react";

export function LeadGenerationForm() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const contactNumber = document.getElementById(
      "contactNumber",
    ) as HTMLInputElement;
    const course = document.getElementById("course") as HTMLInputElement;

    if (
      !(name?.value && email?.value && contactNumber?.value && course?.value)
    ) {
      console.log(name.value, email.value, contactNumber.value, course.value)
      setMessage("Please fill in all the fields.");
      setTimeout(() => setMessage(null), 5000);
      return;
    }

    let formData = new FormData();
    formData.append("entry.2005620554", name.value);
    formData.append("entry.1045781291", email.value);
    formData.append("entry.1166974658", contactNumber.value);
    formData.append("entry.1065046570", course.value);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScLrjgA65b9k-vbD7Eic5HJHSE_dL1OGNd2B4bEWVhKDs5JHA/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      },
    ).then(() => {
      setMessage("We will get back to you soon!");

      setTimeout(() => {
        name.value = "";
        email.value = "";
        contactNumber.value = "";
        course.value = "";
        setMessage("")
      }, 5000);
    });
  };

  return (
    <div className="inline-block w-full max-w-lg rounded-xl bg-black/20 bg-gradient-to-b from-black/20 via-black/15 to-black/20 px-6 py-8 text-white shadow-2xl backdrop-blur-2xl lg:px-8 lg:py-11">
      <h2 className="text-xl-0 mb-3 leading-tight font-[900] text-white capitalize">
        Book a class
      </h2>
      <form className="space-y-4">
        {/* Name Input */}
        <div>
          <label
            className="block text-sm font-medium lg:text-base"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1.5 block w-full rounded-md border border-white/10 bg-black/20 px-3 py-2.5 text-white backdrop-blur-sm transition-all placeholder:text-gray-300 focus:border-[#1F1D39] focus:ring-2 focus:ring-[#1F1D39] focus:outline-none sm:text-sm sm:leading-6"
            placeholder="Eg.: John Doe"
            type="text"
            id="name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            className="block text-sm font-medium lg:text-base"
            htmlFor="email"
          >
            Email ID
          </label>
          <input
            className="mt-1.5 block w-full rounded-md border border-white/10 bg-black/20 px-3 py-2.5 text-white backdrop-blur-sm transition-all placeholder:text-gray-300 focus:border-[#1F1D39] focus:ring-2 focus:ring-[#1F1D39] focus:outline-none sm:text-sm sm:leading-6"
            placeholder="Eg.: johndoe@example.com"
            type="email"
            id="email"
          />
        </div>

        {/* Contact Input */}
        <div>
          <label
            className="block text-sm font-medium capitalize lg:text-base"
            htmlFor="contactNumber"
          >
            Contact number
          </label>
          <input
            placeholder="Eg.: +91-7798773934"
            type="tel"
            id="contactNumber"
            pattern="\+?[0-9\s-]{10,15}"
            className="mt-1.5 block w-full rounded-md border border-white/10 bg-black/20 px-3 py-2.5 text-white backdrop-blur-sm transition-all placeholder:text-gray-300 focus:border-[#1F1D39] focus:ring-2 focus:ring-[#1F1D39] focus:outline-none sm:text-sm sm:leading-6"
          />
        </div>

        {/* Course Select with Custom SVG */}
        <div>
          <label
            className="block text-sm font-medium lg:text-base"
            htmlFor="course"
          >
            Course
          </label>
          <div className="relative mt-1.5">
            <select
              id="course"
              className="block w-full cursor-pointer appearance-none rounded-md border border-white/10 bg-black/20 px-3 py-2.5 text-white backdrop-blur-sm transition-all focus:border-[#1F1D39] focus:ring-2 focus:ring-[#1F1D39] focus:outline-none sm:text-sm sm:leading-6"
            >
              <option className="hidden bg-gray-800 text-white" value="">
                Select Course
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Java Fundamentals"
              >
                Java Fundamentals
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Placement Preparation in Java"
              >
                Placement Prepration in Java
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Full Stack Web Development"
              >
                Full Stack Web Development
              </option>
              <option
                className="bg-gray-800 text-white"
                value="Mobile App Development"
              >
                Mobile App Development
              </option>
            </select>

            {/* Custom Chevron Down SVG */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="mt-6 w-full rounded-md bg-[#1F1D39] px-3 py-3 text-sm font-bold tracking-wider text-white uppercase transition-all hover:translate-y-[-1px] hover:bg-[#2a274f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1D39]"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-5 -mb-5 text-center">{message}</p>}
    </div>
  );
}
