"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Hero = () => {

    return (
        <section className="relative overflow-hidden from-blue-50 via-slate-50 pb-8 to-slate-50">

            <Swiper
                navigation
                pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
                    
                <SwiperSlide>
                    <div
                        className="hero min-h-[420px] md:min-h-[520px]"
                        style={{
                            backgroundImage:
                            "url(/hero.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        >
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Struggling with a tough subject?</h1>
                            <p className="mb-5">
                                You're not alone. We connect you with amazing tutors who make learning click. Stop feeling stuck and start understanding. Find a tutor who gets you and your learning style.
                            </p>
                            <button className="btn btn-primary">Find My Tutor</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div
                        className="hero min-h-[420px] md:min-h-[520px]"
                        style={{
                            backgroundImage:
                            "url(/hero.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        >
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Learn Your Way, On Your Schedule.</h1>
                            <p className="mb-5">
                                Forget rigid schedules and one-size-fits-all lessons. Find the perfect tutor who can adapt to your learning style and pace. We have a wide range of experts ready to help you with any subject, anytime.
                            </p>
                            <button className="btn btn-primary">Browse Tutors</button>
                            </div>
                        </div>
                        </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div
                        className="hero min-h-[420px] md:min-h-[520px]"
                        style={{
                            backgroundImage:
                            "url(/hero.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        >
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Unlock Your Potential.</h1>
                            <p className="mb-5">
                                Don't let difficult subjects hold you back. Our tutors are here to provide the guidance and support you need to conquer your academic challenges, boost your confidence, and achieve your goals.
                            </p>
                            <button className="btn btn-primary">Book a Tutor</button>
                            </div>
                        </div>
                        </div>
                </SwiperSlide>

            </Swiper>


        </section>
    );
};

export default Hero;