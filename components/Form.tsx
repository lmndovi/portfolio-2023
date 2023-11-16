"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Form = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSf7s6W-XvnfaPEBvtxGzkQ2DrwzqsR8ndOJMnhqVokkusD-2Q/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        const entryKey = `entry.${getEntryKey(key)}`;
        formDataEncoded.append(entryKey, value);
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Handle success
      router.push("/rsvp/success");
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    } catch (error) {
      // Handle submission error
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    const entryKeys: Record<string, string> = {
      name: "931457875",
      email: "133516482",
      subject: "1458966825",
      message: "778862622",
    };

    return entryKeys[key];
  };

  return (
    <div>
      <div>
        {/* Pop-up */}

        {showPopup && (
          <div className="p-5 rounded-xl bg-[#1B7DE5]/40 text-white mx-auto my-8 z-50 shadow-md top-2/4 w-1/2 text-center font-sans">
            <h1 className="text-lg font-bold ">Thank You For Your Message</h1>
            <p>We Will Get Back To You Shortly</p>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-1">
            <input
              placeholder="Name"
              className="contactInput w-1/2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Email"
              className="contactInput w-1/2"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <input
            placeholder="Message"
            className="contactInput"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex  justify-center">
          <button
            type="submit"
            className="bg-[#1B7DE5]/60 py-3 px-10 rounded-md text-white font-bold text-lg cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
