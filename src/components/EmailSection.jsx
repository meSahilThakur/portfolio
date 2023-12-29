'use client'
import { LinkIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import Swal from 'sweetalert2'

const EmailSection = () => {
    
//By using resend mailer
    // const [emailSubmitted, setEmailSubmitted] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const data = {
    //         email: e.target.email.value,
    //         subject: e.target.subject.value,
    //         message: e.target.message.value
    //     }
    //     const JSONdata = JSON.stringify(data);
    //     const endpoint = "/api/send";

    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSONdata,
    //     }
    //     const response = await fetch(endpoint, options);
    //     const resData = await response.json();
    //     console.log(resData)
    //     if (response.status === 200){
    //         console.log('Message Sent')
    //         setEmailSubmitted(true)
    //     }
    // }


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        //Object with EmailJs serviceId, templateId, publicKey and template Params
        const data = {
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Sahil Thakur',
                message: message
            }
        }

        const showSuccessAlert = () => {
            Swal.fire({
                title: "Success",
                text: "Message Sent",
                icon: "success",
                confirmButtonText: "OK",
              });
        }

        const showErrorAlert = () => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<p>Message not sent</>'
              });
        }
        

        //send the email using EmailJs
        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
            showSuccessAlert();
        } catch (error) {
            showErrorAlert();
            console.log(error);
        }

    }

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-md absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/meSahilThakur/"} target="_blank">
            <LinkIcon className="h-5 w-5" />
          </Link>
          <Link href={"https://linkedin.com/in/meSahilThakur/"} target="_blank">
            <LinkIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">


        <label
            htmlFor="name"
            className="text-white block mb-1 text-sm font-bold"
          >
            Name
          </label>
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            name="name"
            type="text"
            id="name"
            required
            placeholder="Your Name"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />


          <label
            htmlFor="email"
            className="text-white block mb-1 text-sm font-bold"
          >
            Your Email
          </label>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            type="email"
            id="email"
            required
            placeholder="example@email.com"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />

          

          <label
            htmlFor="message"
            className="text-white block mb-1 text-sm font-bold"
          >
            Message
          </label>
          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            name="message"
            id="message"
            required
            placeholder="write you message..."
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />

          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
          >
            Send Message
          </button>   
        </form>
        
      </div>
    </section>
  );
};

export default EmailSection;
