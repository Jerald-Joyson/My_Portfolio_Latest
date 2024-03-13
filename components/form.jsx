"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4 ">
      {/* inputs */}
      <div className="relative flex items-center">
        <Input type="text" name="user_name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* inputs */}
      <div className="relative flex items-center">
        <Input type="email" name="user_email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* text area */}
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type your message..!" />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex itens-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
