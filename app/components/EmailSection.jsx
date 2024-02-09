import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:y-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          My inbox is always open - whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/taeleenz38">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://github.com/taeleenz38">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" action="">
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="TyshawnJones@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
