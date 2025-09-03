import React, { useState } from "react";
import about1 from "../../assets/Web/About/About.jpg";
import { Link } from "react-router-dom";

function About() {
  const faqs = [
    {
      question: "How do I update my billing information?",
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
    {
      question: "How do I find my purchase history?",
      answer:
        "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <main
        className="relative container mx-auto  w-full mt-8 md:flex md:items-center xl:mt-12"
        role="region"
        aria-label="Customer Testimonial"
      >
        <div className="absolute w-full bg-indigo-600 -z-10 md:h-96 rounded-2xl" />
        <div className="w-full p-6 bg-indigo-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <img
            loading="lazy"
            className="h-28 w-28 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
            src={about1}
            alt="Client photo of Ema Watson"
          />
          <div className="mt-2 md:mx-6">
            <div>
              <h2 className="text-xl font-medium tracking-tight text-white">
                Ema Watson
              </h2>
              <p className="text-blue-200">Marketing Manager at Digital den</p>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
              "The range of products is impressive, and I always find the latest
              gadgets and tech accessories at unbeatable prices. What really
              sets Digital Den apart, though, is their outstanding customer
              service. Whenever I've had a question or needed help, their team
              has been prompt and professional."
            </p>
          </div>
        </div>
      </main>

      {/*Trusted Worldwide*/}
      <section>
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium text-black">Trusted Worldwide</p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Trusted by over 600 million users and 10,000 teams
            </h2>
            <p className="font-light text-gray-500 sm:text-xl ">
              Our rigorous security and compliance standards are at the heart of
              all we do. We work tirelessly to protect you and your customers.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Explore Legality Guide
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Visit the Trust Center
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                className="w-10 h-10 mb-2 text-indigo-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">99.99% uptime</h3>
              <p className="font-light text-gray-500 ">
                For Landwind, with zero maintenance downtime
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-indigo-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">600M+ Users</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Trusted by over 600 milion users around the world
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-indigo-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">100+ countries</h3>
              <p className="font-light text-gray-500 ">
                Have used Landwind to create functional websites
              </p>
            </div>
            <div>
              <svg
                className="w-10 h-10 mb-2 text-indigo-600 md:w-12 md:h-12 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <h3 className="mb-2 text-2xl font-bold ">5+ Million</h3>
              <p className="font-light text-gray-500 ">Transactions per day</p>
            </div>
          </div>
        </div>
      </section>
      {/*Faq  */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
              FAQs
            </h6>
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion py-6 px-6 border-b border-gray-200 rounded-2xl transition-all duration-500 hover:bg-indigo-50 ${
                  openIndex === index ? "bg-indigo-50" : ""
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="accordion-toggle group flex items-center justify-between w-full text-left text-gray-900 transition duration-500 hover:text-indigo-600"
                >
                  <h5 className="text-lg font-medium">{faq.question}</h5>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-500 ${
                      openIndex === index ? "rotate-180 text-indigo-600" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ${
                    openIndex === index ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-900 leading-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-indigo-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl font-medium text-gray-900 md:text-2xl">
                Michael Gough brings a rich and diverse background to his role
                at DigitalDen. His professional journey is particularly
                noteworthy for its unique trajectory, beginning with
                architectural training and evolving through various leadership
                positions in prominent tech companies
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 ">
                  CEO at Digitalden
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default About;
