import React from "react";

const Resume = () => {
  return (
    <>
      <section class="text-blue-300 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-blue-700 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <img src="https://img.icons8.com/ios-filled/50/4a90e2/education.png"/>
              {/* <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div> */}
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-blue-700 mb-1 text-xl">
                  Education
                </h2>
                <ul className="list-disc">
                    <li>
                        <p class="leading-relaxed uppercase font-bold">
                            Master of sciences in Computer science
                        </p>
                    </li>
                    <li>
                        <p class="leading-relaxed uppercase font-bold">
                            BS honours in Computer science
                        </p>
                    </li>
                </ul>
                
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-blue-700 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <img src="https://img.icons8.com/ios/50/4a90e2/job.png"/>
              {/* <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div> */}
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-blue-700 mb-1 text-xl">
                  Experience
                </h2>
                <ul className="list-disc">
                    <li>
                        <p class="leading-relaxed uppercase font-bold">
                            2009-2010--------Lecturer-computer programming-Electronics Department-UOL 
                        </p>
                    </li>
                    <li>
                        <p class="leading-relaxed uppercase font-bold">
                            2012-2015--------Lecturer-computer Science- computer science Department-UOL 
                        </p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-blue-700 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-yellow-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/4a90e2/external-medal-digital-marketing-flatart-icons-outline-flatarticons-2.png"/>
              {/* <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div> */}
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-bold title-font text-blue-700 mb-1 text-xl">
                  Certification
                </h2>
                <ul className="list-disc">
                    <li>
                        <p class="leading-relaxed uppercase font-bold">
                            2020 --------IBM Data Science Professional Certificate 
                        </p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Resume;
