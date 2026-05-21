import TutorsCard from "@/components/TutorsCard";
// import { fetchCourses } from "@/lib/courses/data";
import { Button } from "@heroui/react";
import { BookOpen, Filter } from "lucide-react";
import TutorsHeader from "@/components/TutorsHeader";
import { fetchTutors } from "../lib/tutors/data";


const TutorsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const tutors = await fetchTutors(params?.searchTerm || "");

    return (
        <div className="min-h-screen bg-slate-50">
            <TutorsHeader />

            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        All Tutors
                    </h2>
                    <Button
                        variant="flat"
                        className="rounded-full font-bold"
                    >
                        Filters
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        tutors?.map((teacher) => (
                            <TutorsCard key={teacher._id} tutor={teacher} />
                        ))
                    }
                </div>


            </main>
        </div>
    );
};

export default TutorsPage;