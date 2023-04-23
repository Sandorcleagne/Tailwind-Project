import React from "react";

const NavBar = () => {
  return (
    <div className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">Acme Rockets 🚀</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden focus:outline-none cursor-pointer"
          >
            &#9776;
          </button>
          <nav className="hidden md:block  space-x-8 text-xl" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
