import React from "react";
import TutorsCard from "./TutorsCard";
import { fetchAvailableTutors } from "@/app/lib/tutors/data";

const AvailableTutor = async () => {
        const tutors = await fetchAvailableTutors();
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                tutors?.map((teacher) => (
                    <TutorsCard key={teacher._id} tutor={teacher} />
                ))
            }
        </div>
    )
}

export default AvailableTutor;