"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service" + "_2he9cxm";
    const templateId = "template" + "_pk7s8ak";
    const publicKey = "Zew9Cp6" + "0gbBzkcXy-";

    // Validate fields are not empty
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Validate email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Prepare email parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Jerald Joyson",
      message: message,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email sent successfully");
        // Clear form fields
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error);
        toast.error("Failed to send email");
      }
    );
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-y-4 ">
      {/* Name input */}
      <div className="relative flex items-center">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* Email input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* Message text area */}
      <div className="relative flex items-center">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..!"
        />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      {/* Submit button */}
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
