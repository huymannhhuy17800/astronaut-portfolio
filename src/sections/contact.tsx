import React, { useState, type ChangeEvent, type SyntheticEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    console.log({ ...formData });
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-fll gap-5 mb-10">
          <h2 className="text-heading">Feel free to contact</h2>
          <p className="font-normal text-neutral-400">
            Communication is the exchange of ideas, thoughts, and emotions
            through verbal or nonverbal means. It connects individuals, builds
            relationships
          </p>
        </div>
        <form action="" className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input field-input-focus"
              placeholder="Kai Havertz"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input field-input-focus"
              placeholder="Kai.Harvertz@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send ✈️
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
