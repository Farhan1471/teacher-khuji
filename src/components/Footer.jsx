import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa6";

const Footer = () => {
    return(
        <footer className="mt-10 bg-black text-gray-50">


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4 mx-auto max-w-6xl items-center justify-items-center">

                {/* Logo and description */}
                <div>
                    <h1 className="text-2xl font-bold text-center md:text-left">MediQueue</h1>
                    <p className="text-sm text-gray-400 text-center md:text-left">MediQueue is a tutor booking web application that allows students to register, browse tutors, and book online learning sessions based on subject and availability. </p>
                </div>

                {/* Contact */}
                <div>
                    <p className="font-semibold text-sm mb-2 text-center md:text-left">Contact Us</p>
                    <div className="flex flex-col items-center md:items-start text-gray-400">
                        <div className="flex gap-2 items-center">
                            <MdEmail />
                            <p>contact@mediqueue.com</p>
                        </div>

                        <div className="flex gap-2 items-center">
                            <IoIosCall />
                            <p>+8801846701079</p>
                        </div>
                        
                        <div className="flex gap-2 items-center">
                            <FaAddressCard />
                            <p>Furomon Pahar, Rangamati</p>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-3">
                    <FaGithub />
                    <FaLinkedin />
                    <FaFacebook />
                </div>
            </div>

            <div className="border-t border-gray-400 py-4 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} MediQueue. All rights reserved.
            </div>
            
        </footer>
    )
}

export default Footer;