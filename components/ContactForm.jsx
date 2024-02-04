"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber,setPhoneNumber] = useState('')
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Full Name:", fullname);
    console.log("Email:", email);
    console.log("Message:", message);

    const res = await fetch("api/contact/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        phonenumber,
        email,
        message,
      }),
    });
    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);
    if (success) {
      setFullName("");
      setEmail("");
      setMessage("");
      setPhoneNumber("")
    }
  };

  return (
    <div className=" flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 border-b-2">
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5 text-center justify-center"
      >
        <div>
          <label htmlFor="fullname" className=" px-2">Full name</label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Enter Your Name"
            className=" text-black py-2 border border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="phonenumber" className=" px-2">phone number</label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phonenumber}
            type="text"
            id="phonenumber"
            placeholder="Enter Your phonenumber"
            className=" text-black py-2 border border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="email" className=" px-2">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Enter Your Email ID"
            className=" text-black py-2 border border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="message" className=" font-bold">Message : </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onFocus={true}
            
            id="message"
            placeholder="Enter Your Message"
            className='w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5 border' 
          ></textarea>
        </div>
        <Link href='/dashboard'>
        <button className="bg-green-700 p-3 text-white  px-5  font-bold justify-center text-center" type="submit" >
          Send
        </button>
        </Link>
      </form>
      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div
            key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}