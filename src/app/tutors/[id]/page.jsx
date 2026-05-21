import { auth } from "@/app/lib/auth";
import BookingButton from "@/components/BookingButton";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";


const fetchSingleTutor = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data || {};

}

const TutorDetailPage = async ({params}) => {
    const { id } = await params;

    const {token} = await auth.api.getToken({
        headers: await headers(),
    }) 

    const tutor = await fetchSingleTutor(id, token);

        const { _id, name, photo, subject, availableDays, availableTime, totalSlot, experience, sessionStartDate, teachingMode, institution, hourlyFee, location } = tutor;

    return(
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            alt="Tutor Image"
                            className="object-contain transition-transform duration-700"
                            src={photo || "No Photo Available"}

                            fill
                            unoptimized
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl"
                            >
                                {tutor.teachingMode}
                            </Chip>
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 shadow-2xl space-y-8">
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Teacher Details</p>
                            
                        </div>

                        <div className="space-y-4">
                            <p className="text-slate-700 font-medium">
                                <strong>Instructor:</strong>  {tutor.name}
                            </p>
                            <p><strong>Hourly Fee</strong>: <Chip color="success" variant="sopd" className="ml-2 font-semibold"> TK {tutor.hourlyFee} </Chip></p>

                            <div className="w-full h-px bg-slate-100"></div>
                            <ul className="space-y-3">
                                <li><strong>Subject</strong>: {tutor.subject}</li>
                                <li><strong>Experience</strong>: {tutor.experience} years</li>
                                <li><strong>Available Time</strong>: {tutor.availableTime}</li>
                                <li><strong>Total Slots</strong>: {tutor.totalSlot}</li>
                                <li><strong>Total Slots</strong>: {tutor.sessionStartDate}</li>
                                <li><strong>Location</strong>: {tutor.location}</li>
                                <li><strong>Institution</strong>: {tutor.institution}</li>
                            </ul>
                        </div>
                        <BookingButton tutor={tutor} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorDetailPage;