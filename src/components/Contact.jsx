import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WEB3FORMS_ACCESS_KEY = "6bec46c6-34ac-4833-9652-4244e3dfc93f";

const Contact = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setSubmitStatus("Please accept the contact permission checkbox.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    const data = new FormData();

    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append(
      "name",
      `${formData.firstName} ${formData.lastName}`.trim()
    );
    data.append("email", formData.email);
    data.append("message", formData.message);

    // Optional subject shown in your email
    data.append(
      "subject",
      `New Portfolio Contact Message from ${formData.firstName} ${formData.lastName}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus(
          `Thanks ${formData.firstName}! Your message has been sent successfully.`
        );

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          permission: false
        });
      } else {
        setSubmitStatus(
          "Something went wrong while sending your message. Please try again."
        );

        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      setSubmitStatus(
        "Unable to send your message right now. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900"
    >

      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card */}
      <div className="relative z-10 w-full flex justify-end items-end">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-emerald-500 w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >

          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Us
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-12 md:gap-16 w-full"
          >

            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">

              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">

                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                  />
                </div>

              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">

                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here"
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                  />
                </div>

              </div>

            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">

              {/* Permission */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">

                <input
                  type="checkbox"
                  id="permission"
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  style={{ accentColor: "white" }}
                />

                <label
                  htmlFor="permission"
                  className="cursor-pointer max-w-[280px] leading-snug"
                >
                  I give permission to contact me at this email address.
                </label>

              </div>

              {/* Right Section */}
              <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">

                <p className="leading-relaxed max-w-[400px]">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a
                    href="#"
                    className="underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="#"
                    className="underline hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">

                  <p className="max-w-[250px] leading-relaxed">
                    For information on how to unsubscribe, please review our{' '}
                    <a
                      href="#"
                      className="underline hover:text-white transition-colors"
                    >
                      privacy policy
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-emerald-500 transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send"}

                    {!isSubmitting && (
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </button>

                </div>

              </div>

            </div>

            {/* Submission Status */}
            {submitStatus && (
              <div
                className="text-sm font-semibold bg-black/10 border border-white/20 rounded-lg px-4 py-3"
                role="status"
              >
                {submitStatus}
              </div>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;