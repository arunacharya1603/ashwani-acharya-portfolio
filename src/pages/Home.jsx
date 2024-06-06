import React from "react";
import About from "./About";
import Services from "../components/Services";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section className="h-screen flex items-center justify-center">
        <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg container mx-auto text-center text-white">
          <h1 className="text-4xl mt-4 font-mono font-extrabold text-yellow-800 md:text-6xl">Ashwani Acharya</h1>
          <p className="mt-4 text-yellow-700 font-semibold text-xl md:text-2xl">
            Advocate & Legal Consultant
          </p>
          <div className="max-w-lg mx-auto  p-8 rounded-lg shadow-lg text-center">
            <p className="mb-4 text-yellow-700 font-semibold text-l md:text-xl ">
              Feel free to reach out to me via email.
            </p>
            <a
              href="mailto:your-email@example.com?subject=Contact%20Request&body=Please%20provide%20your%20message%20here."
              className="inline-block"
            >
              <button className="w-32 h-12 rounded-md mt-3 bg-yellow-800 text-white shadow-yellow-600 drop-shadow hover:bg-yellow-900">
                Contact Us
              </button>
            </a>
          </div>{" "}
        </div>
      </section>

      <section id="about">
        <div className="container mx-auto">
          <About />
        </div>
      </section>

      <section id="services">
        <div className="container mx-auto">
          <Services />
        </div>
      </section>

      <section id="contact">
        <div className="container mx-auto">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
