"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedInIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (resData.status === 200) {
      console.log("Message Sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:y-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] hidden md:block from-purple-900 to-transparent rounded-full h-72 w-72 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/12 -translate-y-1/6 z-0"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          My inbox is always open - whether you have a question or just want to
          say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/taeleenz38">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/taelee3">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="email"
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
              name="subject"
              id="subject"
              required
              placeholder="Just saying hi!"
            />
          </div>
          <div className="mb-6 ">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                    Email sent successfully!
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
