import React from "react";
import { NextPage } from "next";
import MainButton from "../MainButton";
import Image from "next/image";

const AboutUs: NextPage = () => {
  return (
    <div className="py-8 px-4">
      {/* About Us Title */}
      <h1 className="text-4xl font-semibold mb-6">About Us</h1>
      <p className="text-lg mb-8">
        Welcome to <strong className="text-yellow-600">ZynoraX</strong>, where
        innovation meets excellence. We are a forward-thinking AI and Web
        Development company dedicated to empowering businesses with cutting-edge
        technology solutions that drive growth and success.
      </p>
      {/* Vision */}
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Our Vision
          </h2>
          <p className="text-lg">
            To be a global leader in transformative AI and web development
            solutions, empowering businesses and individuals with innovative
            technologies that shape the future of digital excellence.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Our Mission
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="font-bold text-yellow-600 mr-2">Innovate:</span>{" "}
              Develop cutting-edge AI and web solutions that redefine industry
              standards.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-600 mr-2">Empower:</span>{" "}
              Provide businesses with the tools to leverage advanced technology
              for growth and success.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-600 mr-2">Inspire:</span>{" "}
              Foster creativity, collaboration, and continuous learning within
              the tech community.
            </li>
            <li className="flex items-start">
              <span className="font-bold text-yellow-600 mr-2">Lead:</span>{" "}
              Drive the next technological revolution by staying at the
              forefront of emerging technologies.
            </li>
          </ul>
        </section>

        {/* Meet the Team */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="flex flex-col items-center">
              <Image
                src="/Dilanka.jpg"
                alt="Team Member 1"
                width={300}
                height={300}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">Dilanka Perera</h3>
              <p className="text-lg">Founder &amp; CEO</p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Core Values
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <span className="font-bold text-yellow-600 mr-2">
                Innovation:
              </span>{" "}
              Constantly evolving and pushing boundaries to deliver the best
              solutions.
            </li>
            <li>
              <span className="font-bold text-yellow-600 mr-2">Integrity:</span>{" "}
              We do what is right, not what is easy.
            </li>
            <li>
              <span className="font-bold text-yellow-600 mr-2">
                Collaboration:
              </span>{" "}
              Working together, both within the company and with clients, to
              achieve the best results.
            </li>
            <li>
              <span className="font-bold text-yellow-600 mr-2">
                Excellence:
              </span>{" "}
              Striving to deliver top-tier quality in everything we do.
            </li>
          </ul>
        </section>

        {/* Our Story
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Our Story
          </h2>
          <p className="text-lg">
            ZynoraX was founded in [year] with the goal of revolutionizing the
            way businesses leverage technology. Starting from a small team of
            passionate engineers, we&apos;ve grown into a global leader in AI
            and web development. Over the years, we&apos;ve delivered
            cutting-edge solutions to hundreds of clients, helping them navigate
            the challenges of the digital world.
          </p>
        </section> */}

        {/* Client Testimonials
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            What Our Clients Say
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-lg italic">
                &quot;ZynoraX transformed our business. Their innovative
                solutions helped us scale faster and more efficiently.&quot; -{" "}
                <strong>Ceynap</strong>
              </p>
            </div>
            <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-lg">
              <p className="text-lg italic">
                &quot;The team at ZynoraX exceeded our expectations. Their
                expertise in AI is unmatched!&quot; -{" "}
                <strong>NeuroClave</strong>
              </p>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg mb-6">
            Ready to take your business to the next level with AI and web
            solutions? Contact us today to get started.
          </p>
          <MainButton text="Get in Touch" link="/contact"></MainButton>
        </section>

        {/* Social Media Links */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-600 hover:text-yellow-700">
              Facebook
            </a>
            <a href="#" className="text-yellow-600 hover:text-yellow-700">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
