import React from "react";
import AnimatedSection from "./AnimatedSection";

const certificates = [
  {
    title: "Internship Certificate",
    issuer: "Nexe-Agent",
    id: "NXAB100180",
    description: "Certificate of completion awarded for successfully completing an internship program, demonstrating professional skills and dedication.",
    file: "/NXAB100180.pdf",
  },
];

function Certificate() {
  return (
    <AnimatedSection id="Certificate">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Certifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-foreground/80">
            Achievements and certificates earned through internships and professional development.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-white/10 rounded-xl p-8 shadow-xl hover:shadow-primary/20 transition-shadow duration-300 max-w-sm w-full"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-foreground text-center mb-1">
                {cert.title}
              </h2>
              <p className="text-primary text-sm text-center font-medium mb-1">{cert.issuer}</p>
              <p className="text-foreground/50 text-xs text-center mb-4">ID: {cert.id}</p>
              <p className="text-foreground/80 text-sm leading-relaxed text-center mb-6">
                {cert.description}
              </p>
              <div className="flex justify-center">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary/80 transition-colors text-sm font-medium"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default Certificate;
