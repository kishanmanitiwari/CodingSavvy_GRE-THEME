import { Button } from "./Button";

export function LeadGenerationForm() {
  return (
    <div className="inline-block rounded-2xl bg-white px-6 py-5 text-lg font-[400] shadow-lg shadow-[#1B438F4D] sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-8">
      <h2 className="mb-6 text-2xl font-[900] text-[#1B438F] capitalize sm:text-4xl">
        Request demo session
      </h2>
      <form className="flex flex-col gap-2 text-sm text-[#1F1D39] sm:text-base">
        <div>
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2 border border/5 border-gray-200"
            placeholder="Eg.: John Doe"
            type="text"
            id="name"
          />
        </div>
        <div className="flex gap-2">
          <div className="flex-2/3">
            <label className="block" htmlFor="email">
              Email ID
            </label>
            <input
              className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2 border border/5 border-gray-200"
              placeholder="Eg.: johndoe@mail.com"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label className="block capitalize" htmlFor="contactNumber">
              Contact number
            </label>
            <input
              placeholder="Eg.: +91-7798773994"
              type="text"
              id="contactNumber"
              pattern="+[0-9]{1,3}-[0-9]{10}"
              className="mt-2 mb-3 h-8 w-full rounded-md bg-black/5 px-2 border border/5 border-gray-200"
            />
          </div>
        </div>
        <div>
          <label className="block" htmlFor="message">
            Message
          </label>
          <textarea
            className="mt-2 mb-3 h-24 w-full resize-none rounded-md bg-black/5 px-2 py-1 border border/5 border-gray-200"
            placeholder="Eg.: GRE Universe Course"
            id="message"
          />
        </div>
        <div className="text-white">
          <Button label="Submit" />
        </div>
      </form>
    </div>
  );
}
