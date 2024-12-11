// Form.js
import { useState, useRef } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();
  const [id, template, key] = [
    import.meta.env.VITE_YOUR_SERVICE_ID,
    import.meta.env.VITE_YOUR_TEMPLATE_ID,
    import.meta.env.VITE_YOUR_PUBLIC_KEY,
  ];
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(id, template, form.current, {
        publicKey: key,
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("FAILED to send msg. Please try again: " + error.message);
        }
      );
  };
  return (
    <div className="flex flex-col w-full md:w-2/3 space-y-4">
      <h2 className="text-2xl md:3xl font-bold span">Let's work together</h2>
      <p className="text-white/70">
        Have a project idea, a question, or just want to say hello? I'm always
        excited to collaborate and bring new ideas to life.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="user_name"
            label="Your Name"
            placeholder="Your name"
          />
          <Input
            type="email"
            name="user_email"
            label="Email"
            placeholder="Email"
          />
        </div>
        <Textarea name="message" label="Message" placeholder="Enter message" />
        <button
          type="submit"
          value="send"
          className="px-6 py-2 mt-4 bg-gradient-to-r from-[#dd32f3] to-[#ce90cb] hover:scale-105 text-white font-semibold rounded-md hover:bg-teal-500"
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Form;
