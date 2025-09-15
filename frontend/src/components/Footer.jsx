import React from "react";

function Footer() {
  return (
    <footer className="backdrop-blur-md bg-gray-900/80 text-gray-400 py-6 border-t border-gray-800 shadow-inner">
      <div className="container mx-auto text-center text-sm md:text-base">
        <p className="mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold hover:text-purple-400 transition-colors duration-200">
            Arun's Note
          </span>{" "}
          • All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-gray-500 text-lg">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="mailto:example@email.com"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
