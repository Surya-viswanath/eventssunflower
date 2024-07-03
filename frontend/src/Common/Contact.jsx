

import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import logo from "./Logo1.jpg";
import toast from "react-hot-toast";
import { useAuth } from "../auth/AuthContext";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
const Contact = () => {
  const { user } = useAuth();
  // console.log(user)
//   const [email, setemail] = useState('');
// const [subject, setsubject] = useState('');
//   const [message, setmessage] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const { email,subject,message } = data;
    const loadingToast = toast.loading('Creating New Event...');
    
    try {
        // const imageResult = await uploadImage(image[0]);
        if (!user) {
          toast.error(
            "Please Log in first!"
          );
          return;
        }
        
       
            const contact = { 
                email,
                subject,
                message
            };
            await axios.post('http://localhost:4000/contact', contact);
            reset();
            toast.dismiss(loadingToast);
            toast.success("Event successfully added");
       
    } catch (error) {
        toast.dismiss(loadingToast);
        toast.error("Failed to add event");
    }
};
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Debug log
   
  //   if (!user) {
  //     toast.error("Please Log in first!");
  //     return;
  //   }

  //   const info = { email, subject, message };
  //   console.log("Form submitted",info);
  //   axios.post('http://localhost:4000/contact', info)
  //     .then(res => {
  //       console.log("Response data:", res.data); // Debug log
  //       toast.success("Message sent successfully!");
  //     })
  //     .catch(err => {
  //       console.error("Error:", err); // Improved error handling
  //       if (err.response) {
  //         // Server responded with a status other than 2xx
  //         console.error("Error response data:", err.response.data);
  //         toast.error("Failed to send message: " + err.response.data.message);
  //       } else if (err.request) {
  //         // Request was made but no response received
  //         console.error("Error request:", err.request);
  //         toast.error("No response from server. Please try again later.");
  //       } else {
  //         // Something else caused the error
  //         console.error("Error message:", err.message);
  //         toast.error("An error occurred: " + err.message);
  //       }
  //     });
  // };
  
    
  return (
    <div>
      <h2 className="text-4xl text-center font-semibold mt-5 underline">
        Contact Us
      </h2>
      <div className="mt-10 p-5 flex flex-col md:flex-row max-w-5xl mx-auto text-black">
        <div style={{ textAlign: 'left' }}>
          <h2 className="text-2xl font-semibold mb-3">Address</h2>
          <hr className="w-32" />
          <h2 className="text-2xl font-semibold">+91 9999999999</h2>
          <p className="text-base mb-3">Book online or call</p>
          <h2 className="text-2xl font-semibold">contact@dreamcraft.com</h2>
          <div className="flex items-center">
            <p className="text-base mb-3">
              Send us an email or use contact form
            </p>
            <AiOutlineArrowRight className="text-xl ml-2" />
          </div>
          <h2 className="text-2xl font-semibold">Our address</h2>
          <p className="text-base mb-3">
            Banani, Dhaka <br /> Bangladesh
          </p>
        </div>

        <div className="md:w-1/2 mt-3 md:mt-0 md:ml-20">
          <h2 style={{ textAlign: 'left', fontSize: '24px', fontWeight: '500' }}>SEND US A MESSAGE</h2>
          <hr className="w-52" />
         
          <form className="w-full space-y-2 p-3 md:p-5 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 py-1.5" style={{textAlign:'left'}}>
                            <span>Your email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="email"
                            {...register("email", { required: true, maxLength: 100 })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 py-1.5" style={{textAlign:'left'}}>
                            <span>Subject</span>
                        </label>
                        <input
                            type="text"
                            placeholder="subject"
                            {...register("subject", { required: true, maxLength: 100 })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 py-1.5" style={{textAlign:'left'}}>Your message</label>
                        <textarea
                            cols="10"
                            rows="5"
                            type="text"
                            placeholder="message"
                            {...register("message", { required: true })}
                            className="px-2.5 py-2 w-full border text-sm bg-body border-primary/20 rounded-md focus:border-primary/20 outline-none transition-colors duration-300"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="mx-auto rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
                        >
                            Send message
                        </button>
                    </div>
                </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;