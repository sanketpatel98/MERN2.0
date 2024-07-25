import { Footer } from "flowbite-react";
import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsMailbox
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Sanket's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://sanketpatel98.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sanket's Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/sanketpatel98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/sanketpatel98/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/* <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://gemini.google.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms &amp; Condition
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Sanket's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/_patel_sanket_/" icon={BsInstagram} />
            <Footer.Icon href="https://www.linkedin.com/in/sanketpatel98/" icon={BsLinkedin} />
            <Footer.Icon href="https://github.com/sanketpatel98" icon={BsGithub} />
            <Footer.Icon href="mailto:patelsanketr98@gmail.com" icon={BsMailbox} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
