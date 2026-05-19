import { Chip } from "@heroui/react";
import Image from "next/image";


const fetchSingleTutor = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`);
    const data = await res.json();
    return data || {};

}

const TutorDetailPage = async ({params}) => {
    const { id } = await params;
    const tutor = await fetchSingleTutor(id);
    console.log(tutor);

        const { _id, name, photo, subject, availableDays, availableTime, totalSlot, experience, teachingMode, institution, hourlyFee, location } = tutor;

    return(
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            alt="Tutor Image"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                            <div className="w-full h-px bg-slate-100"></div>
                            <ul className="space-y-3">
                                <li><strong>Subject</strong>: {tutor.subject}</li>
                                <li><strong>Experience</strong>: {tutor.experience} years</li>
                                {/* <li><strong>Available Days</strong>: {tutor.availableDays.join(", ")}</li> */}
                                <li><strong>Available Time</strong>: {tutor.availableTime}</li>
                                <li><strong>Total Slots</strong>: {tutor.totalSlot}</li>
                                <li><strong>Location</strong>: {tutor.location}</li>
                                <li><strong>Institution</strong>: {tutor.institution}</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TutorDetailPage;