import React from "react";
import { NextPage } from "next";
import MainButton from "../MainButton";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const ContactUs: NextPage = () => {
  return (
    <div className="py-8 px-4 text-white">
      {/* Contact Us Title */}
      <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">
        We would love to hear from you! Whether you have a question, need
        assistance, or are interested in working with us, feel free to reach
        out.
      </p>
      {/* Contact Information */}
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Our Contact Information
          </h2>
          <ul className="text-lg space-y-4">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@zynorax.com" className="text-yellow-600">
                info@zynorax.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +94 778917952
            </li>
            <li>
              <strong>Address:</strong> 28, Kappittawatta Road, Kalaeliya,
              Ja-Ela 11350, Sri Lanka
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg mb-6">
            Ready to take the next step? Let&apos;s work together and bring your
            ideas to life with innovative AI and web solutions.
          </p>
          <MainButton text="Get in Touch" link="/contact"></MainButton>
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

export default ContactUs;
