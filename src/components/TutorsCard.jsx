import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TutorsCard = ({ tutor }) => {
    const { _id, name, photo, subject, institution, hourlyFee, location } = tutor;
    return (
        <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/10">
                <Image
                    alt="Tutor Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={photo || "No Photo Available"}

                    fill
                    unoptimized
                />
                <div className="absolute top-4 right-4">
                    <Chip
                        color="primary"
                        variant="solid"
                        className="font-bold shadow-lg shadow-blue-600/20"
                    >
                        {subject}
                    </Chip>
                </div>
            </div>
            <div className="p-8 flex flex-col grow space-y-4">
                <div className="space-y-2">
                    {/* <Link href={`/courses/${_id}`}> */}
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {name}
                        </h3>
                    {/* </Link> */}
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                        {/* By <span className="text-slate-900">instructor</span> */}
                        From <span className="text-slate-900">{institution}</span>
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {location}
                    </span>
                    {/* <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> 24 Lessons
                    </span> */}
                </div>

                <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
                    <span className="text-2xl font-black text-blue-600">${hourlyFee}</span>
                    {/* <span className="text-2xl font-black text-blue-600">${price}</span> */}

                    <Link href={`/tutors/${_id}`}>
                        <Button
                            variant="flat"
                            color="primary"
                            className="font-bold rounded-xl px-6"
                        >
                            Book Session
                        </Button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorsCard;