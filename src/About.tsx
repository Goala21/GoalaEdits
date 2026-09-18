function About() {
  return (
    <div className="mx-auto max-w-2xl flex flex-col pt-5 text-2xl text-neutral-200">
      <div>
        <h1 className="pb-10 font-bold text-3xl flex justify-center">About me</h1>
      </div>

      <div className="flex flex-col gap-16">

        <div className="grid md:grid-cols-[160px_1fr] gap-16 text-center md:text-left">
          <div className="border-r-0 md:border-r-2 border-transparent md:border-[#E24E3C] self-start">
            <h1 className="pb-5 font-bold">Languages</h1>
          </div>
          <div>
            <p className="text-lg pb-1 pl-4">Maltese - Native</p>
            <p className="text-lg pb-1 pl-4">English - Fluent</p>
            <p className="text-lg pb-1 pl-4">German - Basic</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[160px_1fr] gap-16 text-center md:text-left">
          <div className="border-r-0 md:border-r-2 border-transparent md:border-[#E24E3C] self-start">
            <h1 className="pb-5 font-bold">Passions</h1>
          </div>
          <div>
            <p className="text-lg pb-1 pl-5">Passionate about technology and creativity</p>
            <p className="text-lg pb-1 pl-5">Creating content, applications, games</p>
            <p className="text-lg pb-1 pl-5">Video editing</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[160px_1fr] gap-16 pt-5 leading-relaxed text-center md:text-left">
          <div className="border-r-0 md:border-r-2 border-transparent md:border-[#E24E3C] self-start">
            <h1 className="pb-5 font-bold">Skills</h1>
          </div>
          <div>
            <p className="text-lg pb-1 pl-5">Programming languages: HTML, CSS, JavaScript, TypeScript, Python, C#</p>
            <p className="text-lg pb-1 pl-5">Frameworks: React, Next.js, Node.js</p>
            <p className="text-lg pb-1 pl-5">Game development: Unity</p>
            <p className="text-lg pb-1 pl-5">Video editing: Adobe Premiere Pro, Davinci Resolve</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[160px_1fr] gap-16 pt-5 leading-relaxed text-center md:text-left">
          <div className="border-r-0 md:border-r-2 border-transparent md:border-[#E24E3C] self-start">
            <h1 className="pb-5 font-bold">Education</h1>
          </div>
          <div className="leading-relaxed">
            <p className="text-lg pb-1 pl-5">Primary Education - St. Thomas Moore College</p>
            <p className="text-lg pb-1 pl-5">Secondary Education - St. Michael School</p>
            <p className="text-lg pb-1 pl-5">Diploma in Media - MCAST</p>
            <p className="text-lg pb-1 pl-5">Advanced Diploma in Creative Media Production - MCAST</p>
            <p className="text-lg pb-1 pl-5">Diploma EQF Level 5 in Digital Marketing - ICE Malta</p>
            <p className="text-lg pb-1 pl-5">Diploma MQF Level 5 in Human Resources - MCAST</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[160px_1fr] gap-16 pt-5 leading-relaxed text-center md:text-left">
          <div className="border-r-0 md:border-r-2 border-transparent md:border-[#E24E3C] self-start">
            <h1 className="pb-5 font-bold">Work Experience</h1>
          </div>
          <div className="leading-relaxed pb-5">
            <p className="text-lg pb-1 pl-5">Office Administrator | 2+ Years</p>
            <p className="text-lg pb-1 pl-5">Customer Service Agent | 1 Year</p>
            <p className="text-lg pb-1 pl-5">Video Editor | 1 Year</p>
            <p className="text-lg pb-1 pl-5">Freelance Video Editor | 1 Year</p>
            <p className="text-lg pb-1 pl-5">Waiter | 3 Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;