import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import ImageSnippets from "../ImageSnippets";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Career: NextPage = () => {
  return (
    <div className="py-8 px-4 text-white">
      {/* Career Title */}
      <h1 className="text-4xl font-semibold mb-6">Careers at ZynoraX</h1>
      <p className="text-lg mb-8">
        Thank you for your interest in joining ZynoraX! While we currently do
        not have any open positions, we are always excited to connect with
        talented individuals who are passionate about AI and web development.
      </p>

      {/* No Vacancies Message */}
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            No Vacancies Available
          </h2>
          <p className="text-lg">
            At the moment, we do not have any vacancies. However, we are
            constantly growing and evolving, so please check back regularly for
            future opportunities. If you&apos;d like to stay updated on new
            openings, feel free to follow us on social media or reach out to us
            directly.
          </p>
        </section>

        {/* Work Culture Image */}
        <section>
          <div className="my-8">
            <Image
              src="/We2.jpg"
              alt="Team Collaboration and Culture"
              width={1024}
              height={600}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </section>

        {/* Work Culture */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Our Work Culture
          </h2>
          <p className="text-lg mb-6">
            At ZynoraX, we pride ourselves on fostering an innovative,
            inclusive, and collaborative work environment. Here&apos;s what you
            can expect as part of our team:
          </p>
          {/* Image Snippets */}
          <div className="pt-4">
            <ImageSnippets
              topics={[
                {
                  title: "Innovation-Driven",
                  description:
                    "We encourage creativity and new ideas. Every team member is empowered to push boundaries and contribute to the latest technologies that shape the future.",
                  imageSrc: "/Culture1.jpg",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe that great ideas come from working together. Our team thrives on collaboration across all departments, where everyone's input is valued.",
                  imageSrc: "/Culture2.jpg",
                },
                {
                  title: "Growth Opportunities",
                  description:
                    "Continuous learning is core to our culture. We provide resources and support for professional development, helping team members grow and take on new challenges.",
                  imageSrc: "/Culture3.jpg",
                },
                {
                  title: "Work-Life Balance",
                  description:
                    "We prioritize a healthy work-life balance with flexible schedules and remote work options, ensuring our team can thrive both professionally and personally.",
                  imageSrc: "/Culture4.jpg",
                },
                {
                  title: "Inclusive and Respectful",
                  description:
                    "We are committed to creating an inclusive environment where diversity is celebrated and every voice is heard. Respect and kindness are core to our culture.",
                  imageSrc: "/Culture5.jpg",
                },
              ]}
            />
          </div>
        </section>

        {/* Stay Connected */}
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Stay Connected
          </h2>
          <p className="text-lg mb-6">
            While there are no open positions right now, we would love to stay
            in touch! You can follow us on social media or sign up for updates
            about new career opportunities.
          </p>
        </section>

        {/* Social Media Links */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-2"
            >
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="text-yellow-600 hover:text-yellow-700 flex items-center space-x-2"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
